import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LrearnImg from "../assets/banner-img-1.png"

interface Props {

}

const Learning = (props: Props) => {
    return (
        <div className='p-5 mt-3 ' style={{ background: '#0398fc' }}>
            <Row className='justify-content-center'>
                <Col md={5} className='mt-5'>
                    <h1 className="learn_text">LAGEXCELGLOBAL partnering with APPLYBOARD</h1>
                    <p className="learn_info">ApplyBoard is so much more than an application platform. It’s your
                        full-service toolbox, giving you new ways to  offer students peace of mind. You can use ApplyBoard to secure your admission with ease and LAGEXCELGLOBAL helps out in the completion of your traveling process </p>
                        <div className="learn_info">
                            Applying for ApplyBoard is more easier with LAGEXCELGLOBAL. Once your admission is out we help you in processing your visa application upto embasy level.
                        </div>
                    <div className="mt-2"><a href="https://www.applyboard.com/our-solutions/rbc-student-gic-program?Opportunity.RP_ID__c=1214610#gic_form_link" target="_blank" rel="noopener noreferrer" className="btn btn-hero1 me-5">Learn more</a></div>
                </Col>
                <Col md={5}>
                    <img src={LrearnImg} style={{ width: "100%" }} alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default Learning
