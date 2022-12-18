var express = require('express');
var router = express.Router();
var Mot = require("../models/mot").Mot

/* Страница моделей */
router.get('/:nick', function(req, res, next) {
    Mot.findOne({nick:req.params.nick}, function(err,mot){
        if(err) return next(err)
        if(!mot) return next(new Error("Нет такой модели"))
        res.render('moto', {
            title: mot.title,
            picture: mot.avatar,
            desc: mot.desc
        })
    })
})

module.exports = router;
