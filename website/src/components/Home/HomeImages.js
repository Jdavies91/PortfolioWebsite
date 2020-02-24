import React from 'react'
import Img from 'react-image';
import loadingspinner from "../../gif/loadingspinner.gif"
function HomeImages(props){
    return(
        <Img src={props.src} loader={<img src={loadingspinner} className={props.className} alt="Loading" />}       alt={props.alt} className={props.className}/>
    )
}
export default HomeImages