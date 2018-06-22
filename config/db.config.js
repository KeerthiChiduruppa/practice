
var mongoose =require('mongoose');

module.exports =mongoose.connect('mongodb+srv://administrator:admin@cluster0-mw8hr.mongodb.net/practice?retryWrites=true')

.then(() => {

console.log("DB connected")

}, err => {

console.log("DB error")

}

);