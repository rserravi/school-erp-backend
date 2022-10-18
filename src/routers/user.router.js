const express = require("express")
const { insertUser } = require("../model/user/User.model");
const { hashPassword} = require("../helpers/bcrypt.helpers")
const router = express.Router();
 
 
router.all("/", (req, res, next) =>{
   //res.json({message: "return from user router"});
   next();
});

router.post("/", async(req, res) => {
    const {firstname, lastname, company, email, password } = req.body;

    try {
        //hash password
       const hashedPass = await hashPassword(password);
 
       const newUserObj = {
           firstname,
           lastname,
           company,
           email,
           password:hashedPass,
       }

        const result = await insertUser(newUserObj);
        console.log(result);
        res.json({message: "New user created", result});
    } catch(err){
        res.json({message: "Error en insertUser o user.router:", err});
    }
 });
 

 
module.exports = router;