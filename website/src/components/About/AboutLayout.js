import React from 'react'
import {Container} from 'react-bootstrap/'
import Aboutprogramming from './Aboutprograming'


import '../../css/portfolio.css'


import AboutHeader from './AboutHeader';
import AboutPersonalLife from './AboutPersonalLife'

function AboutLayout(){
    return (
        <Container  fluid={false}>
        <AboutHeader />
     
        <Aboutprogramming />
        <AboutPersonalLife />
        </Container>
    
    )
}

export default AboutLayout