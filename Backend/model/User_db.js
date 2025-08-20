const mongoose = require('mongoose');

const ps=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    profile_img:String,
    phone:Number,
    pass:String,

});

module.exports=mongoose.model("User",ps);