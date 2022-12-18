var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/motos')

var Mot = require("./models/mot").Mot
var mot = Mot.find({})

console.log(mot)