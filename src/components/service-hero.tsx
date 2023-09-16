import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceImg from '../assets/s_icon_1.png'
import ServiceImg1 from '../assets/s_icon_2.png'
import ServiceImg2 from '../assets/s_icon_3.png'
import ServiceImg3 from '../assets/s_icon_4.png'
import ServiceImg4 from '../assets/service-3.png'
import ServiceImg5 from '../assets/service-2.png'
import ServiceImg6 from '../assets/abt_vec_3.png'

interface Props {
    
}

const ServiceHero = (props: Props) => {
    return (
        <>
        <div className='service_hero_div'>
            <Container className='p-5'>
                <div className='py-5'>
                    <h1 className="py-5 mt-5 service_title_section">Our Services</h1>
                </div>
            </Container>
        </div>
        <div className="text-center py-5">
            <h1 className='our_service_title'>OUR EXCLUSIVE OFFERS</h1>
            <p className="our_service_text">Our Services</p>
            <p className="our_service_sub_text">We have the knowledge, experience, and expertise to take care of all your<br/> travel needs. Our Friendly and Professional staff can assist you with</p>
        </div>
        <Container className='py-5 test-center'>
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
            <Row>
                <Col md={4} className='p-3'>
                    <div className="service_wrapper text-center p-4">
                    <img src={ServiceImg3} alt="" />
                    <h4 className="service_info_title"> cargo and haulage</h4>
                    <p className="service_info_text">Need to transport goods? Our reliable cargo and haulage services ensure that your shipments are handled with care and delivered on time. Whether it's small packages or large freight, we've got you covered.</p>
                    </div>
                </Col>
                <Col md={4} className='p-3'>
                <div className="service_wrapper text-center p-4">
                    <img src={ServiceImg4} alt="" />
                    <h4 className="service_info_title">Adventure Travel</h4>
                    <p className="service_info_text">Embark on thrilling adventures with our specialized adventure travel packages. Experience adrenaline-pumping activities and explore nature's wonders in exciting and unique ways.</p>
                    </div>
                </Col>
                <Col md={4} className='p-3'>
                <div className="service_wrapper text-center p-4">
                    <img src={ServiceImg5} alt="" />
                    <h4 className="service_info_title">Business Travel</h4>
                    <p className="service_info_text">For your corporate needs, our business travel services are tailored to meet the demands of professionals. Whether it's conferences, meetings, or business trips, we ensure a seamless and productive journey.</p>
                    </div>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={6} className='py-5'>
                    <h1 className="more_service_title">EXTRAORDINARY EXPERIENCES,</h1>
                    <p className="more_service_text">Designed Just For You</p>
                    <p className="more_services_subtext">At LAGEXCELGLOBAL, we excel at helping you get your vacation planned. Not just any vacation, but exceptional vacations filled with inspiring and life-enriching experiences.
Our approach is different. We don’t plan any trips ourselves. Instead, we match you with 2 or 3 leading travel specialists who are the most qualified to make your dream trip happen. They then compete to design your ideal itinerary.</p>
<button className='btn more_services_btn'>Get Matched to Travel Specialists</button>
                </Col>
                <Col md={6}>
                    <img src={ServiceImg6} alt="ServiceImg6" style={{width: "100%"}}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ServiceHero
