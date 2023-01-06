var express = require('express');
var router = express.Router();
var Mot = require("../models/mot").Mot
var checkAuth = require("./../middleware/checkAuth.js")

// /* Страница моделей */
router.get('/:nick', checkAuth, function(req, res, next) {
    Mot.findOne({nick:req.params.nick},function(err,mot){
        if(err) return next(err)
        if(!mot) return next(new Error("Нет такой модели КТМ"))
        //console.log(mot.avatar)
        res.render('moto', {
            title: mot.title,
            picture: mot.avatar,
            desc: mot.desc,
        });
    })
})


module.exports = router;
