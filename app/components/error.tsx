import tailwindStylesheetUrl from '../styles/tailwind.css'
import { Link, Links } from '@remix-run/react'
import { customError } from '~/types/error'

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }]
}

export default function ErrorHandler({ name, status }: customError) {
  return (
    <>
      <Links />
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <Link to='/' className='inline-flex'>
              <span className='sr-only'>QuickLook</span>
            </Link>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wide'>
                {status} error
              </p>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Page not found.
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className='mt-6'>
                <a
                  href='/'
                  className='text-base font-medium text-indigo-600 hover:text-indigo-500'
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
