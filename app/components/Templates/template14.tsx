import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
import DefaultCoverPicture from '../../../assets/images/temp9Cover.png'

export default function Template14 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
    
    {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }

    <div className={`flex overflow-auto scrollbar-hide font-inter bg-white justify-center overflow-none pb-[1.5rem] ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:justify-start'} ${nav? '' :''}`} >

      <div className={`flex-shrink-0 flex flex-col ${mode ==='mobile' ? 'w-full ' : ''} ${nav? '' :''}`} >

      <div className=''>
        {primaryRestore || loaderData?.profileImage?.primaryImage ? (
            <img
              src={
                primaryRestore
                  ? DefaultCoverPicture
                  : loaderData?.profileImage?.primaryImage
              }
              className={`w-[100%] object-cover ${
                mode === 'mobile' ? 'h-[30vh] xl:h-[40vh]' : 'xl:absolute h-[35vh] md:h-[40vh] lg:50vh'
              }`}
              alt=""
            />
          ) : null}
        </div>
        <div
          className={`relative flex justify-center  ${
            primaryRestore || loaderData?.profileImage?.primaryImage
              ? ` ${
                  mode === 'mobile'
                    ? 'bottom-[5rem] right-0 lg:right-[4rem] xl:bottom-[8rem] xl:right-0'
                    : 'bottom-[6rem] sm:bottom-[8rem] xl:bottom-[-9rem]'
                }`
              : 'bottom-[-11rem]'
          } ${mode === 'mobile' ? 'bottom-[5rem]' : ''}`}
        >
          {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`flex rounded-lg object-cover w-[15rem] h-[15rem] justify-center items-center  ${mode ==='mobile' ? 'lg:w-[18rem] lg:h-[20rem] mediumLaptop:w-[28rem] mediumLaptop:h-[29rem]' : 'lg:w-[25rem] lg:h-[25rem] xl:h-[33rem] mediumLaptop:w-[25rem] largeLaptop:w-[30rem] largeLaptop:h-[41rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}
          
        </div>

      </div>

      <div className={`shadow-xl rounded-lg flex flex-col justify-center items-center w-[90%] mt-[-5rem] ml-[1.5rem] px-[1rem] sm:mt-[-7rem] sm:ml-[2.5rem] ${mode ==='mobile' ? 'lg:mt-[-3rem] xl:mt-[-6rem]' : 'lg:w-[35rem] xl:items-start xl:mt-[21rem] xl:rounded-none xl:shadow-none med:mt-[24rem] medium:mt-[20rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'} ${(mode !='mobile' && loaderData?.video?.videoLink) ||  (mode !='mobile' && loaderData?.portfolioImage.length > 0) || (mode !='mobile' && loaderData?.testimonial?.testimonialText)  ? 'mediumLaptop:mt-[32rem]' : mode ==='mobile' ? '' : 'mediumLaptop:mt-[23rem]'} ${nav ? 'lg:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]' : ''}`}>

        <div className={`${mode ==='mobile' ? '' : 'xl:border-b-[1px] xl:border-gray-300 xl:pb-[1rem]'}`} >
        <h4 className={`text-black text-center text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : 'xl:text-left xl:text-4xl xl:font-extrabold xl:leading-10 '}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-gray-600 text-center break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:w-max xl:text-gray-500 mediumLaptop:w-full xl:text-2xl xl:leading-8 xl:font-medium xl:mt-[0.5rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}
        </div>
     
          

            <div className={`pb-[1rem] pl-[1rem] pr-[1.5rem] w-full lg:pl-[2rem]  ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'xl:hidden xl:pl-[0rem]'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-black'}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-gray-600 lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-black'}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-gray-600 lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>

          <pre className={`text-gray-700 text-xs leading-5 font-normal break-normal font-sans flex text-justify whitespace-pre-wrap lg:text-base xl:mt-[1.5rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>

            <div className={`pb-[1rem] pl-[1rem] pr-[1.5rem] w-full lg:pl-[2rem] hidden ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'xl:block xl:pl-[0rem]'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-black'}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-gray-600 lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : 'xl:text-black'}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-gray-600 lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>

        <div className=''>
          <div className={` text-center ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
            {loaderData?.spotlightButton?.toggleSpotlight && 
            <Spotlightbtn loaderData={loaderData}/>}
            </div>
          

          <div className={`mb-10 ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { loaderData?.spotlightButton?.toggleSpotlight && <AdditionalLinksAddOn loaderData={loaderData} />}
            </div>

              <div className={`mb-[2rem] ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.testimonial?.testimonialText && 
            <TestimonialAddOn testimonialText={loaderData?.testimonial?.testimonialText} testimonialBy={loaderData?.testimonial?.testimonialBy} loaderData={loaderData} />
              }
              </div>
          
              <div className={`${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              {loaderData?.video?.videoLink && 
              <VideoAddOn videoLink={loaderData?.video?.videoLink} loaderData={loaderData} />}
              </div>

              <div className='ml-[1.1rem]'>
              <div  className={`${loaderData?.portfolioImage.length > 1 ? 'pt-[4rem]' : 'pt-[0rem]'} ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                <PortfolioAddon loaderData={loaderData}/>
              </div>
              
            <footer className={`flex w-full gap-4 md:gap-8 justify-start pb-[3rem]  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
              {loaderData?.socialMedia?.facebookLink ?
              <a href={`https://${loaderData?.socialMedia?.facebookLink}`} target='_blank'><img src={facebook} alt="" className="w-9 md:w-11 h-auto" /></a> : null}
              {loaderData?.socialMedia?.twitterLink ?
              <a href={`https://${loaderData?.socialMedia?.twitterLink}`} target='_blank'>
                <img src={twitter} alt="" className="w-9 md:w-11 h-auto" />
              </a> : null}
              {loaderData?.socialMedia?.youtubeLink ?
              <a href={`https://${loaderData?.socialMedia?.youtubeLink}`} target='_blank'>
                <img src={youtube} alt="" className="w-9 md:w-11 h-auto" />

              </a> : null}
            </footer>
              </div>
              
              
        </div>   

            

         
            
      </div>
    </div>
        
     
    </>
  )
} 