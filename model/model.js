var mongoose =require('mongoose');
var userSchema =mongoose.Schema({

    firstName: String,
    lastName : String,
    email : String,
    gender : String,
    source : String,
    destination : String,
    from : Date,
    to : Date,
    noOfTickets : Number,
    age : Number

});

 

module.exports =mongoose.model('Consumer',userSchema);