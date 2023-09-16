import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceImg from '../assets/s_icon_1.png'
import ServiceImg1 from '../assets/s_icon_2.png'
import ServiceImg2 from '../assets/s_icon_3.png'


interface Props {
    
}

const OurServices = (props: Props) => {
    return (
        <Container className='py-5 test-center'>
            <h1 className="text-center service_title">WHY Choose Our Travel Agency?</h1>
            <h1 className="service_core mb-0">Our Core Values</h1>
            <p className="service_text_core text-center">Our thoughtful team of knowledgeable experts are here to take care of every need, <br/>from the second you contact us to when you return</p>
            <Row>
                <Col md={4} className='p-3'>
                    <div className="service_wrapper text-center p-4">
                    <img src={ServiceImg} alt="" />
                    <h4 className="service_info_title">Accommodation</h4>
                    <p className="service_info_text">No matter where you are travelling, LAGEXCELGLOBAL is here to help you get the best deals in Hotels around the world.</p>
                    </div>
                </Col>
                <Col md={4} className='p-3'>
                <div className="service_wrapper text-center p-4">
                    <img src={ServiceImg1} alt="" />
                    <h4 className="service_info_title">Transportation</h4>
                    <p className="service_info_text">Whether you are travelling through Air, Sea or Land, LAGEXCELGLOBAL can arrange transportation according to.</p>
                    </div>
                </Col>
                <Col md={4} className='p-3'>
                <div className="service_wrapper text-center p-4">
                    <img src={ServiceImg2} alt="" />
                    <h4 className="service_info_title">Expert Trip Planning</h4>
                    <p className="service_info_text">Our Talented and Expert Trip Planning Team can make itinerary that suits our clients the best. We will make your travel</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OurServices
