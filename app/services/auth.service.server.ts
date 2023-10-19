import { json, createCookieSessionStorage, redirect } from '@remix-run/node'
import { db } from '~/database/connection.server'
import type { LoginForm } from '~/types/loginForm.server'
import type { RegisterForm } from '~/types/regirsterForm.server'
import { createStripeCustomer, createUser } from './user.service.server'
import bcrypt from 'bcryptjs'
import type { ServerResponse, ValidCouponServerResponse } from '~/types/response.server'
import CryptoJs from 'crypto-js'
import { validateFirstName, validateLastName, validateSignupEmail } from '~/utils/validator.server'

const sessionSecret = process.env.SESSION_SECRET
const apiSecret = process.env.CONNECT_APP_SECRET

if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

if (!apiSecret) {
  throw new Error('CONNECT_APP_SECRET must be set')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'quicklook-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') return null
  return userId
}

export async function getCurrentUser(request: Request) {
  let userId = await getUserId(request)
  if (!userId) return null
  return db.user.findUnique({ where: { id: userId } })
}

export async function validateCoupon(code: string): Promise<ValidCouponServerResponse> {
  const data = await db.coupon.findUnique({
    where: {
      code: code,
    },
  })

  if (data?.id) {
    const validEndDate =
      new Date(data?.endDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)
    const validStartDate =
      new Date(data?.startDate).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)

    if (validEndDate && validStartDate) return { couponId: data?.id }
  }
  return { error: 'This coupon code is invalid or has expired' }
}

export const isTrialExpired = (args: { startDate: Date; trialDays: number }) => {
  const { startDate, trialDays } = args

  const currentDate = new Date().getTime()
  const trialExpireDate = new Date(
    new Date(startDate).getTime() + 86400 * 1000 * trialDays
  ).getTime()

  if (currentDate > trialExpireDate) return true
  return false
}

export async function register(user: RegisterForm): Promise<ServerResponse> {
  let newUser
  try {
    newUser = await createUser(user)
  } catch (error) {
    throw json(
      {
        error: `Something went wrong trying to create a new user.`,
        fields: { email: user.email },
      },
      { status: 500 }
    )
  }
  return {
    success: true,
    message: 'User created Successfully',
    data: { userId: newUser.id },
  }
}

export async function login(loginForm: LoginForm) {
  const user = await db.user.findFirst({
    where: {
      email: loginForm.email.toLowerCase().trim(),
    },
    include: {
      profile: true,
      paymentStatus: true,
    },
  })

  if (!user || !(await bcrypt.compare(loginForm.password, user.password))) {
    throw json(
      {
        error: `Either email or password you entered was not correct. Please try again.`,
      },
      { status: 400 }
    )
  }

  if (user.profile?.isVerified == false) {
    throw json({ error: 'Account Not verified' }, { status: 401 })
  }

  if (!user?.paymentStatus?.customerId) {
    await createStripeCustomer(user?.id)
  }

  return { id: user.id, email: loginForm.email }
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/?${searchParams}`)
  }
  return userId
}

export async function getUsers() {
  try {
    const users = await db.user.findMany()
    return users
  } catch (err) {
    return
  }
}

export async function getUser(request: Request, appAccount?: boolean) {
  const userId = await getUserId(request)

  if (typeof userId !== 'string') {
    return null
  }

  const user = await db.user.findFirst({
    where: {
      id: userId as string,
    },
    include: {
      coupon_code: true,
      paymentStatus: true,
      profile: true,
      profileInfo: true,
      profileImage: true,
      socialMedia: true,
      marketingUpdates: true,
      spotlightButton: true,
      video: true,
      testimonial: true,
      portfolioImage: {
        orderBy: { createdAt: 'asc' },
      },
      supportBanner: true,
      additionalLinks: {
        orderBy: { createdAt: 'asc' },
      },
      ...(appAccount && {
        connectAppAccount: {
          include: {
            connectedApps: {
              include: {
                users: {
                  select: {
                    firstname: true,
                  },
                },
              },
            },
          },
        },
      }),
    },
  })

  // To check if free trial has expired
  if (
    user &&
    !user.needPaymentToContinue &&
    !user.allowed_free_access &&
    !user.coupon_code?.id &&
    user.paymentStatus?.paymentStatus !== 'paid' &&
    isTrialExpired({ startDate: user.createdAt, trialDays: 14 })
  ) {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        needPaymentToContinue: true,
        profile: {
          update: {
            isPublished: false,
          },
        },
      },
    })

    return {
      ...user,
      needPaymentToContinue: true,
      profile: { ...user?.profile, isPublished: false },
    }
  }

  /*
  To check if user has already paid or has been given free access
  then update "needPaymentToContinue" to false
  **/
  if (
    user?.needPaymentToContinue &&
    (user.allowed_free_access ||
      user.coupon_code?.id ||
      user.paymentStatus?.paymentStatus === 'paid')
  ) {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        needPaymentToContinue: false,
      },
    })

    return { ...user, needPaymentToContinue: false }
  }

  return user
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}

export async function validateSecretKeyAndAppId(args: { secretKey: string; appId: string }) {
  const { secretKey, appId } = args

  if (!secretKey || !appId)
    throw json(
      {
        error: `Either app_Id or secret_key is missing.`,
      },
      { status: 400 }
    )

  const appData = await db.connectedApp
    .findUnique({
      where: {
        id: appId,
      },
      include: {
        account: true,
      },
    })
    .catch(() => {
      throw json(
        {
          error: `Internal Server Error`,
        },
        { status: 500 }
      )
    })

  if (!appData || decryptEncryptedKey(appData.account.secretKey) !== secretKey) {
    throw json(
      {
        error: `Either app_Id or secret_key is invalid.`,
      },
      { status: 401 }
    )
  }

  if (appData.isBlocked || appData.account.isBlocked)
    throw json(
      {
        error: 'This app is blocked. Please contact support for assistance.',
      },
      { status: 403 }
    )

  return true
}

// Encrypt
export const encryptSecretKey = (secretKey: string) => {
  return CryptoJs.AES.encrypt(secretKey, apiSecret).toString()
}

// Decrypt
export const decryptEncryptedKey = (encryptedKey: string) => {
  const bytes = CryptoJs.AES.decrypt(encryptedKey, apiSecret)
  return bytes.toString(CryptoJs.enc.Utf8)
}

export type connectAppSignUpType = {
  basics: {
    firstName: string
    lastName: string
    email: string
    userName?: string
    // image?: string //URL,
    // label?: string // Occupation
    // summary?: string //Intro,
    // location?: {
    //   city: string
    //   countryCode?: string
    // }
  }
  // education?: string
  // references?: [
  //   {
  //     reference: string
  //     name: string
  //   },
  // ]
}

export const validateConnectAppSignUpRequest = async (args: connectAppSignUpType) => {
  const { basics } = args || {}

  const errors = {
    email: await validateSignupEmail(basics?.email || ''),
    firstName: await validateFirstName(basics?.firstName || ''),
    lastName: await validateLastName(basics?.lastName || ''),
  }

  if (Object.values(errors).some(Boolean))
    throw json(
      {
        errors,
      },
      { status: 400 }
    )

  return
}
