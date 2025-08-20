const exp = require("express");
const router = exp.Router();
const Teacher_model = require("../model/Teacher_db");
const bcrypt = require('bcrypt');


router.get("/list",async (req, res) => {
    var data=await Teacher_model.find();
    res.json({data});
});
router.get("/test",async (req, res) => {
    res.json({msg:"hello"});
});

router.post("/del",async (req, res) => {
    var data=await Teacher_model.findByIdAndDelete(req.body.id);
        res.json({msg : "Deleted"});
});

router.post("/created", async(req, res) => {
    console.log(req.body);

    var objimg = req.files.timg;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.tpass, saltRounds);

    objimg.mv("./public/teacher/" + objimg.name,async (err) => {
        if (err) {
            throw err;
        } else {
            var insobj = {
                fname: req.body.tfname,
                lname: req.body.tlname,
                email: req.body.temail,
                profile_img: objimg.name,
                phone: req.body.tphone,
                // pass: req.body.tpass,
                pass: hashedPassword,
                sub: req.body.tsub,
            };
            
            await Teacher_model.create(insobj);

        }
    });

    res.json({ msg: "Submitted to node" });
});
module.exports = router;