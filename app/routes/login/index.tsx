import { LockClosedIcon } from '@heroicons/react/solid'
import { ActionFunction, json, redirect } from '@remix-run/node'

import { Link } from 'react-router-dom'

import { createUserSession, login } from '~/services/auth.service.server'
import { validateEmail, validatePassword } from '~/utils/validator.server'

import logo from '../../../assets/images/logos/quicklook-icon.svg'
import { Form, useActionData } from '@remix-run/react'

import { useState } from 'react'
import crossimg from '../../../assets/images/remove.png'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  let email = form.get('email') as string
  let password = form.get('password') as string

  const errors = {
    email: await validateEmail(email),
    password: await validatePassword(password),
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      { errors, fields: { email, password }, form: action },
      { status: 400 }
    )
  }
  const user = await login({ email, password })

  try {
    return createUserSession(user.id, '/dashboard')
  } catch (errors) {
    return { errors }
  }
}

export default function Login() {
  const actionData = useActionData()
  console.log(actionData?.data?.error)

  const [val, setVal] = useState({ email: '', password: '' })

  return (
    <>
      <div className='min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16'>
        <div
          className={`flex gap-4 mb-8 items-center justify-center  rounded-md px-6 py-2 w-2/7 ${
            actionData?.errors['email'] ? 'bg-red-50' : ''
          }`}
        >
          {/* change email to whatever name we pass */}
          {actionData?.errors['email'] ? (
            <>
              <img src={crossimg} alt='' className='h-4 w-4' />
              <p className='text-#065F46 font-normal'>
                {/* change email to whatever name we pass */}
                {actionData?.errors['email']}
              </p>
            </>
          ) : (
            <span></span>
          )}
        </div>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img src={logo} alt='' className='mx-auto h-20 w-auto' />
            <h2 className='mt-6 text-center text-3xl font-[750] text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <div>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm -space-y-px'>
                <Form className='space-y-4' method='post'>
                  <div>
                    <div>
                      <input
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        name='email'
                        placeholder='Email address'
                      />

                      <div className='text-red-600 text-sm '>
                        {actionData?.errors['email']}
                      </div>
                    </div>
                    <div>
                      <input
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        type='password'
                        name='password'
                        value={val.password}
                        onChange={(event) => {
                          setVal({
                            ...val,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        placeholder='Password'
                      />

                      <div className='text-red-600 text-sm '>
                        {actionData?.errors['password']}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-3.5 font-semibold gap-2'>
                      <input
                        type='checkbox'
                        name='rememberMe'
                        style={{
                          borderColor: actionData?.errors['name'] && 'red',
                        }}
                        className='h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm'
                      />
                      <label htmlFor=''> Remember Me</label>
                    </div>
                    <div className='text-sm mt-3.5'>
                      <Link
                        to='/forgot-password'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 `}
                    >
                      <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        <LockClosedIcon
                          className={`h-5 w-5 text-indigo-500 group-hover:text-indigo-400 
                          `}
                          aria-hidden='true'
                        />
                      </span>
                      Sign in
                    </button>
                  </div>
                  <p className='mt-2 text-center text-sm'>
                    <Link
                      to='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Did not receive confirmation email?
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
