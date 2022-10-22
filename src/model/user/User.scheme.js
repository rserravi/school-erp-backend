const mongoose = require("mongoose")
const UserSchema = mongoose.Schema ({
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
    isVerified: {
        type: Boolean,
        required: true,
        default: true
    },
    isCompleted: {
        type: Number,
        required: false,
        default: 0
    },
    randomURL: {
        type: String,
        maxLenght: 100,
        default:""
    }

});
 
module.exports ={
   UserSchema: mongoose.model('user', UserSchema)
}
