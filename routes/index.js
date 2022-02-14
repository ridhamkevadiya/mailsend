var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  var email = "tenprime016@gmail.com"
  var toemail = "languagepdf@gmail.com"




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tenprime016@gmail.com',
    pass: '8238329007'
  }
});

var mailOptions = {
  from: email ,
  to: toemail,
  subject: 'Prime',
  text: 'This is our Brand'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


});

module.exports = router;
