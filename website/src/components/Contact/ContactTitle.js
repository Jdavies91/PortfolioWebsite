import React from 'react'
import '../../css/Contact.css'

import {Row,Col} from 'react-bootstrap/'

function ContactTitle(){
    return (
            <Row>
                <Col className='p-100 text-center contactHeader'>
                <h1>Contact</h1>

                <hr className="hrContactHead"/>
                </Col>
            </Row>
        
    )
}

export default ContactTitle