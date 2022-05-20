const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack2');

const objetodb =mongoose.connection

objetodb.on('connected',()=>{
    console.log('conexion correcta a mongoDB')
})

objetodb.on('error',()=>{
    console.log('Error en conexion a mongoDB')
})
//Exporto el obojeto de conexion mongoose
module.exports=mongoose