const express = require("express");
const { insertClassroom } = require("../schoolData/classroom/classroom.model");

const router = express.Router();
 
 
router.all("/", (req, res, next) =>{
   //res.json({message: "return from equipment router"});
   next();
});

router.post("/", async(req, res) => {
    const {name, code, picture, capacity, equipment, weekAvailability, blackFlagCal} = req.body;
    const query = require('url').parse(req.url, true).query;
    const database = query.db;

    try {
       
       const newClassroomObj = {
           name,
           code,
           picture,
           capacity,
           equipment,
           weekAvailability,
           blackFlagCal
       }

        const result = await insertClassroom(newClassroomObj, database);
        console.log("Insert Classroom Result",result);
        res.json({status:"success", message:"Classroom "+newClassroomObj.name + " created"});

    } catch(err){
        console.log(err)
        let message = "Unable to create new classroom at the moment. Pleaset contatn administrator"
        res.json({status:"error", message});
    }
 });

 
module.exports = router;