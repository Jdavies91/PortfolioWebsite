import React from 'react'
import {Row,Col} from 'react-bootstrap/'
import AboutProgramContent from './AboutProgramContent'
import AboutProgrammingR from '../../imgs/AboutProgrammingR.JPG'
import AboutImage from './AboutImage'
function Aboutprograming(){
    return(
        <div>
        <Row >    <Col className="aboutSection"> 

        <h2>My Life with Programming</h2>
        </Col></Row>
        <Row>
            <Col lg={6}>
            < AboutProgramContent/>
            </Col>
            <Col lg={6}>
                <AboutImage src={AboutProgrammingR} alt ="About Programmming" picsize ="d-block w-100 pic center-block"/>
            </Col>
        </Row>
        </div>

    )
}

export default Aboutprograming;