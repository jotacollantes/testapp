import axios from 'axios'
import React,{useEffect, useState} from 'react'
import UsuarioIndividual from './UsuarioIndividual'

function ListaUsuarios() 
{
        //Hooks de react para capturar los valores de los usuarios,es tipo arreglo
        const[datausuarios,setdatausuario]=useState([])

        useEffect(() => {
            axios.get('api/usuario/obtenerusuarios').then(
                res => {
                    console.log(res.data)
                    setdatausuario(res.data)
                }).catch(err =>{
                    console.log(err)
                })
        },[])
    //Mapear lista de usuario en objeto usuario
    const listausuarios=datausuarios.map(usuario => {
        return(
            <div>
                {/* enviamos el objeto usuario al parametro usuario del componente <UsuarioIndividual/> */}
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )

    }

    )
     
     return(<div>
         <br/>
        <h2>Users</h2>
        <br/>



        <div className='container'>
        <div className='row'>
            

            <div className='col-sm-2'>
            
            ID
            </div>
            <div className='col-sm-2 '>

            Name
            </div>
            <div className='col-sm-2 '>

            Email
            </div>
            <div className='col-sm-2 '>

            Phone
            </div>

            <div className='col-sm-2 '>
               Action
            </div>
                
            
            

        </div>
        <hr className='mt-4'></hr>
</div>





        
        {/* Mostramos la lista de usuarios que esta cargada en la constante listausuarios */}
        {listausuarios}
    </div>)
}
export default ListaUsuarios