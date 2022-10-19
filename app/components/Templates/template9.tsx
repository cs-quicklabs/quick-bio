import React from 'react'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
import facebook from '../../../assets/images/socialIcons/fbIcon5.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon5.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon5.png'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'
import defaultimg from '../../../assets/images/profile.png'
import { useLocation } from '@remix-run/react'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import PortfolioAddon from './addOns/portfolio'

function Template9({
  input,
  loaderData,
  primaryRestore,
  secondaryRestore,
  mode,
}: any) {
  const Location = useLocation()

  const nav = Location.pathname.includes(`${loaderData.username}`)
  return (
    <>
      {loaderData?.supportBanner?.toggleBanner && (
        <BannerAddOn mode={mode} loaderData={loaderData} />
      )}
      <div className={`flex h-[25vh] flex-col md:h-[52vh] `}>
        <div>
          {primaryRestore || loaderData?.profileImage?.primaryImage ? (
            <img
              src={
                primaryRestore
                  ? DefaultCoverPicture
                  : loaderData?.profileImage?.primaryImage
              }
              className=" h-[20vh] w-[100%] object-cover md:h-[40vh]"
              alt=""
            />
          ) : null}
        </div>
        <div
          className={`relative flex justify-center  ${
            primaryRestore || loaderData?.profileImage?.primaryImage
              ? 'bottom-[6rem] md:bottom-[12rem]'
              : 'bottom-[-11rem]'
          }`}
        >
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ? (
            <img
              src={
                secondaryRestore
                  ? defaultimg
                  : loaderData?.profileImage?.secondaryImage
              }
              alt=""
              className=" h-[8rem] w-[8rem] rounded-full drop-shadow md:h-[18rem] md:w-[18rem] md:border-[15px] md:border-white"
            />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl font-extrabold leading-10 md:text-4xl">
          {loaderData?.firstname} {loaderData?.lastname}
        </div>
        <div className="text-xs font-medium leading-8 md:text-2xl ">
          {input.occupation} {input.location && input.occupation ? `in` : ''}{' '}
          {input.location}
        </div>
        <div className="w-[22rem] md:w-full">
          {loaderData?.spotlightButton?.toggleSpotlight && (
            <Spotlightbtn loaderData={loaderData} />
          )}
        </div>

        <div className="w-[22rem] md:w-full">
          {loaderData?.spotlightButton?.toggleSpotlight && (
            <AdditionalLinksAddOn loaderData={loaderData} />
          )}
        </div>
        <div className="m-auto flex w-[20rem] flex-wrap pt-[2.5rem] md:w-[35rem]">
          {' '}
          <pre className="whitespace-pre-wrap break-all font-sans text-xs font-normal leading-5 text-gray-500 md:text-base">
            {input?.description?.trim()}{' '}
          </pre>{' '}
        </div>
        <div className="m-auto flex w-[20rem] flex-wrap md:w-[35rem]">
          {loaderData?.testimonial?.testimonialText && (
            <TestimonialAddOn
              testimonialText={loaderData?.testimonial?.testimonialText}
              testimonialBy={loaderData?.testimonial?.testimonialBy}
            />
          )}
        </div>
        <div className="mr-[3.5rem]">
          {loaderData?.video?.videoLink && (
            <VideoAddOn videoLink={loaderData?.video?.videoLink} />
          )}
        </div>
        <div className="ml-[5rem] flex w-[50rem] items-center justify-center pr-[4rem] lg:px-0 lg:pr-0 lg:pl-0">
          <PortfolioAddon loaderData={loaderData} />
        </div>
        <div className="mt-5 flex w-[20rem] items-center gap-8 md:w-full md:flex-col">
          <div className="flex w-max items-center justify-center gap-4 text-xs leading-6 md:text-base md:font-normal">
            <div className="w-[18px] ">
              <BriefcaseIcon />
            </div>
            {input.company}
          </div>
          <div className="flex w-max items-center justify-center gap-4 text-xs leading-6 md:text-base md:font-normal">
            <div className="w-[18px] ">
              <AcademicCapIcon />
            </div>
            {input.education}{' '}
          </div>
        </div>
      </div>
      <footer
        className={`flex w-full items-center justify-center gap-4 pb-[5rem] md:gap-8  ${
          nav ? '' : ''
        } ${loaderData?.portfolioImage[0] ? 'pt-[2rem]' : 'pt-[0rem]'}`}
      >
        {loaderData?.socialMedia?.facebookLink ? (
          <a
            href={`https://${loaderData?.socialMedia?.facebookLink}`}
            target="_blank"
          >
            <img src={facebook} alt="" className="h-auto w-9 md:w-11" />
          </a>
        ) : null}
        {loaderData?.socialMedia?.twitterLink ? (
          <a
            href={`https://${loaderData?.socialMedia?.twitterLink}`}
            target="_blank"
          >
            <img src={twitter} alt="" className="h-auto w-9 md:w-11" />
          </a>
        ) : null}
        {loaderData?.socialMedia?.youtubeLink ? (
          <a
            href={`https://${loaderData?.socialMedia?.youtubeLink}`}
            target="_blank"
          >
            <img src={youtube} alt="" className="h-auto w-9 md:w-11" />
          </a>
        ) : null}
      </footer>
    </>
  )
}

export default Template9
