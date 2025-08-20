const exp = require("express");
const router = exp.Router();
const Material_model = require("../model/Material_db");

router.get("/list",async (req, res) => {
    var data=await Material_model.find();
    res.json({data});
});

router.get("/test",async (req, res) => {
    res.json({msg:"hello"});
});

router.post("/del",async (req, res) => {
    var data=await Material_model.findByIdAndDelete(req.body.id);
        res.json({msg : "Deleted"});
});

router.post("/submit", async (req, res) => {
    console.log(req.body);

    var objimg = req.files.smaterial;

    objimg.mv("./public/material/" + objimg.name,async (err) => {
        if (err) {
            throw err;
        } else {
            var insobj = {
                email: req.body.semail,
                mat_desc: req.body.smat_desc,
                material: objimg.name
            };
            
            await Material_model.create(insobj);

        }
    });

    res.json({ msg: "Submitted to node" });
});


module.exports = router;