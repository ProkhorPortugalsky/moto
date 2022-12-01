var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/test')

var schema = mongoose.Schema({ name: String })

schema.methods.frrr = function(){
    console.log(this.get("name")+ "sounds loud!")
} 

var Mot = mongoose.model('Honda', schema)

var Motty = new Mot({ name: 'CRF' })
Motty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        Motty.frrr();
    }
})

