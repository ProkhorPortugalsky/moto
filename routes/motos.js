var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Mot = require("../models/mot").Mot
//var checkAuth = require("./../middleware/checkAuth.js")

/* GET mots listing. */
router.get('/', function(req, res, next) {
    res.send('<h1>Это экран для списка мотоциклов</h1>');
    });    

// /* Страница моделей */
router.get('/:nick', function(req, res, next) {
    db.query(`SELECT * FROM motos.mots WHERE mots.nick = '${req.params.nick}'`, (err, mots) => {
        if(err) {
        console.log(err);
        if(err) return next(err)
        } else {
        if(mots.length == 0) return next(new Error("Нет такого мотоцикла"))
        var mot = mots[0];
        res.render('moto', {
        title: mot.title,
        picture: mot.avatar,
        desc: mot.about
        })   
        }
    })     
    // Mot.findOne({nick:req.params.nick},function(err,mot){
    //     if(err) return next(err)
    //     if(!mot) return next(new Error("Нет такой модели КТМ"))
    //     //console.log(mot.avatar)
    //     res.render('moto', {
    //         title: mot.title,
    //         picture: mot.avatar,
    //         desc: mot.desc,
    //     });
    // })
});


module.exports = router;
