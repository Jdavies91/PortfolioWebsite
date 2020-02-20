import React from 'react'
import Homepic from '../../imgs/HomepicR3.jpg'
import HomeImages from './HomeImages'
import {Row,Col} from 'react-bootstrap/'

function HomeContent(){
    return (
     
            <Row>
                <Col lg={{span:2, offset:2}}  >
                    <HomeImages className="d-block pic" src={Homepic} alt="Git Hub Pictures" />
            
                </Col>
                <Col lg={{span:3, offset:2}} className="text-left texthome ">
               
                <p className="text-justify"> 
                    My website is for everything that you need to know about me and my programming experience.
                    The links below will show you go to my Linkedin Profile or Github Repositories.
                    Through my Project Section, There will be Direct Links to my GitHub Repository for that project. 
                    If you have any questions, please don't hesitate to ask in the Contact Me Sections. 
                </p>
                    
                </Col>
            </Row>
 
    )
}

export default HomeContent