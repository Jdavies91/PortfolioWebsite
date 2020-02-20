import React from 'react'

import HomeTitle from './HomeTitle'
import HomeContent from './HomeContent'
import HomeFooter from './HomeFooter'
import {Container} from 'react-bootstrap/'

import '../../css/home.css'
function HomeLayout(){
    return (

        <Container>
     
            <HomeTitle />
            <HomeContent />
            <HomeFooter/>
        </Container>
         
 
    )
}

export default HomeLayout