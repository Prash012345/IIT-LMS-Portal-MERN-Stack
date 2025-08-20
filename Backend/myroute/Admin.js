const exp = require("express");
const router = exp.Router();
const Admin_model = require("../model/Admin_db");
const bcrypt = require('bcrypt');


router.get("/test",async (req, res) => {
    res.json({msg:"hello"});
});

router.get("/list",async (req, res) => {
    var data=await Admin_model.find();
    res.json({data});
});

router.post("/del",async (req, res) => {
    var data=await Admin_model.findByIdAndDelete(req.body.id);
        res.json({msg : "Deleted"});
});

router.post("/created", async(req, res) => {
    console.log(req.body);

    var objimg = req.files.timg;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.tpass, saltRounds);

    objimg.mv("./public/admin/" + objimg.name,async (err) => {
        if (err) {
            throw err;
        } else {
            var insobj = {
                fname: req.body.tfname,
                lname: req.body.tlname,
                email: req.body.temail,
                profile_img: objimg.name,
                phone: req.body.tphone,
                pass: hashedPassword,
            };
            
            await Admin_model.create(insobj);

        }
    });

    res.json({ msg: "Submitted to node" });
});
module.exports = router;