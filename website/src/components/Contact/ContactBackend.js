import React from 'react'
import ContactLayout from './ContactLayout'
import axios from 'axios'
class ContactBackend extends Component{
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
        //document.getElementById('ContForm').reset()
    }
    render(){
        return(
            <ContactLayout handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}
export default ContactBackend