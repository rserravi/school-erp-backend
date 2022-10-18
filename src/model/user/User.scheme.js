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
   }
});
 
module.exports ={
   UserScheme: mongoose.model('user', UserScheme)
}
