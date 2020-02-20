import React from 'react'
import '../../css/project.css'

import ProjectSrcCodeSec from './ProjectSrcCodeSec'
import ProjectContent from './ProjectContent'
import PorjectHeaderSec from './ProjectHeaderSec'

import {Container } from 'react-bootstrap'
function ProjectLayout(props){
      return(

     <Container>
     
            <PorjectHeaderSec header={props.header}mainHeader ={props.data.mainHeader} />
            <ProjectContent data = {props.data} />
       <ProjectSrcCodeSec title="Source Code" gitsrc ={props.data.gitsrc} />

    </Container>
   
    )
}


export default ProjectLayout;