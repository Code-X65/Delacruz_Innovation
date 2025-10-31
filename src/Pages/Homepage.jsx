import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Casestudy from '../Components/CaseStudy'
import TuneIn from '../Components/TuneIn'
import HelpOurClient from '../Components/HelpOurClient'
import Careers from '../Components/Careers'
import SocialImapact from '../Components/SocialImpact'
import CTABanner from '../Components/CTABanner'
import Chatbot from '../Components/Chatbot'

const Homepage = () => {
  return (
    <>
    <div>

        <Hero />
        <Casestudy />
        {/* <TuneIn /> */}
        <HelpOurClient />
        <Careers />
        {/* <SocialImapact /> */}
        <CTABanner />
        <Chatbot />
    </div>
    </>
  )
}

export default Homepage