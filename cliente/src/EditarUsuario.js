import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Alerta from './Alerta'
function EditarUsuario() 
{
    const params =useParams()
    //Hooks de react para capturar los valores de los inputs
    const[nombre,setNombre]=useState('')
    const[email,setEmail]=useState('')
    const[telefono,setTelefono]=useState('')
    const navegar=useNavigate()

    useEffect(()=>{
        
        axios.post('/api/usuario/obtenerdatausuario',{idusuario: params.idusuario})
        .then(res => {
            //alert(res.data)
            //console.log(res.data[0])
            //Para Capturar los datos de la consulta debo de declarar una const
            const datausuario=res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
            
        })
        .then(err => {
        console.log(err)
        })

      },[])
       
    function editarUsuario()
    {
        const actualizarusuario={
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }
        //console.log(actualizarusuario)
        //Hacer peticion via axios
        axios.post('/api/usuario/actualizausuario',actualizarusuario)
        .then(res => {
            //console.log(res.data)
            //alert(res.data)
            //Swal.fire('Titulo','The user was updated')
            Alerta('User Upated successfully' ) 
            navegar('/')
        })
        .then(err => {
            console.log(err)
        })
    }

    return(
        <div className='container'>
        <div className='row'>
            <h2 className='mt-4'>Editar Usuario</h2>
        </div>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type='text' className='form-control' value={nombre} onChange={(e)=>{
                    setNombre(e.target.value)
                }}></input>
                </div>
                <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' className='form-control' value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}></input>
                </div> 
                <div className='mb-3'>
                <label htmlFor='telefono' className='form-label'>Phone</label>
                <input type='text' className='form-control' value={telefono} onChange={(e)=>{
                    setTelefono(e.target.value)
                }}></input>
                </div>
                <Link to={`/`}><li className='btn btn-dark'>Back</li></Link>
                &nbsp;
                <button onClick={editarUsuario} className='btn btn-light'>Save</button> 
            </div>
        </div>
</div>
    )

}
export default EditarUsuario