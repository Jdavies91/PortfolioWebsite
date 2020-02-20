import React from 'react'
import '../../css/home.css'
import {Row,Col} from 'react-bootstrap/'

function HomeTitle(){
    return (
            <Row>
                <Col className='p-100 text-center homeHeader'>
                <h1>Jonathan's Portfilo</h1>
                <hr className="hrHomeHead"/>
                </Col>
            </Row>
        
    )
}

export default HomeTitle