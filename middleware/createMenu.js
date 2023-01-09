//var Mot = require("./../models/mot").Mot
var db = require('../mySQLConnect.js');

module.exports = function(req,res,next){
    res.locals.nav = []
    db.query(`SELECT title, nick FROM motos.mots`, (err, mots) =>{
    if(err) throw err
    //mots[0].title = "123"
    res.locals.nav = mots
    next()
    })
//     Mot.find({},{_id:0,title:1,nick:1}, function(err, result){
//         if(err) throw err
//         res.locals.nav = result
//         next()
//         })
    }