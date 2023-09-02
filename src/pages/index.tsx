import React from 'react'
import OurSection from '../components/our-section'
import Header from '../components/header'
import Hero from '../components/Hero'
import HomeAboutSection from '../components/home-about-section'
import WhyChooseUs from '../components/why-choose-us'
import Learning from '../components/learning'

interface Props {
    
}

const HomePage = (props: Props) => {
    return (
        <div>
           <Header/>
           <Hero/>
           <Learning/>
           <HomeAboutSection/>
           <OurSection/>
           <WhyChooseUs/>
        </div>
    )
}

export default HomePage
