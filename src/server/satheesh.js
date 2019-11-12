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
    
  db.any('select * from courses order by id asc')
  .then(function (data) {
      
   res.send(data);
  });     
});
 
app.get('/api/courses',cors(corsOptions),function(req,res){
var id=req.params.id;
db.any('select * from courses')
.then(function(data){
  res.send(data);
});
});


app.get('/api/course/:id', cors(corsOptions),function (req, res) {
var id = req.params.id;  
db.any('select * from courses where id=$1', [id])
.then(function (data) {
  var result = data[0];  
 res.send(result);
});     
});
app.post('/api/courses', cors(corsOptions),function (req, res) {
var title = req.body.title;
console.log(req.body);
var desc = req.body.course_description;
var fee = req.body.course_fee;
var duration = req.body.duration;
db.query('INSERT INTO courses(title,course_description,course_fee,duration) values($1,$2,$3,$4)',[title,desc,fee,duration])
.then(function(data){
  res.send({'message':'inserted'});

});     
});
app.post('/api/courses/:id', cors(corsOptions),function (req, res) {
var title = req.body.title;
var id = req.params.id;
console.log(id);
var courseDescription = req.body.course_description;
var duration = req.body.duration;
var fee = req.body.course_fee;
db.query('UPDATE  courses SET title = $1, duration = $2, course_fee = $3, course_description = $4 WHERE id = $5',
  [title, duration, fee, courseDescription, id])
.then(function(data){
  res.send({'message':'Updated'});


});     
});
app.post('/api/courses/courseDelete/:id', cors(corsOptions),function (req, res) {
var id = req.params.id;
console.log(id);

db.query('DELETE from courses   WHERE id = $1',
  [ id])
.then(function(data){
  res.send({'message':'Deletede'});


});     
});


app.get('/api/topics/:courseId', cors(corsOptions),function (req, res) {
    
  var courseId = req.params.courseId;
  db.any('select * from topics WHERE course_id=$1', [courseId])
  .then(function (data) {
      
   res.send(data);
  });     
});

app.post('/api/topics', cors(corsOptions),function (req, res) {
  var topicTitle = req.body.topic_title;
  var desc = req.body.description;
  var courseId = req.body.course_id;
  db.query('INSERT INTO topics(topic_title, description, course_id) values($1, $2, $3)',[topicTitle, desc, courseId])
  .then(function (data) {
      res.send({'message': 'Inserted'});
  });     
});


app.post('/api/topics/:id', cors(corsOptions),function (req, res) {
  var topicTitle = req.body.topic_title;
  var desc = req.body.description;
  var id = req.params.id;
  
  db.query('UPDATE topics SET topic_title = $1, description = $2  WHERE id = $3',
  [topicTitle, desc, id])
  .then(function (data) {
      res.send({'message': 'Updated'});
  });     
});

app.post('/api/topics/topicDelete/:id', cors(corsOptions),function (req, res) {
  
  var id = req.params.id;
  console.log(id);
  db.query('DELETE from topics WHERE id = $1',
 [id] )
  .then(function (data) {
      res.send({'message': 'Deleted'});
  });     
});


app.get('/api/subtopics/:topicId', cors(corsOptions),function (req, res) {
  var topicId =req.params.topicId;
db.any('select * from topics where parent_id=$1 order by id asc', [topicId])

.then(function (data) {
    res.send(data);   
});     
});

app.get('/api/subtopic/:id', cors(corsOptions),function (req, res) {
  var id =req.params.id;
db.any('select * from topics where id =$1',[id])

.then(function (data) {
    var result = data[0];
 res.send(result );
});     
});

app.post('/api/subtopics', cors(corsOptions),function (req, res) {
  var topicTitle = req.body.topic_title;
  var desc = req.body.description;
  var parentId = req.body.parent_id;
  
  db.query('INSERT INTO topics(topic_title, description, parent_id) values($1, $2, $3)',[topicTitle, desc, parentId])
  .then(function (data) {
      res.send({'message': 'Inserted'});
  });     
});


app.post('/api/subtopics/:id', cors(corsOptions),function (req, res) {
  var topicTitle = req.body.topic_title;
  var desc = req.body.description;
  var id = req.params.id;
  console.log("here");
  db.query('UPDATE topics SET topic_title = $1, description = $2  WHERE id = $3',
  [topicTitle, desc, id])
  .then(function (data) {
      res.send({'message': 'Updated'});
  });     
});

app.post('/api/subtopics/subtopicDelete/:id', cors(corsOptions),function (req, res) {
  
  var id = req.params.id;
  console.log(id);
  db.query('DELETE from topics WHERE id = $1',
 [id] )
  .then(function (data) {
      res.send({'message': 'Deleted'});
  });     
});


app.post('/api/collections/:subtopicId', cors(corsOptions),function (req, res) {
  var topic_collections = req.body.topic_collections;
  
  var parentId = req.body.parent_id;
  
  db.query('INSERT INTO topic_collections (sourse,topic_id,collection_ type) values($1, $2, $3)',[topic_collections])
  .then(function (data) {
      res.send({'message': 'Inserted'});
  });     
});


app.get('/api/collections/:subtopicId', cors(corsOptions),function (req, res) {
  var topic_collection =req.params.topic_collection;
db.any('select * from topic_collections where parent_id=$1 order by id asc', [topic_collections])

.then(function (data) {
    res.send(data);   
});     
});




app.listen(8000, (err) => {
  console.log(`running server on port: 8000`);
});
