import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import logo from '../../assets/images/logos/quicklook-icon.svg'
import clsx from 'clsx'

type MobProps = {
  open: any
  close: any
}

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }: MobProps) => (
        <>
          <Popover.Button className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'>
            <span className='sr-only'>Toggle Navigation</span>
            <svg
              aria-hidden='true'
              className='h-3.5 w-3.5 overflow-visible stroke-slate-700'
              fill='none'
              strokeWidth={2}
              strokeLinecap='round'
            >
              <path
                d='M0 1H14M0 7H14M0 13H14'
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d='M2 2L12 12M12 2L2 12'
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='duration-150 ease-in'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                as='ul'
                className='absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
              >
                <li>
                  <a
                    href='#features'
                    className='block w-full'
                    onClick={() => close()}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#testimonials'
                    className='block w-full'
                    onClick={() => close()}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href='#pricing'
                    className='block w-full'
                    onClick={() => close()}
                  >
                    Pricing
                  </a>
                </li>
                <li className='border-t border-slate-300/40 pt-4  font-medium'>
                  <a href='/login'>Login </a>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header({ isloggedin }: any) {
  return (
    <header className='py-10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className='relative z-50 text-md'>
          <ul className='flex items-center'>
            <li>
              <a href='/#' className='flex items-center gap-2'>
                <img src={logo} alt='hello' className='h-12 w-12' />
                <span className='text-lg font-bold '>
                  Quick<span className='text-indigo-500'>Look</span>
                </span>
              </a>
            </li>
            <li className='ml-12 hidden md:block'>
              <a
                href='#features'
                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer'
              >
                Features
              </a>
            </li>
            <li className='ml-6 hidden md:block'>
              <a
                href='#testimonials'
                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer'
              >
                Testimonials
              </a>
            </li>
            <li className='ml-6 hidden md:block'>
              <a
                href='#pricing'
                className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer'
              >
                Pricing
              </a>
            </li>
            <li className='ml-auto hidden md:block'>
              <a href='/login'>
                {isloggedin ? (
                  <span></span>
                ) : (
                  <p className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer'>
                    Login
                  </p>
                )}
              </a>
            </li>
            <li className='ml-auto md:ml-8'>
              <a
                href='/signup'
                className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'
              >
                <span className='font-semibold text-lg'>
                  Get started
                  <span className='hidden lg:inline font-semibold text-lg'>
                    {' '}
                    for Free
                  </span>
                </span>
              </a>
            </li>
            <li className='ml-5 -mr-1 md:hidden'>
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
