const mongoose = require("mongoose")
const ClassroomSchema = mongoose.Schema ({
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
    picture: {
        fileName: {
            type: String,
            required: false,
        },
        file: {
            data: Buffer,
            contentType: String,
        },
        uploadTime: {
            type: Date,
            default: Date.now,
        },
        type: {
            type: String,
            maxLenght: 20
        }
    },
    capacity: {
        type: Number,
    },
    equipment : [],
    weekAvailability : [],
    blackFlagCal: []
   
});
 
module.exports ={
    ClassroomSchema
}
