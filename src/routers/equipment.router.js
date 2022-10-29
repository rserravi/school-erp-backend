const express = require("express");
const { insertEquipment } = require("../schoolData/equipment/equipment.model");

const router = express.Router();
 
 
router.all("/", (req, res, next) =>{
   //res.json({message: "return from equipment router"});
   next();
});

router.post("/", async(req, res) => {
    const {name, description} = req.body;
    const query = require('url').parse(req.url, true).query;
    const database = query.db;

    try {
       
       const newEquipmentObj = {
           name,
           description,
       }

        const result = await insertEquipment(newEquipmentObj, database);
        console.log("Insert Equipment Result",result);
        res.json({status:"success", message:"Equipment "+newEquipmentObj.name + " created"});


    } catch(err){
        console.log(err)
        let message = "Unable to create new equipment at the moment. Pleaset contatn administrator"
        res.json({status:"error", message});
    }
 });


 
module.exports = router;