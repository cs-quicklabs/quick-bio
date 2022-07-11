import { Link } from 'react-router-dom'
import { SearchIcon } from '@heroicons/react/solid'
import { Footer } from '../../components/Footer'
import { CallToAction } from '~/components/CallToAction'

export default function Refund() {
  return (
    <>
      <div id='__next' data-reactroot=''>
        <div className='flex-grow w-full max-w-7xl mx-auto xl:px-8 xl:flex min-h-full py-10'>
          <div className='flex-1 bg-white xl:flex max-content top-16'>
            <div className='b xl:flex-shrink-0 xl:w-64 bg-white h-full '>
              <div className='h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0 '>
                <div className='h-full relative '>
                  <div className='absolute inset-0 border-gray-200 rounded-lg '>
                    <div className='flex-1 flex justify-center lg:justify-end '>
                    </div>
                    <div className='h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0 '>
                      <div className='h-full md:relative -top-16 lg:top-auto'>
                        <div className='md:absolute inset-0 border-gray-200 rounded-lg '>
                          <div className=' '>
                            <h1 className='text-base font-extrabold py-2 sm:tracking-tight '>
                              <span className='text-gray-400'>CONTACT US</span>
                            </h1>
                            <h3 className='text-sm font-semibold text-gray-500 '>
                              Send us an email
                              <br />
                              admin@quicklook.me
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white lg:min-w-0 lg:flex-1'>
              <div className=' py-6 px-4 sm:px-6 lg:px-8 '>
                <div className=' h-full '>
                  <div className='relative inset-0 border-gray-200 rounded-lg mt-12 md:mt-0'>
                    <div className='flex justify-between w-full'>
                      <h1 className='text-4xl font-extrabold py-4 sm:text-5xl sm:tracking-tight'>
                        <span className='text-gray-900'>Refund Policy</span>
                      </h1>
                      
                    </div>
                    <h2 className='text-lg font-semibold text-gray-800 mt-6'>
                      Last updated: 29/06/2022
                    </h2>
                    <div className='mt-5'>
                      <p className='text-base text-gray-800'>
                        {' '}
                        You may request a refund within 3 days of your annual
                        Pro purchase or Pro renewal.
                      </p>
                      <p className='mt-5 text-base text-gray-800'>
                        If your request is received after that 3-day window, the
                        charge is non-refundable.{' '}
                      </p>
                      <p className='mt-5 text-base text-gray-800'>
                        To request a refund, simply include the following in a
                        message to our support team:
                      </p>
                      <ul className='list-disc list-inside ml-5 mt-5 mb-5 text-base text-gray-800'>
                        <li className='mt-2'>
                          Email address associated with your quicklook.me page
                        </li>
                        <li className='mt-2'>
                          Link to your quicklook.me page
                          (quicklook.me/yourusername)
                        </li>
                        <li className='mt-2'>
                          Date of purchase or renewal (if you have a screenshot
                          of the receipt, even better!)
                        </li>
                        <li className='mt-2'>
                          The word "REFUND" in the body of your email
                        </li>
                      </ul>
                      <p className='mt-2 text-base text-gray-800'>
                        If you are eligible for a refund, your request will be
                        evaluated and granted within 30 days.{' '}
                      </p>
                      <p className='mt-2 text-base text-gray-800'>
                        If you do not qualify for a refund because you contacted
                        us beyond 3 days of the charge, we'd recommend{' '}
                        
                          canceling your account
                        
                        so that it does not automatically renew again. You'll
                        still have access to your Pro features until the end of
                        your billing cycle.
                      </p>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <CallToAction />
      <Footer />
      </div>
    </>
  )
}
