const cors = require('cors');
const jwt = require('jsonwebtoken');
var multer = require('multer');

var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/api/login', cors(corsOptions), function (req, res) {
  console.log(req.body);
  console.log(req.body.email);

  db.any('select * from users where email=$1 and passwd=$2', [req.body.email, req.body.passwd])
    .then(function (data) {

      let l_data = JSON.stringify(data[0]);
      if (data.length) {
        jwt.sign(l_data, 'secret',
          (err, token) => {
            res.cookie('authorize', token, { httpOnly: true });
            res.cookie('role', data[0].role);
            res.cookie('jwt', token//,{ httpOnly: true }
            ).send("Success");
          });
      }
      else
        res.send('Invalid User Name or password')
    });
});

app.get('/login', cors(corsOptions), function (req, res) {
  res.send('test')
});

function validateToken(p_jwt) {
  console.log(p_jwt);
  if (!p_jwt) {
    return ('Invalid Token')
  }
  else {
    try {
      let data = jwt.verify(p_jwt, 'secret')
      if (data.name && data.role) return 'Valid';
    }
    catch (e) {
      return ('Invalid Token');
    }
  }
  return 'Valid';
}

app.post('/logout', cors(corsOptions), function (req, res) {
  if (validateToken(req.cookies.authorize) !== 'Valid') { res.send('Invalid token'); return }
  res.clearCookie('jwt');
  res.clearCookie('role');
  res.clearCookie('authorize');
  res.send('logged out');
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/courses', cors(corsOptions), function (req, res) {

  db.any('select * from courses order by id asc')
    .then(function (data) {

      res.send(data);
    });
});

app.get('/api/topics', cors(corsOptions), function (req, res) {

  db.any('select * from topics')
    .then(function (data) {

      res.send(data);
    });
});
app.get('/api/courses', cors(corsOptions), function (req, res) {
  var id = req.params.id;
  db.any('select * from courses')
    .then(function (data) {
      res.send(data);
    });
});


app.get('/api/course/:id', cors(corsOptions), function (req, res) {
  var id = req.params.id;
  db.any('select * from courses where id=$1', [id])
    .then(function (data) {
      var result = data[0];
      res.send(result);
    });
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public')
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + '-' + file.originalname)
  }
})
var upload = multer({ storage: storage }).single('file')
app.post('/api/courses', cors(corsOptions), function (req, res) {
  var title = req.body.title;
  console.log(req.body);
  var desc = req.body.course_description;
  var fee = req.body.course_fee;
  var duration = req.body.duration;
  var file = req.body.file;
  if (file) {
    upload(req, res, function (err) {

      if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      //return res.status(200).send(req.file)

    })
  }
  db.query('INSERT INTO courses(title,course_description,course_fee,duration) values($1,$2,$3,$4)', [title, desc, fee, duration])
    .then(function (data) {
      res.send({ 'message': 'inserted' });

    });
});
app.post('/api/courses/:id', cors(corsOptions), function (req, res) {
  var title = req.body.title;
  var id = req.params.id;
  console.log(id);
  var courseDescription = req.body.course_description;
  var duration = req.body.duration;
  var fee = req.body.course_fee;
  db.query('UPDATE  courses SET title = $1, duration = $2, course_fee = $3, course_description = $4 WHERE id = $5',
    [title, duration, fee, courseDescription, id])
    .then(function (data) {
      res.send({ 'message': 'Updated' });


    });
});
app.post('/api/profileUpdate/:id', cors(corsOptions), function (req,res) {
  var id = req.params.id;
  console.log(id);
  var name = req.body.full_name;
  var email = req.body.email;
  var address = req.body.address;
  var contactNumber = req.body.contact_number;
  console.log(req.body);
  db.query('UPDATE users SET  full_name = $2, email = $3, address = $4, contact_number = $5 WHERE id = $1',
  [id, name, email, address, contactNumber])
  .then(function (data){
    res.send({'messege':'updated'});
  });
});
app.post('/api/courses/courseDelete/:id', cors(corsOptions), function (req, res) {
  var id = req.params.id;
  console.log(id);

  db.query('DELETE from courses   WHERE id = $1',
    [id])
    .then(function (data) {
      res.send({ 'message': 'Deleted' });


    });
});

app.get('/api/user/:id', cors(corsOptions),function (req, res) {
    let id = req.params.id;
   
  db.any('select * from users where id=$1', [id])
  .then(function (data) {
    console.log(data);   
   res.send(data[0]);
  });     
});

app.listen(8000, (err) => {
  console.log(`running server on port: 8000`);
});
