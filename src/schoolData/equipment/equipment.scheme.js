const mongoose = require("mongoose")
const EquipmentSchema = mongoose.Schema ({
    name: {
        type: String,
        maxlenght: 50,
        required: true
    },
    description: {
        type: String,
        maxlenght: 400,
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
   
});
 
module.exports ={
    EquipmentSchema
}
