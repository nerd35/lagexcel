import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AbtIcon from '../assets/about-3.png'
import AboutImg from '../assets/about-image-1.svg'

interface Props {

}

const Discover = (props: Props) => {
    return (
        <Container className='py-5'>
            <Row>
                <Col md={6}>
                    <h1 className="discover_title">Discover your all the destinations with us!</h1>
                    <p className="discover_text">Our platform connects the travel and hospitality ecosystem. We are making travel a force for social and environmental good.

                        We are passionate about travel. With a unique perspective, at the heart of our industry, we are redesigning the travel of tomorrow.</p>
                        <div className="d-flex align-items-start gap-3">
                            <img src={AbtIcon} alt='icone' style={{width: '24px'}}/>
                            <div>

                            <h1 className="discover_option">Experienced Tour Guides</h1>
                            <p className="discover_option_text">Our team of seasoned tour guides brings a wealth of knowledge and passion for travel. With years of experience, they'll ensure you have an insightful and memorable journey.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-3">
                            <img src={AbtIcon} alt='icone' style={{width: '24px'}}/>
                            <div>

                            <h1 className="discover_option">Affordable Tour Packages</h1>
                            <p className="discover_option_text">Discover the world without breaking the bank. Our budget-friendly tour packages offer exceptional value for your travel dollar. Explore exotic destinations without compromising on quality.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-3">
                            <img src={AbtIcon} alt='icone' style={{width: '24px'}}/>
                            <div>

                            <h1 className="discover_option">Explore Top Places Worldwide</h1>
                            <p className="discover_option_text">From the bustling streets of New York to the serene beaches of Bali, our tours cover a diverse range of destinations across continents. Experience the best of each location with our carefully curated itineraries.</p>
                            </div>
                        </div>

                </Col>
                <Col md={6}>
                    <img src={AboutImg} alt="AboutImg" style={{width: "100%"}}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Discover
