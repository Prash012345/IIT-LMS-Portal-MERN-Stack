const exp = require("express");
const router = exp.Router();
const User_model = require("../model/User_db");
const bcrypt = require('bcrypt');

router.get("/list",async (req, res) => {
    var data=await User_model.find();
    res.json({data});
});

router.get("/profile",async (req, res) => {
    var data=await User_model.find();
    res.json({data});
});

router.post("/del",async (req, res) => {
    var data=await User_model.findByIdAndDelete(req.body.id);
        res.json({msg : "Deleted"});
});

router.post("/created", async (req, res) => {
    console.log(req.body);

    var objimg = req.files.simg;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.spass, saltRounds);

    objimg.mv("./public/dp-images/" + objimg.name,async (err) => {
        if (err) {
            throw err;
        } else {
            var insobj = {
                fname: req.body.sfname,
                lname: req.body.slname,
                email: req.body.semail,
                profile_img: objimg.name,
                phone: req.body.sphone,
                pass: hashedPassword,
                // pass: req.body.spass,

            };
            
            await User_model.create(insobj);

        }
    });

    res.json({ msg: "Submitted to node" });
});
module.exports = router;