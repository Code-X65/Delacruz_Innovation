import React from 'react'
import AboutHero from '../Components/AboutHero'
import BetterBusiness from '../Components/BetterBusiness'
import MissionVision from '../Components/MissionVission'
import BrandEcoSyst from '../Components/BandEcoSystem'
import AboutFeatures from '../Components/AboutFeatures'
import FeaturedImpact from '../Components/FeaturedImpact'
import FAQ from '../Components/FQA'
import OurHistory from '../Components/OurHistory'
import MissionVisionValues from '../Components/MissionVission'
import DelacruzLeadership from '../Components/DelacruzLeadership'
const AboutPage = () => {
  return (
    <>
    <div>
         <AboutHero />
         <OurHistory />
    {/* <BetterBusiness /> */}
    <MissionVisionValues />
    {/* <AboutFeatures /> */}
    <DelacruzLeadership/>
    <BrandEcoSyst />
    {/* <FeaturedImpact /> */}
    
    </div>
    </>
  )
}

export default AboutPage