var express = require('express');
var router = express.Router();
var Mot = require("../models/mot").Mot
var async = require("async");

// /* Страница моделей */
router.get('/:nick', function(req, res, next) {
    async.parallel([
        function(callback){
            Mot.findOne({nick:req.params.nick},function(err,mot){
                callback(err,mot)
            })
    
        },
        function(callback){
            Mot.find({},{_id:0,title:1,nick:1}, function(err,mots){
                callback(err,mots)
            })
        }
    ],
    function(err,result){
        if(err) return next(err)
        var mot = result[0];
        var mots = result[1]
        if(!mot) return next(new Error("Нет такой модели КТМ"))
        //console.log(mot.avatar)
        res.render('moto', {
            title: mot.title,
            picture: mot.avatar,
            desc: mot.desc,
            menu: mots
        });
    })
})


module.exports = router;
