import React, {Component } from 'react'
import {Form, Button, Col,Container} from 'react-bootstrap'
import ContactTitle from './ContactTitle'
import ContactContent from './ContactContent'
import axios from 'axios'
class ContactLayout extends Component{
    constructor(){
        super();
        this.state= {
            Fname:"",
            Lname:"",
            Email:"",
            Body:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]:event.target.value
            }   )

    }
     handleSubmit(event){
        event.preventDefault()
  
        const {Fname, Lname, Email, Body}= this.state
        const form = axios.post('/contactform', {
            Fname:Fname,
            Lname:Lname,
            Email:Email,
            Body:Body
        
        }
        
        )
        document.getElementById('ContForm').reset()
    }
    render(){
        return (
            <Container>     
            <ContactTitle />
            <ContactContent />
            <Form onSubmit={this.handleSubmit} id ="ContForm">
                <Form.Row>
                <Form.Group as= {Col} >
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="Fname" className="contactNameboxes" onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group as= {Col}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="Lname" className="contactNameboxes" onChange={this.handleChange} ></Form.Control>
                </Form.Group>
                </Form.Row>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="Email" className="contactEmailboxes" onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group  className="contactTextarea" >
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" name="Body" rows="6" onChange={this.handleChange}></Form.Control>
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
 
}

export default ContactLayout