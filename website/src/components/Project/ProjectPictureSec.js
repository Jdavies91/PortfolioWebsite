import React from 'react'
import {Col} from 'react-bootstrap'
import Img from 'react-image';
import loadingspinner from '../../gif/loadingspinner.gif'
function ProjectPictureSec(props){
    console.log(props.src)
    return (
        

        <Col md={2} lg={4}  className=" text-center paddingBottomPic">
            <Img src={props.src} loader={ <img src={loadingspinner}  alt="Loading"/>}  alt={props.alt}   className="d-block w-100 pic" />
                            
    </Col> 

    )
}
export default ProjectPictureSec