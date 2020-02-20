import React from 'react'
import {Row,Col} from 'react-bootstrap/'
import HomeImages from './HomeImages'
import GitHub_LogoR5 from '../../imgs/GitHub_LogoR5.png'
import LiLogoR5 from "../../imgs/LI-LogoR5.png"
function HomeFooter(){
    return(<Row  >
         
        <Col className="footercent paddinglink footerright" lg= {true} sm={true} xs={6} >
        <a href="https://www.linkedin.com/in/jonathan-davies18"order=" none"target="_blank">
        <HomeImages className="h-50" src={LiLogoR5}alt="Linkedin Picture"/>
        </a>
        </Col>
        <Col className="footercent paddinglink colorhover footerleft" lg= {true} sm={true} xs={6} >
        <a href="https://github.com/Jdavies91"order=" none"target="_blank">
        <HomeImages className="h-50" src={GitHub_LogoR5} alt="Git Hub Pictures"/>     
        </a>
        </Col>
        
        </Row>
        )
}

export default HomeFooter