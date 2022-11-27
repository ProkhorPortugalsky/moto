var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ktm_125', function(req, res, next) {
  res.send("<h1>KTM 125</h1>")
});

router.get('/ktm_250', function(req, res, next) {
  res.send("<h1>KTM 250</h1>")
});

router.get('/ktm_300', function(req, res, next) {
  res.send("<h1>KTM 300</h1>")
});

module.exports = router;
