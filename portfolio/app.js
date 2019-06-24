// async function sendEmail () {
//   const nodemailer = require('nodemailer');
//   const { google } = require('googleapis');
//   const OAuth2 = google.auth.OAuth2;

//   const oauth2Client = new OAuth2(
//     '805603190576-hjneghnvme54f44ehnm73vcb4fua00as.apps.googleusercontent.com', // ClientID
//     'E_yAd0S75aYc3lmaxSwHcKqo', // Client Secret
//     'https://developers.google.com/oauthplayground' // Redirect URL
//   );
//   oauth2Client.setCredentials({
//     refresh_token: '1/YeDO0YhZWng-uBjb6VGZGwPm8wKYSSgHY2HdU7cts3cCBXBraV2NaNn4bbfFCrlf'
//   });
//   const tokens = await oauth2Client.refreshAccessToken();
//   const accessToken = tokens.credentials.access_token;

//   const smtpTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: 'portfoliocontactmessenger@gmail.com',
//       clientId: '805603190576-hjneghnvme54f44ehnm73vcb4fua00as.apps.googleusercontent.com',
//       clientSecret: 'E_yAd0S75aYc3lmaxSwHcKqo',
//       refreshToken: '1/YeDO0YhZWng-uBjb6VGZGwPm8wKYSSgHY2HdU7cts3cCBXBraV2NaNn4bbfFCrlf',
//       accessToken: accessToken
//     }
//   });
//   const mailOptions = {
//     from: 'portfoliocontactmessenger@gmail.com',
//     to: 'eddie.kader@gmail.com',
//     subject: 'Contact Messenger',
//     generateTextFromHTML: true,
//     html: '<b>test</b>'
//   };
//   smtpTransport.sendMail(mailOptions, (error, response) => {
//     error ? console.log(error) : console.log(response);
//     smtpTransport.close();
//   });
// } // That last brace is to close off our async function
// sendEmail();

const nodemailer = require('nodemailer');
const path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3002;
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var multer = require('multer');
var errorHandler = require('errorhandler');
// could be/remain at top of file
var http = require('http');

var server = http.createServer(app);
// delete this line if NOT using socket.io
var io = require('socket.io').listen(server);

server.listen(app.get('port'), function () {
  console.log('Express server on port ' + app.get('port'));
});

var auth = {
  type: 'oauth2',
  user: 'portfoliocontactmessenger@gmail.com',
  clientId: '805603190576-hjneghnvme54f44ehnm73vcb4fua00as.apps.googleusercontent.com',
  clientSecret: 'E_yAd0S75aYc3lmaxSwHcKqo',
  refreshToken: '1/YeDO0YhZWng-uBjb6VGZGwPm8wKYSSgHY2HdU7cts3cCBXBraV2NaNn4bbfFCrlf'
};
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
  saveUninitialized: true,
  secret: 'uwotm8' }));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse multipart/form-data
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/send', function (req, res) {
  response = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  var mailOptions = {
    from: req.body.name,
    to: 'eddie.kader@gmail.com',
    subject: 'Contact Messenger' + req.body.name,
    text: req.body.message,
    html: 'Message from: ' + req.body.name + '<br></br> Email: ' + req.body.email + '<br></br> Message: ' + req.body.message
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth
  });
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(res));
    }
  });
});
// start the server
app.listen(port);
