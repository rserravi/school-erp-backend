const mongoose = require("mongoose")
const PersonSchema = mongoose.Schema ({
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
    type: {
        type: String, //Staff, Student, Inbound
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
    genre:{
        type:String,
        maxLenght:40
    },
    dni:{
        type:String,
        maxLenght:20
    },
    birthdate:{
        type: Date,
        default: Date.now
    },
    legalTutor: {
        type: String,
    },
    emails: [],
    address: [],
    phones: [],
    social: [],
    contactHistory: [],
    studentInterface: {
        subjects:[],
        payments: [{
            timing: {type: String}, //Ocassion, weekly, monthly, yearly
            remaining: [],
            done: []
        }]
    },
    staffInterface: {
        occupation: { //Teacher, OfficeAdmin,
            type: String,
            maxlenght: 40
        },
        endOfContract:{
            type: Date
        },
        priceXHour: {type: Number},
        payments: {
            timing: {type: String}, //Ocassion, weekly, monthly, yearly
            remaining: [],
            done: []
        },
        weekAvailability:[], 
        blackFlagCal:[],
    },
    inboundInterface: {
        type: { //Visitor, Lead, Customer (then it becomes student), Promoter
            type: String,
            maxlenght: 40
        },
        process : {type: String} //Contacted, info Sent, contract sent, contract signed, followActions

    }

});
 
module.exports ={
    PersonSchema
}
