const cors=require('cors');
const jwt = require('jsonwebtoken');

var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
var cookieParser = require('cookie-parser');
app.use(cookieParser());
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
    console.log(req.body.email);

    db.any('select * from users where email=$1 and passwd=$2',[req.body.email, req.body.passwd])
    .then(function (data) {
        
    let l_data=JSON.stringify(data[0]);
    if(data.length){
      jwt.sign(l_data,'secret',
      (err,token)=>{
        res.cookie('authorize',token,{httpOnly:true});
        res.cookie('role',data[0].role);
        res.cookie('jwt',token//,{ httpOnly: true }
        ).send("Success");
      });
    }
    else
      res.send('Invalid User Name or password')      
    });      
});

app.get('/login', cors(corsOptions),function (req, res) { 
  res.send('test')
});

function validateToken(p_jwt){
  console.log(p_jwt);
  if(!p_jwt)
  {
    return('Invalid Token')
  }
  else{
    try{
      let data=jwt.verify(p_jwt, 'secret')
      if(data.name && data.role) return 'Valid';
    }
    catch(e){
      return('Invalid Token');}
  }
  return 'Valid';
}

app.post('/logout', cors(corsOptions),function(req, res){
  if(validateToken(req.cookies.authorize)!=='Valid'){res.send('Invalid token'); return}
  res.clearCookie('jwt');
  res.clearCookie('role');
  res.clearCookie('authorize');
  res.send('logged out');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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
