import { CallToAction } from '../components/CallToAction'
import { Faqs } from '../components/Faqs'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { PrimaryFeatures } from '../components/PrimaryFeatures'
import { SecondaryFeatures } from '../components/SecondaryFeatures'
import { Testimonials } from '../components/Testimonials'
import { Header } from '../components/Header'
import { LoaderFunction } from '@remix-run/node'
import { getUser } from '~/services/auth.service.server'
import { useLoaderData, useLocation } from '@remix-run/react'
import HeaderSecondary from '~/components/Common/Header'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  return user
}

export default function Home() {

  const loaderData = useLoaderData()
  const isLoggedin = loaderData?.id
  console.log(isLoggedin);
  
  return (
    <>
      <Header isloggedin={isLoggedin} />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  )
}
