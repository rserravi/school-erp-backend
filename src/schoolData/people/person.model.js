const { default: mongoose } = require("mongoose");
const {PersonSchema} = require("./person.schema");

const insertPerson = async (personObj, database) => {

   const dbConnection = await global.clientConnection
   const db = await dbConnection.useDb(database)
   const Person =  await db.model('person', PersonSchema)

   return new Promise((resolve, reject)=>{
             
    Person(personObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};

const getAllPeople = async (database)=>{
   const dbConnection = await global.clientConnection
   const db = await dbConnection.useDb(database)
   const Person =  await db.model('person', PersonSchema)

   return new Promise((resolve, reject)=>{
      try {
         Person
         .find()           
         .then((data)=>resolve(data))
         .catch((error)=> reject(error));
     } catch (error) {
         console.log("ERROR EN GET ALL PEOPLE", error)
         reject(error);
     }
   })
}

const getPeopleWithFilter = async (database, filter)=>{
   const dbConnection = await global.clientConnection
   const db = await dbConnection.useDb(database)
   const Person =  await db.model('person', PersonSchema)

   return new Promise((resolve, reject)=>{
      try {
         Person
         .find({'type': filter})           
         .then((data)=>resolve(data))
         .catch((error)=> reject(error));
     } catch (error) {
         console.log("ERROR EN GET PEOPLE WITH FITLER", error)
         reject(error);
     }
   })
}

 
module.exports = {
   insertPerson,
   getAllPeople,
   getPeopleWithFilter
};
