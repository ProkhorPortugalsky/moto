var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var motosRouter = require('./routes/motos');

// var mongoose = require('mongoose')
// mongoose.connect('mongodb://0.0.0.0/moto');
var mysql2 = require('mysql2/promise');
var session = require("express-session");

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var MongoStore = require('connect-mongo');
var MySQLStore = require('express-mysql-session')(session);

var options = {
  host : '127.0.0.1',
  port: '3306',
  user : 'root',
  password : 'Wwwprohor15',
  database: 'motos'
  };
  var connection = mysql2.createPool(options)
  var sessionStore = new MySQLStore( options, connection);  

  app.use(session({
    secret: 'Mots',
    key: 'sid',
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: { path: '/',
    httpOnly: true,
    maxAge: 60*1000
    }
    }));
    
// app.use(session({
//   secret: "Mots",
//   cookie:{maxAge:60*1000},
//   resave: true,
//   saveUninitialized: true,
//   store: MongoStore.create({mongoUrl: 'mongodb://0.0.0.0/moto'})  
// }))


app.use(function(req,res,next){
  req.session.counter = req.session.counter +1 || 1
  next()
})

app.use(require("./middleware/createMenu.js"))
app.use(require("./middleware/createUser.js"))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/motos', motosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
