import React from 'react'
import {Col} from 'react-bootstrap'
import '../../css/portfolio.css'
import '../../css/project.css'
function ProjectDescSec(props){
    return(
        <Col md={7} lg={4}  className="text-left">
    

        <h5>Description</h5>
       
        <p> {props.Des}</p>
        </Col>


    )
}

export default ProjectDescSec