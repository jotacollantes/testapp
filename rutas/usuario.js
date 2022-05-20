const express=require('express')
const router=express.Router()

const mongoose =require('mongoose')
const eschema=mongoose.Schema

const eschemausuario= new eschema(
    {
        nombre: String,
        email: String,
        telefono: String,
        idusuario: String
    }
)

const ModelUsuario =mongoose.model('usuarios',eschemausuario)
//Hay que exportar el objeto router para que server.js lo pueda usar
module.exports=router

// router.get('/ejemplo',(req,res)=> {
//     res.end('Saludo carga desde ruta ejemplo')
// })



//Para Grabar en el modelo usuario
router.post('/agregarusuario',(req,res)=> {
    const nuevousuario = new ModelUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario

    })

    nuevousuario.save(function(err){
        // Si no hay error
        if(!err)
        { 
            res.send('Usuario agregado con exito')
        }
        else
        {
            res.send(err)
        }

    })
})

//Ruta para obtener Usuarios
router.get('/obtenerusuarios',(req,res)=> {
    ModelUsuario.find({},function(docs,err){
        if(!err) {
            res.send(docs)
        } 
        else {
            res.send(err)
        }
    })
})


//Ruta para obtener datos de usuarios individuales

router.post('/obtenerdatausuario',(req,res)=> {
    ModelUsuario.find({idusuario: req.body.idusuario},function(docs,err){
        if(!err) {
            res.send(docs)
        } 
        else {
            res.send(err)
        }
    })
    
})

//Para Actualizar en el modelo usuario
router.post('/actualizausuario',(req,res)=> {
    ModelUsuario.findOneAndUpdate({idusuario: req.body.idusuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono},
        (err) =>{
            if(!err)
            {
                res.send('Usuario actualizado')
            }
            else
            {
                res.send(err)
            }
        }
        )
})


//Para borrar el usuario
router.post('/borrarusuario',(req,res)=> {
    ModelUsuario.findOneAndDelete({idusuario: req.body.idusuario},(err) =>{
            if(!err)
            {
                res.send('Usuario eliminado')
            }
            else
            {
                res.send(err)
            }
        }
        )
})


