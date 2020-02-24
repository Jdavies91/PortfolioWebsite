import React from 'react'
import {Col,Row } from 'react-bootstrap'
import GitHub from '../../imgs/GitHub-Mark-120px-plus.png'
function ProjectSrcCodeSec(props){

    return (
        <Row>
      
        <Col className="text-center" >
        <h5>Source Code</h5>
 
        <a href={props.gitsrc}border=" none"target="_blank">
            <img
            
                        className="img-fluid img-thumbnail "
                        src={GitHub}
                        alt="Git Hub Pictures"
                        />
        </a>

        
       
        </Col>
     
       </Row>
    )
}

export default ProjectSrcCodeSec