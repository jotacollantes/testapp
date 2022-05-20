import React,{useState} from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
// import Alerta from './Alerta'

function AgregarUsuario() 
{
    //Hooks de react para capturar los valores de los inputs
    const[nombre,setNombre]=useState('')
    const[email,setEmail]=useState('')
    const[telefono,setTelefono]=useState('')
    //Para regresar al index
   
    const navegar=useNavigate()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    function agregarUsuario()
    {
        var usuario={
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }
        //console.log(usuario)

        axios.post('/api/usuario/agregarusuario',usuario)
        .then(res => {
            //alert(res.data)
            // Swal.fire('Titulo','The user was created')
            Toast.fire({
                icon: 'success',
                title: 'User created successfully'
              })
            navegar('/')
        })
        .then(err => {
            console.log(err)
        })
    }
    return(
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Add new user</h2>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    
                    <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>Name</label>
                    
                    <input type='text' className='form-control' value={nombre} onChange={(e)=>{
                        setNombre(e.target.value)
                    }} required="required"></input>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required></input>
                    </div> 
                    <div className='mb-3'>
                    <label htmlFor='telefono' className='form-label'>Phone</label>
                    <input type='number'  className='form-control' value={telefono} onChange={(e)=>{
                        setTelefono(e.target.value)
                    }} ></input>
                    </div>
                    <Link to={`/`}><li className='btn btn-dark'>Back</li></Link>
                &nbsp;
                    <button onClick={agregarUsuario} className='btn btn-dark'>Save</button>
                    

                </div>
            </div>

        
        
        </div>
        )
}
export default AgregarUsuario