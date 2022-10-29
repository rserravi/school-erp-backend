const { default: mongoose } = require("mongoose");
const {EquipmentSchema} = require("./equipment.scheme");

const insertEquipment = async (equipmentObj, database) => {

   const dbConnection = await global.clientConnection
   const db = await dbConnection.useDb(database)
   const Equip =  await db.model('equipment', EquipmentSchema)

   return new Promise((resolve, reject)=>{
             
      Equip(equipmentObj)
       .save()
       .then(data => resolve(data))
       .catch(error => reject(error))
   })
};

 
module.exports = {
   insertEquipment
};
