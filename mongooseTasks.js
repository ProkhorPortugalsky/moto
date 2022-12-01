var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/test')

var Mot = mongoose.model('Honda', { name: String })

var Motty = new Mot({ name: 'CRF' })
Motty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('FRRRRRR')
    }
})
