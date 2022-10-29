const {UserSchema} = require("./User.scheme");
const mainDataBaseName = process.env.MAIN_DATABASE_NAME;

const insertUser = userObj => { 
   return new Promise(async (resolve, reject)=>{ 

       const dbConnection = await global.clientConnection
       const db = await dbConnection.useDb(mainDataBaseName)
       const User = await db.model("user",UserSchema)

       User(userObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};

const getUserbyEmail = email =>{
    return new Promise(async (resolve,reject)=>{

        const dbConnection = await global.clientConnection
        const db = await dbConnection.useDb(mainDataBaseName)
        const User = await db.model("user",UserSchema)

        if((!email)) return false;
        try{
            User.findOne({'emails.emailUrl':email}, (error, data)=>{
            if(error){
                resolve(error);
            }
            resolve(data);
            })
        } catch (error) {
            reject(error);
        }
    });
 };

 const getUserbyId = userId =>{
    return new Promise(async (resolve,reject)=>{

        const dbConnection = await global.clientConnection
        const db = await dbConnection.useDb(mainDataBaseName)
        const User = await db.model("user",UserSchema)

        if((!userId)) return false;
        try{
            User.findOne({"_id": userId}, (error, data)=>{
            if(error){
                reject(error);
            }
            resolve(data);
            }
        ).clone();
        } catch (error) {
            reject(error);
        }
    });
 };
 
 

const storeUserRefreshJWT = (_id, token) => {

    console.log("ID y TOKEN EN STORE REFRESH EN MONGO",_id, token);
    return new Promise(async (resolve, reject)=>{

        const dbConnection = await global.clientConnection
        const db = await dbConnection.useDb(mainDataBaseName)
        const User = await db.model("user",UserSchema)

        try {
            User.findOneAndUpdate(
                {_id},
                {$set: {"refreshJWT.token": token, "refreshJWT.addedAt": Date.now()}},
                {new: true}, (error, data) =>{
                    if(error){
                        reject(error);
                    }
                    resolve(data);
                    console.log(data);
                    }
            ).clone();
        } catch (error) {
            reject(error);       
        }
    })
}
 
const updatePassword = (email, newHashedPass) =>{
    return new Promise(async (resolve,reject)=>{

        const dbConnection = await global.clientConnection
        const db = await dbConnection.useDb(mainDataBaseName)
        const User = await db.model("user",UserSchema)

        try {
            User.findOneAndUpdate(
                {email},
                {$set:{"password": newHashedPass}},
                {new: true}, (error, data) =>{
                    if(error){
                        reject(error);
                    }
                    resolve(data);
                    console.log(data);
                    }
            ).clone();
        } catch (error) {
            reject(error);       
        }
    })
 }

const verifyUser = (randomURL,email) =>{
    return new Promise(async (resolve,reject)=>{

        const dbConnection = await global.clientConnection
        const db = await dbConnection.useDb(mainDataBaseName)
        const User = await db.model("user",UserSchema)

        try {
            User.findOneAndUpdate(
                {randomURL, email},
                {$set:{"isVerified": true}}
                )
                    .then((data)=> {
                        resolve(data);
                    })
                    .catch((error)=> {
                        console.log(error);
                        reject(error);
                    })
        } catch (error) {
            console.log(error);
            reject(error);       
        }
    })
}

const updateUser = (_id, userObj) =>{
    return new Promise(async (resolve,reject)=>{

        const dbConnection = await global.clientConnection
        const db = await dbConnection.useDb(mainDataBaseName)
        const User = await db.model("user",UserSchema)

        try {
            User.findByIdAndUpdate(
                {_id},
                {$set: userObj},
                {new: true}, (error, data) =>{
                    if(error){
                        reject(error);
                    }
                    resolve(data);
                    console.log(data);
                    }
            ).clone();
        } catch (error) {
            reject(error);       
        }
    })
 }
 
 
 
module.exports = {
   insertUser,
   getUserbyEmail,
   getUserbyId,
   storeUserRefreshJWT,
   updatePassword,
   verifyUser,
   updateUser
};
