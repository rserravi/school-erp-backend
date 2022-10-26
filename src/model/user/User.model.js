const {UserSchema} = require("./User.scheme");
 
const insertUser = userObj => {
   return new Promise((resolve, reject)=>{
       UserSchema(userObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};

const getUserbyEmail = email =>{
    return new Promise((resolve,reject)=>{
        if((!email)) return false;
        try{
            UserSchema.findOne({'email.emailUrl':email}, (error, data)=>{
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
    return new Promise((resolve,reject)=>{
        if((!userId)) return false;
        try{
            UserSchema.findOne({"_id": userId}, (error, data)=>{
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
    return new Promise((resolve, reject)=>{
        try {
            UserSchema.findOneAndUpdate(
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
    return new Promise((resolve,reject)=>{
        try {
            UserSchema.findOneAndUpdate(
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
    return new Promise((resolve,reject)=>{
        try {
            UserSchema.findOneAndUpdate(
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
    return new Promise((resolve,reject)=>{
        try {
            UserSchema.findByIdAndUpdate(
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
