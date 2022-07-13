import { ActionFunction, redirect } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { useState } from 'react'
import { getUserById, upateUserPassword } from '~/services/user.service.serevr'
import {
  validateComfirmPassword,
  validatePassword,
} from '~/utils/validator.server'
import logo from '../../../assets/images/logos/quicklook-icon.svg'

export const action: ActionFunction = async ({ request, params }) => {
  const user = await getUserById(params.userId as string)
  
  const formData = await request.formData()
  const password = formData.get('password') as string
  const confirmpassword = formData.get('confirmpassword') as string

  const errors = {
    password: await validatePassword(password),
    confirmpassword: await validateComfirmPassword(password, confirmpassword),
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      { errors, fields: { password, confirmpassword }, form: action },
      { status: 400 }
    )
  }

  await upateUserPassword(user?.id as string, password)
  return redirect('/passwordchangesuccess')
}

export default function Password() {
  const actionData = useActionData()

  const [val, setVal] = useState({ password: '', confirmpassword: '' })

  return (
    <>
      <div className='h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-sm font-inter bg-gray-50'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img src={logo} alt='' className='mx-auto h-20 w-auto' />
            <h2 className='mt-6 text-center text-3xl font-[750] text-gray-900'>
              Password Reset
            </h2>
          </div>
          <div>
            <div className='mt-8 space-y-6'>
              <div className='rounded-md  -space-y-px'>
                <Form className='space-y-4' method='post'>
                  <div>
                    <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                      Password
                      <input
                        value={val.password}
                        onChange={(event) => {
                          setVal({
                            ...val,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                          actionData?.errors['password']
                            ? 'border border-red-400'
                            : ''
                        }`}
                        name='password'
                        type='password'
                        style={{
                          borderColor: actionData?.errors['password'] && 'red',
                        }}
                      />
                    </label>
                    <div className='text-red-600'>
                      {actionData?.errors['password']}
                    </div>
                    <div className='mt-2'>
                      <label className='text-gray-700 w-24 h-5 font-medium leading-5 text-sm'>
                        Confirm Password
                        <input
                          value={val.confirmpassword}
                          onChange={(event) => {
                            setVal({
                              ...val,
                              [event.target.name]: event.target.value,
                            })
                          }}
                          className={`box-border appearance-none block w-full h-10 px-2.5 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1.5 ${
                            actionData?.errors['confirmpassword']
                              ? 'border border-red-400'
                              : ''
                          }`}
                          name='confirmpassword'
                          type='password'
                          style={{
                            borderColor:
                              actionData?.errors['confirmpassword'] && 'red',
                          }}
                        />
                      </label>
                    </div>

                    <div className='text-red-600'>
                      {actionData?.errors['confirmpassword']}
                    </div>
                  </div>
                  <div className='mt-5'>
                    <button
                      type='submit'
                      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
                    >
                      Reset Password
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
