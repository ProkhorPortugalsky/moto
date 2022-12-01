var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/test1')

var Mot = require("./models/mot").Mot

var mot = new Mot({
    title: "Honda CRF", 
    nick: "honda_crf"
})

console.log(mot)

mot.save(function () {
        console.log(mot.title)
})

