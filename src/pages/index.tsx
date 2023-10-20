import React from 'react'
import OurSection from '../components/our-section'
import Header from '../components/header'
import Hero from '../components/Hero'
import HomeAboutSection from '../components/home-about-section'
// import Learning from '../components/learning'
import OurServices from '../components/ourservices'
import Discover from '../components/discover'
import Newletter from '../components/newletter'

interface Props {
    
}

const HomePage = (props: Props) => {
    return (
        <div>
           <Header/>
           <Hero/>
           <OurServices/>
           {/* <Learning/> */}
           <HomeAboutSection/>
           <OurSection/>
           <Discover/>
           {/* <WhyChooseUs/> */}
           <Newletter/>
        </div>
    )
}

export default HomePage
