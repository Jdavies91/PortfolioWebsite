import React from 'react'
import {Row,Col} from 'react-bootstrap/'
import AboutPersonal from './AboutPersonal'
import AboutPersonalimg from '../../imgs/AboutPersonalimg.jpg'
import AboutImage from './AboutImage'
import '../../css/about.css'
function AboutPersonalLife(){
    return(
        <div>
        <Row >    <Col className=" text-sm-center text-md-center text-lg-right  aboutSection"> 
        <hr/>
        <h2 className="aboutHeader">Personal Life</h2>

        </Col></Row>
        
        <Row>
         
            <Col lg={{span: 6, order:11}} className="AboutTitlepadding paddingProLife "  >
                <AboutPersonal/>
            </Col>                                                                                                                                                                                                                                                                                                                
            <Col lg={{span: 6,  order:1}} className=" text-lg-right text-xs-center paddingProLife   "   >
            <AboutImage src={AboutPersonalimg} alt ="About Personal Image" picsize =" w-75 h-100 pic "/>
            </Col>
        </Row>
        </div>

    )
}

export default AboutPersonalLife;