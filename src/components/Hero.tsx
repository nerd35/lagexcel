import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroBackground from '../assets/banner-image-1.svg'

interface Props {
    
}

const Hero = (props: Props) => {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <h1 className='hero_small_title'>Amazing Places</h1>
                    <h2 className="hero_large_title">Make Your Trip Fun & Noted</h2>
                    <p className="hero_text">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                    <div className="mt-3">
                        <a href="https://www.applyboard.com/our-solutions/rbc-student-gic-program?Opportunity.RP_ID__c=1214610#gic_form_link" target="_blank" rel="noopener noreferrer"className="btn btn-hero me-5">Learn more</a>
                        <button className="btn btn-hero">Contact us</button>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={HeroBackground} style={{width: "100%"}} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
