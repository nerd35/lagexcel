import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg from '../assets/banner1.png'

interface Props {

}

const HomeAboutSection = (props: Props) => {
    return (
        <>
            <Container className='mt-5'>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={AboutImg} style={{ maxWidth: "100%" }} alt="" />
                    </Col>
                    <Col md={6}>
                        <h1 className="home_about_title">About us</h1>
                        <p className="home_about_text">LAGEXCELGLOBAL is a Travel Consultant, we specialise in  UK, USA and Canada work, study and tourism visa, but also do other countries. Experience of more than 10 years in travel industry globally includes USA,UK, SCHENGEN, Etc.
                            <br />
                            <br />
                            Expert in processing Express Entry,work visa,tourism visa,student visa,invitation letter to the country of your choice,ticket and hotel reservation, application form for different countries.
                            <br />
                            <br />
                            Also Expert in processing Permanent Residency applications under Express Entry of Canada includes Federal Skilled Worker Program etc, Feel free to contact us if you have any question as regards to Permanent Residency of Canada and other Country Services.</p>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeAboutSection
