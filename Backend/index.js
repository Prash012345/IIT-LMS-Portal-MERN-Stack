const exp=require("express");
const cors=require("cors");
const bodyParser = require('body-parser')
const fu=require("express-fileupload");
const mongoose = require('mongoose');
const path = require('path');
const publicFolderPath = path.join(__dirname, 'public');



const app=exp();
app.use(exp.static(publicFolderPath));
app.use(cors());
app.use(fu());
mongoose.connect('');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const validation=require("./myroute/validation");
app.use('/auth',validation);


const cr=require("./myroute/Signup");
app.use("/user",cr);

const th=require("./myroute/Teacher");
app.use("/teacher",th);

const ad=require("./myroute/Admin");
app.use("/admin",ad);

const mat=require("./myroute/Material");
app.use("/material",mat);


app.get("/",(req,res)=>{
   res.send("Hello Node");
});


app.listen(2000);




