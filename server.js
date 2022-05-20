const express = require('express')
const app = express()

//Importar Conexion mongoDB
const archivoBD=require('./conexion')

//Importacion del Archivo de rutas y modelo de usario
const rutausuario=require('./rutas/usuario')


//Importar y configurar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario',rutausuario)

//Configurar server basico
app.get('/',(req,res)=>{
    res.end('Bienvenidos al servidor backend Node.js')
})
app.listen(3001,function(){
    console.log('Server Node MONGO Backend Up...')
})
