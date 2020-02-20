import React, {Component} from 'react'
import ContactLayout from './ContactLayout'
import '../../css/Contact.css'
import axios from 'axios'
class ContactBackend extends Component{
    constructor(){
        super();
        this.state= {
            Fname:"",
            Lname:"",
            Email:"",
            Body:"",
            Sent:" ",
            Class:"",
            Errors:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }
    handleChange(event) {
            this.setState(
                {
                    [event.target.name]:event.target.value
                }   )
    
       
       
    }
     handleErrors(){

        return new Promise((resolve, reject) =>{
            
            if(this.state.Fname !== "" &this.state.Lname !== ""& this.state.Email !== "" & this.state.Body !==""){
                
                resolve(this.setState({Errors:"1", Sent: 'Successfully Sent', Class:"contactSuccess" }))
    
            } else{
                reject(this.setState({Errors:"0", Sent: 'Error not all fields are completed', Class:"contactError"}))
            }
            })

    }
     handleSubmit(event){
        event.preventDefault()
            let handleError = this.handleErrors()
        handleError.then(()=>{
        if(this.state.Errors==='1'){
            const {Fname, Lname, Email, Body}= this.state
            const form = axios.post('/contactform', {
                Fname:Fname,
                Lname:Lname,
                Email:Email,
                Body:Body,
          
             
            },
            )
            this.setState({
                Fname:'',
                Lname:'',
                Email:'',
                Body:'',
                Errors:'0'
               })


            document.getElementById('ContForm').reset()
        }
    }
        )
    
    }
    render(){
        return(
            <ContactLayout handleChange={this.handleChange} handleSubmit={this.handleSubmit} Class = {this.state.Class} Sent={this.state.Sent}/>
        )
    }
}
export default ContactBackend