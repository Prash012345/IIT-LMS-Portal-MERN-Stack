const mongoose = require('mongoose');

const ps=mongoose.Schema({
    email:String,
    mat_desc:String,
    material:String,
});

module.exports=mongoose.model("Material",ps);