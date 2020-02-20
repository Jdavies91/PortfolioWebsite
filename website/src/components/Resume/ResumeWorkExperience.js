import React from 'react'
import {Row,Col} from 'react-bootstrap/'
import '../../css/resume.css'
function ResumeWorkExperience(){
    return(
        <div>
            <Row>
                <Col><h5><u>Work Experience</u></h5></Col>
            </Row>
            <Row>
                <Col className="colpadding">
                    <Col >
                    
                        <h6>BURNABY ASSOCIATION FOR COMMUNITY INCLUSION</h6>
                        <p className="date">MAY 2018 – SEPTEMBER 2019</p>
                    </Col>
                 
                    <Col>
                        <h6>TECHNOLOGY SUPPORT</h6>
                    </Col>
                    <Col>
                        <ul>
                            <li>Created a database using Microsoft Server and a front end using Microsoft PowerApps</li>
                            <li>Supported the Finance department by creating an automated  system  utilizing Microsoft Flow </li>
                            <li>Created a VPN for our Tech Department’s  Virtual Machine to secure connections for our sensitive data</li>
                            <li>Administrator for Sharevision and Automatic Data Process (ADP) and supported those platforms when needed for the entire organization</li>
                            <li>Provided troubleshooting for hardware such as printers, phones, computers and iPads</li>
                            <li>Worked on technical communication and problem-solving skills</li>
                        </ul>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col className="colpadding">
                    <Col>
                        <h6>KEBOOLA</h6>
                        <p className="date">JANUARY 2019 – MAY 2019</p>
                    </Col>
                    <Col>
                        <h6>TERRAFORM DEPLOYMENT</h6>
                        
                    </Col>
                    <Col>
                        <ul>
                            <li>Planned, organized, and developed a Go program to deploy a Terraform script.  The script included components that the user could choose to load onto the Keboola’s Extract Transform Load Cloud platform.</li>
                            <li>Team leader in organizing and creating the project structure and delegating roles to partners. As well as responsible for administration duties regarding clientele and colleagues.</li>
                        </ul>
                    </Col>
                </Col>
        
            </Row>
            <Row>
                <Col className="colpadding">
                    <Col>
                        <h6>BROWNS SOCIAL HOUSE</h6>
                        <p className="date">MAY 2010 – SEPTEMBER 2018</p>
                    </Col>
                    <Col>
                        <h6>SHIFT LEADER</h6>
                    </Col>
                    <Col>
                        <ul>
                            <li>Responsible for opening and closing, cash duties, and managing customer complaints</li>
                            <li>Duties also included serving, bartending, and managerial duties </li>
                            <li>Worked with POS Squirrel System and Infor POS (formerly known as Halo POS) </li>
                            <li>Troubleshooting network issues and provided support for the POS system</li>
                        </ul>
                    </Col>
                </Col>
        
            </Row>
        </div> 
    )
}

export default ResumeWorkExperience



