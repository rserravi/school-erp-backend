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
    company: {
            name: {
                type: String,
                maxlenght: 50,
                required: true
            },
            logo: {
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
                    }
            },
            website: {type: String},
            address: [],
            phones:[],
            emails:[],
            social:[],
            mongoDataBase: ""
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
    },
    emails: [],
    address: [],
    phones: [],
    social: []

});
 
module.exports ={
   UserSchema: mongoose.model('user', UserSchema)
}
