import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Alerta from './Alerta'

//Se recibe como parametro el usuario enviado desde el componente <ListaUsuarios />
function UsuarioIndividual({usuario}) 
{
    
     //Para regresar al index
    const navegar=useNavigate()
    
    
    //Funcion para borrar usuario
    function borrarusuario(idusuario){
        
        axios.post('/api/usuario/borrarusuario',{idusuario: idusuario})
        .then(res => {
            //console.log(res.data)
            console.log('Entro por aqui en delee')
            //alert(res.data)
            Alerta('User deleted successfully' ) 
            //Se redirecciona a la misma pagina
            navegar(0)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
     
    


    <div className='container' >
        <div className='row' > 
            {/* <div className='col-sm-2 offset-3'> */}

            <div className='col-sm-2'>
            
            {usuario.idusuario}
            </div>
            <div className='col-sm-2 '>

            {usuario.nombre}
            </div>
            <div className='col-sm-2 '>

            {usuario.email}
            </div>
            <div className='col-sm-2 '>

            {usuario.telefono}
            </div>

            <div className='col-sm-2 '>
                {/* <button className='btn btn-success'>Editar</button> */}
                <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-dark'>Edit</li></Link>
                &nbsp;
                <button className='btn btn-light' onClick={()=>{borrarusuario(usuario.idusuario)}}>Delete</button>
            </div>
                {/* <ul className='list-group'>
                    <li className='list-group-item'>{usuario.idusuario}</li>
                    <li className='list-group-item'>{usuario.nombre}</li>
                    <li className='list-group-item'>{usuario.email}</li>
                    <li className='list-group-item'>{usuario.telefono}</li>
                </ul>
                <button className='btn btn-success'>Editar</button>
                <button className='btn btn-danger'>Borrar</button>
                <hr className='mt-4'></hr> */}
            
            

        </div>
        <hr className='mt-4'></hr>
    </div>
 

    )
}
export default UsuarioIndividual