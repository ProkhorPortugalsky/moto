var express = require('express');
var router = express.Router();
//var User = require("./../models/user").User
var db = require('../mySQLConnect.js');
var crypto = require("crypto")
var checkAuth = require("./../middleware/checkAuth.js")
/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting="Hi!!!";
    res.render('index', { title: 'Express', counter: req.session.counter });
  
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
  });  

  /* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  db.query(`SELECT * FROM motos.users WHERE users.login = '${username}'`, (err, users) => {
    if(err) return next(err)
    if(users.length == 0){ 

      salt = Math.random() + ""
      hashedPassword = crypto.createHmac('sha1', salt).update(password).digest('hex')
      db.query(`INSERT INTO motos.users  (idusers, login, hashedPassword, salt) VALUES (NULL,'${username}', '${hashedPassword}', '${salt}');`, (err, user) => {
        if(err) return next(err)
        req.session.user = user.insertId
        res.redirect('/')
        })



    } else {
      salt = users[0].salt;
      hashedPassword = crypto.createHmac('sha1', salt).update(password).digest('hex')
      if(hashedPassword === users[0].hashedPassword){
        req.session.user = users[0].idusers
        res.redirect('/')
      } else {
        res.render('logreg', {title: 'Ошибка', error:"Пароль не верный"})
      }
    }        
  })

  // User.findOne({username:username},function(err,user){
  //   if(err) return next(err)
  //   if(user){ 
  //     if(user.checkPassword(password)){
  //       req.session.user = user._id
  //       res.redirect('/')
  //     } else {
  //       res.render('logreg', {title: 'Ошибка', error:"Пароль не верный"})
  //     }       
  //   } else {
  //     var user = new User({username:username,password:password})
  //     user.save(function(err,user){
  //       if(err) return next(err)
  //       req.session.user = user._id
  //       res.redirect('/')
  //     })

  //    } 
  // })
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});

module.exports = router;