const express = require("express");
const { insertSubject } = require("../schoolData/subject/subject.model");


const router = express.Router();
 
 
router.all("/", (req, res, next) =>{
   //res.json({message: "return from subject router"});
   next();
});

router.post("/", async(req, res) => {
    const {name, code, specialReq, tests, costPrevision} = req.body;
    const query = require('url').parse(req.url, true).query;
    const database = query.db;

    try {
       
       const newSubjectObj = {
           name,
           code,
           specialReq,
           tests,
           costPrevision
       }

        const result = await insertSubject(newSubjectObj, database);
        console.log("Insert Subject Result",result);
        res.json({status:"success", message:"Subject "+newSubjectObj.name + " created"});


    } catch(err){
        console.log(err)
        let message = "Unable to create new Subject at the moment. Pleaset contatn administrator"
        res.json({status:"error", message});
    }
 });


 
module.exports = router;