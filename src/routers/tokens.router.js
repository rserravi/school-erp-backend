const express = require("express");
const router = express.Router();
const { createAccessJWT, verifyRefreshJWT } = require("../helpers/jwt.helpers");
const { getUserbyEmail } = require("../model/user/User.model");

// RETURN REFRESH JWT
router.get("/", async (req, res, next) => {
    const  {authorization} = req.headers;
    console.log("AUTH TOKEN ", authorization);
    //1. Make sure the token is valid
    const decoded = await verifyRefreshJWT(authorization);
    if (decoded.payload){ //payload has the email
        //2. Check if the jwt exists in database (mongo)
        console.log("DECODED PAYLOAD IN TOKEN", decoded.payload)
        const userProf = await getUserbyEmail(decoded.payload[0].emailUrl);
        console.log ("THIS IS USER PROFILE", userProf)
  
        if (userProf.id) {
            let tokenExp = userProf.refreshJWT.addedAt;
            const dbRefreshToken = userProf.refreshJWT.token;
  
            tokenExp = tokenExp.setDate(tokenExp.getDate() + +process.env.JWT_REFRESH_SECRET_EXP_DAY );
  
            //Check if token is expired or not valid
            const today = new Date();
            if (dbRefreshToken !== authorization && tokenExp < today){
                return res.status(403).json({message: "Forbidden"});
            }
  
            const accessJWT = await createAccessJWT(decoded.payload, userProf._id.toString());
            console.log ("Refresh JWT (GET)", )
            return res.json({status: "success", accessJWT});
        }
    }
    res.status(403).json({message: "Forbidden"});
 });
 

 
module.exports = router;