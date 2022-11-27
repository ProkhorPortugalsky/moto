var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ktm_125', function(req, res, next) {
  res.render('moto', { title: 'KTM 125' , picture: 'images/125.jpg', desc: 'Характерный мотоцикл KTM 125 EXC построен специально для поклонников эндуро, предпочитающих ломать стереотипы при движении в городе, всегда готовых отправиться в настоящее путешествие' });
});

router.get('/ktm_250', function(req, res, next) {
  res.render('moto', { title: 'KTM 250' , picture: 'images/250.jpg', desc: 'KTM 250 EXC TPI нового поколения представляет собой идеальное сочетание мощности и управляемости и устанавливает четкий стандарт интуитивного управления, уникального стиля и максимальной производительности' });
});

router.get('/ktm_300', function(req, res, next) {
  res.render('moto', { title: 'KTM 300' , picture: 'images/300.jpg', desc: 'KTM 300 EXC был в авангарде безумных темпов развития экстремального enduro самого высокого уровня. Этот маневренный и легкий мастер-вездеход не боится препятствий и с появлением технологии TPI поднялся на невероятные высоты' });
});

module.exports = router;
