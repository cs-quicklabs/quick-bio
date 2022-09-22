import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';
import AccountBio from './AccountBio';
import AccountTemplate from './AccountTemplate';
import DefaultProfileIcon from '../../../assets/images/profile.png';
import UploadImages from '../UploadImages/UploadImages';
import SocialProfile from '../SocialProfile/AddMoreSocialLinks';
import NoTestimonial from '../Testimonial/NoTestimonial';
import NoVideo from '../Video/NoVideo';
import Portfolio from '../Portfolio';
import SpotlightButton from '../Spotlight';
import Banner from '../Banner';


const navigationFirst = [
  { name: 'Design Templates', subheading: 'Pick your design Template' },
  { name: 'Bio', subheading: 'Introduction, Work and Education Details' },
  { name: 'Social Links', subheading: 'Links to Social Profile' },
  { name: 'Images', subheading: 'Update Images in your templates' },
  { name: 'Support Banner', subheading: 'Add a support banner on top of your profile' },
]

const navigationSecond = [
  { name: 'Spotlight Button', subheading: 'Add a call to action button on profile' },
  { name: 'Add Video', subheading: 'Add a video link to your profile' },
  { name: 'Add Testimonials', subheading: 'Add testimonials to your profile' },
  { name: 'Add Portfolio', subheading: 'Add Portfolio to your Profile' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AccountSideBar({ setAdditionalLinkUpdateMessage, additionalLinkUpdateMessage, showBanner, setShowBanner, initialInput,setMessage,bioMessage,setBioMessage, showSpotlight, setShowSpotlight, inputVideo, setInputVideo,inputTestimonial ,setInputTestimonial, showPortfolio, setShowPortfolio, showAddVideo, setShowAddVideo, setShowTestimonial, showTestimonial, successUpdateMessage,message, showSocialLinks, setshowSocialLinks,showTemplate, setshowTemplate,showImages, setshowImages, loaderData, setshow, input, setinput, mode, setshowBio, showBio, setmode, primaryRestore, secondaryRestore }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [showImages, setshowImages] = useState(false);
  // const [showTemplate, setshowTemplate] = useState(false);
  // const [showSocialLinks, setshowSocialLinks] = useState(false);
useEffect(() => {
 if(showImages && mode ==='mobile') {setshowImages(true)}
}, [mode,showImages])
let hamburger = !sidebarOpen && !showSpotlight && !showPortfolio && !showAddVideo && !showTestimonial && !showSocialLinks &&!showTemplate && !showImages && !showBio;
  const Location = useLocation();

  return (

    <>
      <div className='' onClick={e => e.stopPropagation()}>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-0"  />
            </Transition.Child>

            <div className="fixed inset-0 flex z-10 overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="absolute flex-1 flex flex-col bg-white w-full md:max-w-xs lg:max-w-md h-screen">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 mt-[1.3rem]">
                      <button
                        type="button"
                        className="flex items-center justify-center h-10 w-10 mr-1 rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pb-4 overflow-y-auto mt-[1rem]">
                    <div className="flex-shrink-0 flex p-4">
                      <a href="#" className="flex-shrink-0 group block">
                        <div className="flex items-center">
                          <div>
                            <img
                              data-cy="profileImage"
                              className="inline-block h-10 w-10 rounded-full"
                              src={DefaultProfileIcon}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{loaderData?.firstname} {loaderData?.lastname}</p>
                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <div className='text-xs mt-2 font-medium text-gray-500 group-hover:text-gray-700 pl-4 border-t border-gray-200 bg-gray-50 w-full leading-5'>
                        Basic Profile
                      </div>
                      <nav className="flex-1 bg-white ">
                        {navigationFirst.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => {
                              if (item.name === 'Bio') {
                                setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(true);
                                setShowBanner(false)
                              }
                              if (item.name === 'Design Templates') {
                               setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(true);
                                setshowBio(false);
                                setShowBanner(false)
                              }
                              if (item.name === 'Social Links') {
                                setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(true);
                                setshowTemplate(false);
                                setshowBio(false);
                                setShowBanner(false)
                              }
                              if (item.name === 'Images') {
                                setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(true);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(false);
                                setShowBanner(false)
                              }
                              if (item.name === 'Support Banner') {
                                setShowBanner(true)
                                setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(false);
                              }
                            }}
                            className={classNames(

                              ''
                            )}
                          >
                            <div className='flex justify-between cursor-pointer border-t border-gray-200 px-2 py-4'>
                              <div className=''>
                                <p className='group flex bg-white items-center leading-5 px-2 text-sm font-medium rounded-md'>
                                  {item.name}
                                </p>

                                <p className='px-2 text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                                  {item.subheading}
                                </p>
                              </div>
                              <div className='text-gray-400 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </nav>
                      <div className='z-0'>
                        {showBio ?
                          <AccountBio bioMessage={bioMessage} setBioMessage={setBioMessage} setshowBio={setshowBio} occupation={loaderData?.profileInfo?.occupation} company={loaderData?.profileInfo?.company} education={loaderData?.profileInfo?.education} bio={loaderData?.profileInfo?.bio} location={loaderData?.profileInfo?.location} input={input} setinput={setinput} mode={mode} setmode={setmode} /> :
                          null
                        }
                        {showTemplate ?
                          <AccountTemplate setshowTemplate={setshowTemplate} setshow={setshow} mode={mode} setmode={setmode} /> :
                          null
                        }
                        {showSocialLinks ?
                          <SocialProfile setMessage={setMessage} successUpdateMessage={successUpdateMessage} message={message} setshowSocialLinks={setshowSocialLinks} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                          null
                        }
                        {showImages ?
                          <UploadImages setshowImages={setshowImages} mode={mode} loaderData={loaderData} setmode={setmode} primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} /> :
                          null
                        }
                        {showBanner ?
                        <Banner showBanner={showBanner} setShowBanner={setShowBanner} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                        null}
                      </div>

                    </div>

                    <div>
                      <div className='text-xs font-medium text-gray-500 group-hover:text-gray-700 pl-4 border-t border-gray-200 bg-gray-50 w-full leading-5 mt-0'>
                        Advanced Features
                      </div>

                      <nav className="flex-1 bg-white ">
                        {navigationSecond.map((item) => (
                          <a
                            key={item.name}
                            // href={item.href}
                            data-cy={`${item.name}`}
                            onClick={() => { 
                              if (item.name === 'Spotlight Button') {
                                setShowSpotlight(true);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(false);
                                setShowBanner(false)
                              }
                              if (item.name === 'Add Testimonials') {
                                setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(false);
                                setShowTestimonial(true);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(false);
                                setShowBanner(false)
                              }
                              if (item.name === 'Add Video') {
                                setShowSpotlight(false);
                                setShowPortfolio(false);
                                setShowAddVideo(true);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(false);
                                setShowBanner(false)
                              }
                              if (item.name === 'Add Portfolio') {
                                setShowPortfolio(true);
                                setShowAddVideo(false);
                                setShowTestimonial(false);
                                setSidebarOpen(false);
                                setshowImages(false);
                                setshowSocialLinks(false);
                                setshowTemplate(false);
                                setshowBio(false);
                                setShowSpotlight(false);
                                setShowBanner(false)
                              }
                            }}
                            // className={classNames(
                            //   Location.pathname.includes(item.href) ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:text-gray-600',
                            //   ''
                            // )}
                            className={classNames(
                             'hover:bg-gray-50'
                            )}
                          >
                            <div className='flex justify-between cursor-pointer border-t border-gray-200 px-2 py-4 '>
                              <div className=''>
                                <p className='group flex bg-white items-center px-2 text-sm font-medium rounded-md'>
                                  {item.name}
                                </p>

                                <p className='px-2 text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                                  {item.subheading}
                                </p>
                              </div>
                              <div className='text-gray-400 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        ))}
                        {showSpotlight ?
                          <SpotlightButton showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} loaderData={loaderData} input={input} setinput={setinput} mode={mode} setmode={setmode} /> :
                          null
                        }
                        {showTestimonial ?
                        <NoTestimonial setShowTestimonial={setShowTestimonial} loaderData={loaderData} input={input} setinput={setinput} mode={mode} setmode={setmode} /> :
                        null
                      }
                      {showAddVideo ?
                          <NoVideo inputVideo={inputVideo} setInputVideo={setInputVideo} setShowAddVideo={setShowAddVideo} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                          null
                        }
                        {showPortfolio ?
                          <Portfolio setShowPortfolio={setShowPortfolio} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                          null
                        }
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* static desktop  */}

        <div className={`hidden lg:flex ${mode === 'mobile' ? 'w-[16rem] xl:w-96' : 'lg:w-96'}  md:flex-col md:fixed md:inset-y-0 mt-12 font-inter`}>
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-3 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex pt-3 pb-2 px-6">
                <a href="#" className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        data-cy="profileImage"
                        className="inline-block h-9 w-9 rounded-full"
                        src={loaderData?.profileImage?.secondaryImage ? loaderData?.profileImage?.secondaryImage : DefaultProfileIcon}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">{loaderData?.firstname} {loaderData?.lastname}</p>
                      <p className="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <div className='text-xs mt-2 font-medium text-gray-500 group-hover:text-gray-700 pl-7 border-t border-gray-200 bg-gray-50 w-full leading-5'>
                  Basic Profile
                </div>
                <nav className="flex-1 bg-white">
                  {navigationFirst.map((item) => (
                    <div
                      key={item.name}
                      data-cy={`${item.name}`}
                      onClick={() => {
                        if (item.name === 'Bio') {
                          setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(true);
                          setShowBanner(false)
                        }
                        if (item.name === 'Design Templates') {
                         setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(true);
                          setshowBio(false);
                          setShowBanner(false)
                        }
                        if (item.name === 'Social Links') {
                          setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(true);
                          setshowTemplate(false);
                          setshowBio(false);
                          setShowBanner(false)
                        }
                        if (item.name === 'Images') {
                          setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(true);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(false);
                          setShowBanner(false)
                        }
                        if (item.name === 'Support Banner') {
                          setShowBanner(true)
                          setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(false);
                        }
                      }}
                      className={classNames(

                        'hover:bg-gray-50'
                      )}
                    >
                      <div className='flex justify-between cursor-pointer border-t border-gray-200 px-5 py-4'>
                        <div className=''>
                          <p className='group flex  items-center leading-5 px-2 text-sm font-medium rounded-md text-gray-900'>
                            {item.name}
                          </p>

                          <p className='px-2 text-sm leading-5 font-normal text-gray-500 group-hover:text-gray-700'>
                            {item.subheading}
                          </p>
                        </div>
                        <div className='text-gray-400  flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </nav>
                {showBio ?
                  <AccountBio initialInput={initialInput} bioMessage={bioMessage} setBioMessage={setBioMessage} setshowBio={setshowBio} occupation={loaderData?.profileInfo?.occupation} company={loaderData?.profileInfo?.company} education={loaderData?.profileInfo?.education} bio={loaderData?.profileInfo?.bio} location={loaderData?.profileInfo?.location} input={input} setinput={setinput} mode={mode} setmode={setmode} /> :
                  null
                }
                {showTemplate ?
                  <AccountTemplate setshowTemplate={setshowTemplate} setshow={setshow} mode={mode} setmode={setmode} /> :
                  null
                }
                {showSocialLinks ?
                  <SocialProfile setMessage={setMessage} successUpdateMessage={successUpdateMessage} message={message} setshowSocialLinks={setshowSocialLinks} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                  null
                }
                {showImages ?
                  <UploadImages setshowImages={setshowImages} loaderData={loaderData} mode={mode} setmode={setmode} primaryRestore={primaryRestore} secondaryRestore={secondaryRestore} /> :
                  null
                }
                {showBanner ?
                <Banner showBanner={showBanner} setShowBanner={setShowBanner} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                null}

              </div>

              <div>
                <div className='text-xs font-medium text-gray-500 group-hover:text-gray-700 pl-7 border-t border-gray-200 bg-gray-50 w-full leading-5 mt-0'>
                  Advanced Features
                </div>

                <nav className="flex-1 bg-white ">
                  {navigationSecond.map((item) => (
                    <div
                      key={item.name}
                      data-cy={`${item.name}`}
                      onClick={() => {
                        if (item.name === 'Spotlight Button') {
                          setShowSpotlight(true);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(false);
                          setShowBanner(false)
                        }
                        if (item.name === 'Add Testimonials') {
                          setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(false);
                          setShowTestimonial(true);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(false);
                          setShowBanner(false)
                        }
                        if (item.name === 'Add Video') {
                          setShowSpotlight(false);
                          setShowPortfolio(false);
                          setShowAddVideo(true);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(false);
                          setShowBanner(false)
                        }
                        if (item.name === 'Add Portfolio') {
                          setShowPortfolio(true);
                          setShowAddVideo(false);
                          setShowTestimonial(false);
                          setSidebarOpen(false);
                          setshowImages(false);
                          setshowSocialLinks(false);
                          setshowTemplate(false);
                          setshowBio(false);
                          setShowSpotlight(false);
                          setShowBanner(false)
                        }
                      }}
                      className={classNames(
                        'hover:bg-gray-50'
                      )}
                    >
                      <div className='flex justify-between cursor-pointer border-t border-gray-200 px-5 py-4'>
                        <div className=''>
                          <p className='group flex  items-center px-2 text-sm font-medium rounded-md text-gray-900'>
                            {item.name}
                          </p>

                          <p className='px-2 text-sm font-normal text-gray-500 group-hover:text-gray-700'>
                            {item.subheading}
                          </p>
                        </div>
                        <div className='text-gray-400 flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                  {showSpotlight ?
                  <SpotlightButton setAdditionalLinkUpdateMessage={setAdditionalLinkUpdateMessage} additionalLinkUpdateMessage={additionalLinkUpdateMessage} showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} loaderData={loaderData} input={input} setinput={setinput} mode={mode} setmode={setmode} /> :
                  null
                }
                  {showTestimonial ?
                  <NoTestimonial inputTestimonial={inputTestimonial} setInputTestimonial={setInputTestimonial} setShowTestimonial={setShowTestimonial} loaderData={loaderData} input={input} setinput={setinput} mode={mode} setmode={setmode} /> :
                  null
                }
                {showAddVideo ?
                    <NoVideo inputVideo={inputVideo} setInputVideo={setInputVideo} setShowAddVideo={setShowAddVideo} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                    null
                  }
                  {showPortfolio ?
                    <Portfolio setShowPortfolio={setShowPortfolio} loaderData={loaderData} mode={mode} setmode={setmode} /> :
                    null
                  }
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="fixed top-[0] z-50 lg:hidden pl-1 pt-0.5 lg:pl-3 lg:pt-3">
            
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:white"
              onClick={() => setSidebarOpen((prev)=>prev = sidebarOpen ? false : true)}
            >
              <span className="sr-only">Open sidebar</span>
           {hamburger ?    <MenuIcon className="h-6 w-6 " aria-hidden="true" />: null} 
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
