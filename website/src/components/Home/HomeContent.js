import React from 'react'
import Homepic from '../../imgs/HomepicR3.jpg'
import HomeImages from './HomeImages'
import {Row,Col} from 'react-bootstrap/'

function HomeContent(){
    return (
     
            <Row>
                <Col xl={2} lg={0} md={0} sm={0}></Col>
                <Col xl={4} lg={6} md={6} sm= {6} className="AboutPicturesRight">
                    <HomeImages className="d-block pic  homePic" src={Homepic} alt="HomePicture" />
            
                </Col>
                <Col xl={4} lg={6}  md={6} sm= {6} className="text-left texthome ">
               
                <p className="text-justify"> 
                Hello, my name is Jonathan Davies. My website will show you everything you need to know about me and my programming experience.  
                I have just graduated from BCIT with a Computer Systems Technology diploma.  I have enjoyed working with computers and programming since my high school days.  
                I am excited to start my career and looking forward to meeting successful industry leaders. The links below will connect you to my Linkedin Profile and GitHub Repository. 
                Through my Project Section, there are direct links to my GitHub Repository for that specific project.  If you have any questions, please don't hesitate to ask in the Contact Me Section. 
                </p>
                    
                </Col>
                <Col xl={2}lg ={0} md={0} sm={0}></Col>
            </Row>
 
    )
}

export default HomeContent