const { default: mongoose } = require("mongoose");
const {SubjectSchema} = require("./subject.schema");

const insertSubject = async (subjectObj, database) => {

   const dbConnection = await global.clientConnection
   const db = await dbConnection.useDb(database)
   const Subject =  await db.model('subject', SubjectSchema)

   return new Promise((resolve, reject)=>{
             
    Subject(subjectObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};

 
module.exports = {
    insertSubject
};
