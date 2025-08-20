const mongoose = require('mongoose');

const ps=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    profile_img:String,
    phone:Number,
    pass:String,
    sub:String,

});

module.exports=mongoose.model("Teacher",ps);