import React from 'react'
import { AiOutlineFieldTime, AiOutlineSafety } from 'react-icons/ai'
import { FaHandHoldingHeart } from 'react-icons/fa'
import {GiAerialSignal} from 'react-icons/gi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {FiThumbsUp} from 'react-icons/fi'
import { Col, Row } from 'react-bootstrap'

interface Props {
    
}

const OurSection = (props: Props) => {
    return (
        <div className='p-5' style={{background: "#f9f8fe"}}>
            <Row className='mb-2 text-center justify-content-center'>
                            <Col md={4}  className='d-flex align-items-center text-center gap-3'>
                                <AiOutlineSafety color='#0398fc' size="24px" />
                                <div className='home_abt_option'>Safety Travel System</div>
                            </Col>
                            <Col md={4} className='d-flex align-items-center text-center gap-3'>
                                <FaHandHoldingHeart color='#0398fc' size="24px" />
                                <div className='home_abt_option'>Budget-Friendly Tour</div>
                            </Col>
                            <Col md={4} className='d-flex align-items-center text-center gap-3'>
                                <FiThumbsUp color='#0398fc' size="24px" />
                                <div className='home_abt_option'>Right Solution & Guide</div>
                            </Col>
                        </Row>
                        <Row className='mb-2 text-center'>
                        <Col md={4} className='d-flex align-items-center text-center gap-3'>
                                <RiCustomerService2Fill color='#0398fc' size="24px" />
                                <div className='home_abt_option'>24/7 Customer Support</div>
                            </Col>
                            <Col md={4} className='d-flex align-items-center text-center gap-3'>
                                <AiOutlineFieldTime color='#0398fc' size="24px" />
                                <div className='home_abt_option'>Expert Trip Planning</div>
                            </Col>
                            <Col md={4} className='d-flex align-items-center text-center gap-3'>
                                <GiAerialSignal color='#0398fc' size="24px" />
                                <div className='home_abt_option'>Fast Communication</div>
                            </Col>

                        </Row>
        </div>
    )
}

export default OurSection
