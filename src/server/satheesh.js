const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config.js')
var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

const db = require("./db.js"); 
// var cookieParser = require('cookie-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

 
app.post('/api/login', cors(corsOptions),function (req, res) {
    console.log(req.body);
  //  console.log(req.body.email);
    
    db.any('select email, full_name, user_type, id from users where email=$1 and passwd=$2',[req.body.email, req.body.passwd])
    .then(function (data) {
        console.log(data)
      if (data.length) {
        let lData = JSON.stringify(data[0]);
        jwt.sign(lData, config.secretKey, 
        (err,token) => {
          res.cookie('authorize',token,{httpOnly:true});
          res.cookie('user_type',data[0].user_type);
          res.cookie('jwt',token//,{ httpOnly: true }
          ).send({'success': true, 'token': token});
        });
      }
      else
        res.send({'success': false, 'message': 'Invalid email or password'});      
      }
    );      
});

function validateToken(pJwt){
  //console.log(p_jwt);
  if (!pJwt)
  {
    return('Invalid Token')
  }
  else {
    try {
      let data=jwt.verify(pJwt, config.secretKey)
      if (data.full_name && data.role) return 'Valid';
    }
    catch(e) {
      return('Invalid Token');
    }
  }
  return 'Valid';
}

app.post('/logout', cors(corsOptions),function(req, res){
  if (validateToken(req.cookies.authorize) !=='Valid') { res.send('Invalid token'); return ; }
  res.clearCookie('jwt');
  res.clearCookie('user_type');
  res.clearCookie('authorize');
  res.send('logged out');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

  
app.get('/api/users', cors(corsOptions),function (req, res) {
    
  db.any('select * from users')
  .then(function (data) {
      
   res.send(data);
  });     
});

  app.get('/api/courses', cors(corsOptions),function (req, res) {
    
    db.any('select * from courses')
    .then(function (data) {
        
     res.send(data);
    });     
});

app.get('/api/topics', cors(corsOptions),function (req, res) {
    
  db.any('select * from topics')
  .then(function (data) {
      
   res.send(data);
  });     
});




app.listen(8000, (err) => {
  console.log(`running server on port: 8000`);
});
