import React from 'react'
import Header from '../components/header'
import Newletter from '../components/newletter'
import ServiceHero from '../components/service-hero'

interface Props {
    
}

const Services = (props: Props) => {
    return (
        <div>
            <Header/>
            <ServiceHero/>
            <Newletter/>
        </div>
    )
}

export default Services
