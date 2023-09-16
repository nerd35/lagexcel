import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EmailIcon from '../assets/email.png'

interface Props {
    
}

const Newletter = (props: Props) => {
    return (
        <Container className='newsletter_sec' fluid>
            <Container>
                <Row>
                    <Col md={6} className='d-flex align-items-center gap-3'>
                        <img src={EmailIcon} alt="email" style={{width: "77.88px", height: "66.2px"}}/>
                        <div>
                            <h1 className="news_left_title">Get the latest news and offers</h1>
                            <p className="news_left_text">Subscribe to our newsletter</p>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex align-items-center gap-3'>
                        <input type="text" className=' py-3 form-control' placeholder='Enter your email address'/><button className='btn btn-news py-3 px-3'>Subscribe</button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Newletter
