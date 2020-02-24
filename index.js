const sslRedirect = require('heroku-ssl-redirect');
const express= require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path');
const app = express()
require('dotenv').config();

app.use(sslRedirect());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'website/build')));

app.post('/contactform', (req,res)=>{

    //Creates html message for my message sent to my gmail account
    const htmlEmail = `
    <h3>Email Details</h3>
    <ul>
        <li>Name: `+ req.body.Fname+ ` `+ req.body.Lname + `</li>
        <li>Email: `+ req.body.Email+  `</li
    </ul>
    <h3>Message</h3>
    <p>`+ req.body.Body+  `</p>
    `
    //Creates authorization for my gmail account
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, //  .env file for user
        pass: process.env.EMAIL_PASS// from the .env password
      }
    });

    let body = {
      from: '"Website" <website@web.com>', 
      to: process.env.EMAIL_USER, 
      subject: "New Message from Website", 
      text: req.body.Body, 
      html: htmlEmail 
    }
    // Send message to my email
    transporter.sendMail(body, (err,result) =>{
      if(err){

        return err;
      }
    
    })
      

    res.redirect(201,'/contact');
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/website/build/index.html'));
});

const PORT = process.env.PORT || 5001

app.listen(PORT,()=> console.log('Server listening on port '+PORT))