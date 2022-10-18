const mongoose = require("mongoose")
const UserScheme = mongoose.Schema ({
   firstname: {
       type: String,
       maxlenght: 50,
       required: true
   },
   lastname: {
    type: String,
    maxlenght: 50,
    required: true
   },
   company: {
       type: String,
       maxlenght: 50,
       required: true
   },
   email: {
       type: String,
       maxlenght: 50,
       required: true
   },
   password: {
       type: String,
       minlenght: 8,
       maxlenght: 100,
       required: true
   },
   refreshJWT: {
        token:{
            type: String,
            maxLenght:500,
            default: ''
        },
        addedAt: {
            type: Date,
            required: true,
            default: Date.now()
        },
    },

});
 
module.exports ={
   UserScheme: mongoose.model('user', UserScheme)
}
