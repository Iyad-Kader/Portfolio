var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'portfoliocontact@gmail.com',
    pass: 'Ilovemyimam123'
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"Contact Messenger" <portfoliocontact@gmail.com',
  to: 'eddie.kader@gmail.com',
  subject: 'Contact Page Message',
  text: 'testing'
};

transporter.sendMail(HelperOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('The message was sent!');
  console.log(info);
});
