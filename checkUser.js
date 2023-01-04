var mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0/all")
var User = require("./models/user.js").User

var first_user = new User({
    username: "Vasya",
    password: "qwerty"
})

first_user.save(function(err,user){
    if(err) throw err
    console.log(user)
})
