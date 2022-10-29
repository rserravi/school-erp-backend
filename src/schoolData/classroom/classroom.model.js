const {ClassroomSchema} = require("./classroom.schema")

 
const insertClassroom = async (classroomObj, database) => {

   const dbConnection = await global.clientConnection
   const db = await dbConnection.useDb(database)
   const Classroom =  await db.model('classroom', ClassroomSchema)

   return new Promise((resolve, reject)=>{
      Classroom(classroomObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};

 
module.exports = {
    insertClassroom};
