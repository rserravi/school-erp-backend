const {UserScheme} = require("./User.scheme");
 
const insertUser = userObj => {
   return new Promise((resolve, reject)=>{
       UserScheme(userObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};
 
module.exports = {
   insertUser,
};
