import React from 'react'
import {Col} from 'react-bootstrap'

function ProjectTechSpecSec(props){
    return(
  
      
        <Col md={3} lg={4} >
        <ul className="projectTechSpec " >
        <h5>Technology</h5>
        <div className="projectTechSpec">
        {props.techspecs}
        </div>
       </ul>
       
       </Col>
    )
}

export default ProjectTechSpecSec