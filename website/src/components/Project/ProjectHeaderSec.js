import React from 'react'
import {Col,Row} from 'react-bootstrap'
function PorjectHeaderSec(props){
    return(
       
       <Row className="text-center paddingBottomTitle">
            <Col med={12}>
        
              
                <h3>{props.header}: {props.mainHeader}</h3>
            
    
   
                </Col>
        </Row>

    )
}

export default PorjectHeaderSec