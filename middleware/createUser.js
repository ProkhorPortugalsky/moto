//var User = require("./../models/user").User
var db = require('../mySQLConnect.js');

module.exports = function(req,res,next) {
    res.locals.user = null
    db.query(`SELECT * FROM motos.users WHERE users.idusers = '${req.session.user}'`, (err, users) => { 
        if(err) return next(err)
        if(users.length == 0){
        }else{
            res.locals.user = users[0].idusers;
        }
        next();
    })
    // User.findById(req.session.user, function (err, user) {
    //     if (err)
    //         return next(err)
    //     res.locals.user = user;
    //     next();
    // })
    
}
