import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WHYIMG from '../assets/why-image-1.svg'
import {BsGlobeAmericas} from 'react-icons/bs'
import { GiMoneyStack, GiTeamIdea } from 'react-icons/gi'
import {MdPlace, MdLuggage} from 'react-icons/md'
import { AiOutlineSchedule } from 'react-icons/ai'

interface Props {
    
}

const WhyChooseUs = (props: Props) => {
    return (
        <Container>
            <div className="text-center my-5">
                <h1 className='we_are_title'>We Are Awesome</h1>
                <p className="we_are_large_title">Why Choose LAGEXCELGLOBAL</p>
            </div>
            <Row className='justify-content-center'>
                <Col md={3} className='ms-3'>
                    <div className="mb-2">
                        <BsGlobeAmericas color='#0398fc' size="52px"/>
                        <p className="why_section_title">Diverse Destinations</p>
                        <p className="why_section_text">Richly varied landscapes, luxury accommodation Travel.</p>
                    </div>
                    <div className="mb-2">
                        <GiMoneyStack color='#0398fc' size="52px"/>
                        <p className="why_section_title">Value for Money</p>
                        <p className="why_section_text">Richly varied landscapes, luxury accommodation Travel.</p>
                    </div>
                    <div className="mb-2">
                        <MdPlace color='#0398fc' size="52px"/>
                        <p className="why_section_title">Beautiful Places</p>
                        <p className="why_section_text">Richly varied landscapes, luxury accommodation Travel.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <img src={WHYIMG} alt="" style={{width: "100%"}} />
                </Col>
                <Col md={3}>
                <div className="mb-2">
                        <AiOutlineSchedule color='#0398fc' size="52px"/>
                        <p className="why_section_title">Fast Booking</p>
                        <p className="why_section_text">Richly varied landscapes, luxury accommodation Travel.</p>
                    </div>
                    <div className="mb-2">
                        <GiTeamIdea color='#0398fc' size="52px"/>
                        <p className="why_section_title">Support Team</p>
                        <p className="why_section_text">Richly varied landscapes, luxury accommodation Travel.</p>
                    </div>
                    <div className="mb-2">
                        <MdLuggage color='#0398fc' size="52px"/>
                        <p className="why_section_title">Passionate Travel</p>
                        <p className="why_section_text">Richly varied landscapes, luxury accommodation Travel.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyChooseUs
