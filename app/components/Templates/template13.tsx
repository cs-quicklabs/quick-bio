import facebook from '../../../assets/images/socialIcons/fbIcon3.png'
import twitter from '../../../assets/images/socialIcons/twitterIcon3.png'
import youtube from '../../../assets/images/socialIcons/youtubeIcon3.png'
import defaultimg from '../../../assets/images/profile.png'
import Background3 from '../../../assets/images/templates/temp3.png'
import BannerAddOn from './addOns/Banner'
import Spotlightbtn from './addOns/Spotlightbtn'
import TestimonialAddOn from './addOns/testimonial'
import VideoAddOn from './addOns/video'
import { useLocation } from 'react-router-dom'
import AdditionalLinksAddOn from './addOns/AddtionalLinks'
import PortfolioAddon from './addOns/portfolio'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/outline'
export default function Template13 ({ mode,input, loaderData,primaryRestore,secondaryRestore }: any) {
  
 const Location = useLocation()
 const nav = Location.pathname.includes(`${loaderData.username}`)
 
  return(
    <>
      {loaderData?.supportBanner?.toggleBanner && <BannerAddOn loaderData={loaderData} /> }
    <div className={`flex overflow-auto scrollbar-hide font-inter bg-[#F1F6FF] justify-center items-center overflow-none ${nav ?'min-h-[calc(96.5vh+50px)]' : 'min-h-[calc(95.5vh+50px)]'} ${mode ==='mobile' ? 'flex-col' : 'flex-col xl:flex-row xl:items-start xl:bg-white'} ${nav? '' :''}`} >

      <div className={`flex-shrink-0 flex flex-col justify-center items-center py-[2rem] ${mode ==='mobile' ? 'w-full ' : 'w-full lg:items-center lg:pt-[5rem] lg:pb-[10rem] xl:w-[24rem] xl:justify-start xl:items-start mediumLaptop:w-[30rem] largeLaptop:w-[34rem]'} ${nav? '' :''}`} >

        {secondaryRestore || loaderData?.profileImage?.secondaryImage ?
        <img className={`rounded-t-lg object-cover w-[15rem] h-[15rem]   ${mode ==='mobile' ? 'lg:w-[25rem] lg:h-[25rem] med:h-[30rem] mediumLaptop:w-[30rem] mediumLaptop:h-[35rem]' : 'lg:w-[25rem] lg:h-[25rem] xl:rounded-lg med:h-[37rem] mediumLaptop:w-[25rem] mediumLaptop:h-[40rem] largeLaptop:w-[30rem] largeLaptop:h-[45rem]'} ${nav? '' :''} ${loaderData?.profileImage?.secondaryImage || secondaryRestore === true ? '' :''}  `} src={secondaryRestore === true ? defaultimg : loaderData?.profileImage?.secondaryImage} alt='' /> : null}

      </div>

      <div className={` flex flex-col justify-center items-center w-full ${mode ==='mobile' ? '' : 'xl:pt-[23rem] lg:w-[35rem] mediumLaptop:w-[40rem] largeLaptop:w-[45rem]'} ${nav ? 'lg:w-[40rem] mediumLaptop:w-[45rem] largeLaptop:w-[50rem]' : ''}`}>

      <div className={`shadow-lg rounded-lg bg-white w-[90%] mt-[-2rem] ${mode ==='mobile' ? '' : 'lg:mt-[-10rem] med:mt-[-14rem] xl:rounded-none xl:shadow-none xl:w-full xl:pl-[2.5rem]'}`} >
          <h4 className={`text-black text-center text-2xl leading-8 font-bold ml-[0rem] sm:ml-0 pt-[1rem] ${mode ==='mobile' ? '' : 'xl:w-[50%] xl:text-left xl:text-6xl xl:font-extrabold xl:leading-none'}  ${nav ? '' : ''}`}>
            {loaderData?.firstname} {loaderData?.lastname}
          </h4>

          <div className= {`${mode ==='mobile' ? '' :'xl:border-b-[1px] xl:border-gray-300 xl:mt-[1rem] w-[50%]'} `}></div>

          {loaderData?.profileInfo?.occupation || input.occupation ||input.location ||loaderData?.profileInfo?.location ?
            <h3 className={`text-gray-600 text-center break-normal text-xs leading-5 font-normal lg:text-base ${mode ==='mobile' ? '' : 'xl:text-left xl:w-max mediumLaptop:w-full xl:text-2xl xl:leading-8 xl:font-medium xl:mt-[1rem]'}  ${nav ? 'lg:w-full' : ''} `} >
              {input.occupation} {input.location && input.occupation ? `in` : ''} {input.location}
            </h3> : <span></span>}

            <div className={`pb-[1rem] pl-[1rem] pr-[1.5rem] w-full lg:pl-[2rem] ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'lg:bg-transparent xl:pl-[0rem] xl:hidden'} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-[65%] md:w-max text-xs leading-5 font-normal break-normal mt-[-0.15rem]  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem]'}`} >
                      {input.education}
                    </h2>
                  </div> : <span></span>}
              </div>
            </div>
        </div>

        <div className='mt-[1rem] pl-[1rem] w-[90%]'>
        <div className="mt-1 ">
          <pre className={`text-gray-700 text-xs leading-5 font-normal font-sans flex whitespace-pre-wrap text-justify lg:text-base ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
              { input?.description?.trim()}
            </pre>
          </div>

          <div className={`pb-[1rem] pl-[1rem] pr-[1.5rem] w-full lg:pl-[2rem] hidden ${mode ==='mobile' ? 'xl:mt-[-1rem]' : 'lg:bg-transparent xl:pl-[0rem] xl:block '} `}>
              <div className={`flex pt-4 justify-between ${mode ==='mobile' ? '' : 'xl:flex-col xl:pt-[1.5rem]'} ${nav ? '' : ''}`} >
                {loaderData?.profileInfo?.company || input.company ?
                  <div className={`flex ${mode ==='mobile' ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`}>
                      <BriefcaseIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-[65%] md:w-max lg:w-[65%] text-xs leading-5 font-normal break-normal   ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem] xl:w-max'}`} >
                      {input.company}
                    </h2>
                  </div> : <span></span>}
                {loaderData?.profileInfo?.education || input.education ?
                  <div className={`flex  ${mode ==='mobile' ? '' : 'xl:mt-[1.5rem]'} ${nav ? '' : ''}`} >
                    <h2 className={`text-gray-900 font-medium text-base leading-5 w-[1.125rem] mr-[0.5rem] ${mode ==='mobile' ? '' : ''}`} >
                      <AcademicCapIcon />
                    </h2>
                    <h2 className={`text-gray-800 w-max text-xs leading-5 font-normal break-normal  ${mode ==='mobile' ? 'lg:text-sm' : 'lg:text-sm lg:text-black lg:mt-[-0.15rem]'}`} >
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
              
              <div  className={`${loaderData?.portfolioImage.length > 1 ? 'pt-[4rem]' : 'pt-[0rem]'} ${mode ==='mobile' ? '' : ''} ${nav ? '' : ''}`}>
                <PortfolioAddon loaderData={loaderData}/>
              </div>
              
            <footer className={`flex w-full gap-4 md:gap-8  justify-start pb-[5rem]  ${nav ? '' : ''} ${ loaderData?.portfolioImage ? 'pt-[2rem]' : 'pt-[0rem]'}`}>
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