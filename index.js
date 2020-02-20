const express= require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
require('dotenv').config();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/contactform', (req,res)=>{
    console.log(req.body)
    const htmlEmail = `
    <h3>Email Details</h3>
    <ul>
        <li>Name:`+ req.body.Fname+ ` `+ req.body.Lname + `</li>
        <li>Email:`+ req.body.Email+  `</li
    </ul>
    <h3>Message</h3>
    <p>`+ req.body.Body+  `</p>
    `
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASS// generated ethereal password
      }
    });

    let body = {
      from: '"Website" <website@web.com>', // sender address
      to: 'jondavies18.jd@gmail.com', // list of receivers
      subject: "New Message from Website", // Subject line
      text: req.body.Body, // plain text body
      html: htmlEmail // html body
    }
    transporter.sendMail(body, (err,result) =>{
      if(err){
        console.log(err)
        return err;
      }
      console.log(result)
    })
      

    res.redirect(201,'/contact');
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=> console.log('Server listening on port '+PORT))