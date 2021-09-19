const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const sendSMS = () => client.messages.create({
    body: 'ishlayapti ononib ketay :)',
    from: process.env.TWILIO_PHONE_NUMBER,
    to: '+998998468506'
})
app.get('/' , (req , res)=>{
    sendSMS()
   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))