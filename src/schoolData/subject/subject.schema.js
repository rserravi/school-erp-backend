const mongoose = require("mongoose")
const SubjectSchema = mongoose.Schema ({
    name: {
        type: String,
        maxlenght: 50,
        required: true
    },
    code: {
        type: String,
        maxlenght: 10,
        required: true
    },
    specialReq : [],
    tests : [],
    costPrevision : {
        type: Number
    }
   
});
 
module.exports ={
    SubjectSchema
}
