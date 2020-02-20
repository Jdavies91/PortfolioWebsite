import React from 'react'
import {Form, Button, Col,Container} from 'react-bootstrap'
import ContactTitle from './ContactTitle'
import ContactContent from './ContactContent'
import '../../css/Contact.css'
function ContactLayout(props){


    return(
        <Container>     
                 <ContactTitle />
                 <ContactContent />
                     <Form onSubmit={props.handleSubmit} id ="ContForm">
                         <Form.Row>
                         <Form.Group as= {Col} >
                             <Form.Label>First name</Form.Label>
                             <Form.Control pattern='[A-Za-z]\-'   title="Use letters or hyphens only " type="text" name="Fname" className="contactNameboxes" onChange={props.handleChange}></Form.Control>
                         </Form.Group>
                         <Form.Group as= {Col}>
                             <Form.Label>Last name</Form.Label>
                             <Form.Control type="text" name="Lname" pattern='[A-Za-z]\-'  title="Use letters or hyphens only " className="contactNameboxes" onChange={props.handleChange} ></Form.Control>
                         </Form.Group>
                         </Form.Row>
                         <Form.Group>
                             <Form.Label>Email</Form.Label>
                             <Form.Control type="email" name="Email" className="contactEmailboxes" onChange={props.handleChange}></Form.Control>
                         </Form.Group>
                         <Form.Group  className="contactTextarea" >
                             <Form.Label>Body</Form.Label>
                             <Form.Control as="textarea" name="Body" rows="6" onChange={props.handleChange}></Form.Control>
                         </Form.Group>
                      
                <Form.Group className= "message">
                         <p className={props.Class}>{props.Sent}</p>
                         
                 </Form.Group>
            
                 <Form.Group className="contactButton">
                   
                 <Button variant="primary" type="submit">
                     Send
                 </Button>
        
                 </Form.Group>
                    
            </Form>
                
         </Container>
    )
}

export default ContactLayout