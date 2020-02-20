import React from 'react'
import {Row,Col} from 'react-bootstrap/'
function ResumeHeader(){
    return(
        <div>
        <Row>
        <Col><h4>Jonathan Davies</h4>
        <hr className= 'hrResume'/>
        </Col>
  
        </Row>  
        <Row>
            <Col>
            <p className="addressmarg">1292 Lansdowne Drive, Coquitlam | 778-688-4074 | Email: jondavies@hotmail.com | Github: Jdavies91</p>
            </Col>
        </Row>
        </div>
      
    
    )
}

export default ResumeHeader