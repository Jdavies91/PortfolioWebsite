import React from 'react'
import {Row,Col} from 'react-bootstrap/'

function AboutHeader(){
    return (
        <Row>
        <Col lg={12} className=" aboutHeader text-center">
        <h1>About Me</h1>
 
        <hr className="hrAboutHead"/>

 
        </Col>
    </Row>
    )
}
export default AboutHeader