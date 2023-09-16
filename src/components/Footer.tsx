import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <Container className='py-5'>
            <Row className='justify-content-center'>
                <Col md={3} className=''>
                    <h1 className="company_info text-center mb-3">Company Information</h1>
                    <div>

                    <Link to="/" className='text-start link_text' style={{textDecoration: "none"}}>About Us</Link>
                    </div>
                    <div>

                    <Link to="/" className='text-start link_text' style={{textDecoration: "none"}}>Contact Us</Link>
                    </div>
                    <div>

                    <Link to="/" className='text-start link_text' style={{textDecoration: "none"}}>Privacy Policy</Link>
                    </div>
                </Col>
                <Col md={3}>
                <h1 className="company_info text-center mb-3">Need any help?</h1>
                <div className="help_section  ps-2">
                    <p className="call_title">Call 24/7 for any help</p>
                    <p className="call_number">07040695071</p>
                </div>
                <div className="help_section  ps-2">
                    <p className="call_title">Mail to our support team</p>
                    <p className="call_number">lagexcel@gmail.com</p>
                </div>
                </Col>
                <Col md={3}>
                <h1 className="company_info text-center mb-3">Follow us on</h1>
                <div>
                    <AiFillFacebook className='me-2' color='#496cfe' size="24px"/>
                    <AiFillTwitterSquare className='me-2' color='#496cfe' size="24px"/>
                    <AiOutlineWhatsApp className='me-2' color='#496cfe' size="24px"/>
                    <AiFillLinkedin className='me-2' color='#496cfe' size="24px"/>

                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
