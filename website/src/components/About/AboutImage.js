import React from 'react'

import '../../css/about.css'
import Img from 'react-image';
import loadingspinner from '../../gif/loadingspinner.gif'
function AboutImage(props){
    return(

       
            <Img src={props.src} alt ={props.alt}loader={ <img src={loadingspinner}    className={props.picsize} alt="Loading"/>}       className={props.picsize}/>
     
        

    )
}

export default AboutImage