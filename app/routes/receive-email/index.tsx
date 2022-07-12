import { ActionFunction, redirect } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, Link, useActionData } from '@remix-run/react'
import { useState } from 'react'
import { sendResetPasswordLink } from '~/services/password.service.server'
import { v4 as uuidv4 } from 'uuid'
import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { validateEmail } from '~/utils/validator.server'
import { findUserByEmail } from '~/services/user.service.serevr'
import { createUserSession } from '~/services/auth.service.server'
import { createUserVerificationToken } from '~/services/userVerification.service.server'
import { sendAccountVerificationMail } from '~/services/mail.service.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email') as string

  let url = request.url
  const errors = {
    email: await validateEmail(email),
  }
  const generatedToken = uuidv4() as string

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, fields: { email }, form: action }, { status: 400 })
  }
  const user = await findUserByEmail(email)
  if(user && user['isVerified'] == false) {
    const createVerificationToken= await createUserVerificationToken(user.id, generatedToken)
    if (createVerificationToken.success) {
      await sendAccountVerificationMail(email, url, generatedToken)
    }
    return await createUserSession(user?.id, '/confirmemail')
  } else if(user && user['isVerified'] == true){
    return await createUserSession(user?.id, '/successlogin')
  }
  else if(!user){
    return redirect('/confirmemail')
  }
}

export default function Forgotpassword() {
  const actionData = useActionData()
  const [val, setVal] = useState('')

  return (
    <>
      <div className='h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 text-sm bg-gray-50 font-inter'>
        <div>
          <div className='max-w-md w-full space-y-8'>
            <img src={logo} alt='' className='mt-44 mx-auto h-20 w-20' />
            <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
              Receive Confirmation Email
            </h2>
          </div>
          <div className='max-w-md w-full space-y-8 font-inter'>
            <div className='space-y-6'>
              <p className='mt-4 flex items-center  justify-start text-sm leading-5 font-normal text-gray-500'>
                Please enter your email address to receive confirmation mail link.
              </p>
              <div className='rounded-md -space-y-px'>
                <Form className='space-y-4' method='post' noValidate>
                  <div>
                    <label className='w-24 h-5 text-sm leading-5 font-medium'>
                      Email address
                      <input
                        value={val}
                        onChange={(event) => setVal(event.target.value)}
                        className={`${
                          actionData?.errors['email']
                            ? 'border border-red-400'
                            : ''
                        } appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3`}
                        name='email'
                        type='email'
                        style={{
                          borderColor: actionData?.errors['email'] && 'red',
                        }}
                      />
                    </label>
                    <div className='text-red-600'>
                      {actionData?.errors['email']}
                    </div>
                  </div>
                  <div className='mt-5'>
                    <button
                      type='submit'
                      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
                    >
                      Send verification mail
                    </button>
                  </div>
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
