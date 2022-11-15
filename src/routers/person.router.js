const express = require("express");
const { userAuthorization } = require("../middleware/authorization.middleware");
const { insertPerson, getAllPeople, getPeopleWithFilter } = require("../schoolData/people/person.model");

const router = express.Router();
 
 
router.all("/", (req, res, next) =>{
   //res.json({message: "return from person router"});
   next();
});

router.post("/", async(req, res) => {
    const {firstname, lastname, type, picture, genre, dni, birthdate, legalTutor, emails, address, phones, social, contactHistory, studentInterface, staffInterface, inboundInterface} = req.body;
    const query = require('url').parse(req.url, true).query;
    const database = query.db;

    try {
       
       const newPersonObj = {
            firstname, lastname, type, picture, genre, dni, birthdate, legalTutor, emails, address, phones, social, contactHistory, studentInterface, staffInterface, inboundInterface
       }

        const result = await insertPerson(newPersonObj, database);
        console.log("Insert Person Result",result);
        res.json({status:"success", message: newPersonObj.firstname + " "+ newPersonObj.lastname + " created"});


    } catch(err){
        console.log(err)
        let message = "Unable to create new person at the moment. Pleaset contatn administrator"
        res.json({status:"error", message});
    }
 });

 router.get("/", userAuthorization, async(req,res)=>{
    const query = require('url').parse(req.url, true).query;
    const database = query.db;
    const filter = query.filter

    if (filter || filter===""){
        try {
            const result = await getPeopleWithFilter(database, filter);
            return res.json({status:"success", result})
        }
        catch (error) {
            res.json({status:"error", message:error.message});
        }  
    }
    else{

        try {
            const result = await getAllPeople(database);
            return res.json({status:"success", result})
        }
        catch (error) {
            res.json({status:"error", message:error.message});
        }  
    }
 })

 
module.exports = router;