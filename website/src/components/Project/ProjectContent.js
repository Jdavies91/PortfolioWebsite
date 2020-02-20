import React from 'react'
import {Row } from 'react-bootstrap'

import ProjectTechSpec from './ProjectTechSpec'
import ProjectTechSpecSec from './ProjectTechSpecSec'
import ProjectDescSec from './ProjectDescSec'
import ProjectPictureSec from './ProjectPictureSec'
function ProjectContent(props){
    const techspecs = props.data.technology.map((tech) => <ProjectTechSpec key={tech} name={tech} />)
 
    return (
        <Row>
            <ProjectDescSec Des ={props.data.Des} />
            <ProjectPictureSec  src={props.data.img.src} alt={props.data.img.alt}/>
            <ProjectTechSpecSec techspecs= {techspecs}/>
        </Row>
       
    )
}

export default ProjectContent