import React from 'react'
import {Form, Button, Col,Container} from 'react-bootstrap'
function ContactFormItems(props){
    return(
        <Form.Group as= {Col} >
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" name="Fname" className="contactNameboxes" onChange={props.handleChange}></Form.Control>
    </Form.Group>
    )
}

export default ContactFormItems