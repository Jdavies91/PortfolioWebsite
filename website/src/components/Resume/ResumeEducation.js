import React from 'react'
import {Row,Col} from 'react-bootstrap/'
import '../../css/resume.css'
function ResumeEducation(){
    return(
        
        <div>
        <Row>
            <Col><h5><u>Education</u></h5></Col>
        </Row>
        <Row>
            <Col className="colpadding">
                <Col>
                    <h6>BRITISH COLUMBIA INSTITUTE OF TECHNOLOGY</h6>
                    <p className="date">SEPTEMBER 2017 – DECEMBER 2019</p>
                </Col>
                <Col>
                    <h6>COMPUTER SYSTEMS TECHNOLOGY DIPLOMA</h6>
                </Col>
                <Col>
                    <ul>
                        <li>Proficient in Java, HTML, CSS, C++, JavaScript, Node.js, AWS and SQL </li>
                    </ul>
                </Col>
            </Col>
        </Row>
        <Row>
            <Col className="colpadding">
                <Col>
                    <h6>DOUGLAS COLLEGE</h6>
                    <p className="date">SEPTEMBER 2010 – APRIL 2015</p>
                </Col>
                <Col>
                    <h6>COMPUTER SYSTEMS AND INFORMATION SYSTEMS DIPLOMA</h6>
                </Col>
                <Col>
                    <ul>
                        <li>Proficient in hardware maintenance and SQL server</li>
                    </ul>
                </Col>
            </Col>
        </Row>
   
    </div>
          
    )
}

export default ResumeEducation