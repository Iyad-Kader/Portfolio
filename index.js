const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const favicon = require('express-favicon');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(__dirname + '/build/favicon.ico'));

app.post('/api/form', (req, res) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      `;

    let transporter = nodemailer.createTransport({
      service: "hotmail", // hostname
      auth: {
          user: "portfolio80@outlook.com",
          pass: "Ilovemyimam123"
      },
      tls: {
        rejectUnauthorized: false
      }
    }); 

    let mailOptions = {
      from: 'portfolio80@outlook.com',
      to: 'portfolio80@outlook.com',
      replyTo: 'portfolio80@outlook.com',
      subject: 'Contact Messenger',
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      res.send('Sending OK')
      console.log('Message sent: %s', info.message);
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });


  const PORT = process.env.PORT || 5000

  app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}')
  })
  
app.use(express.static(path.join(__dirname, '/./client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/./client/build/index.html'));
});