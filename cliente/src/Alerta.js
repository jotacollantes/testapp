import Swal from 'sweetalert2'
function Alerta(mensaje) 
{
    console.log(mensaje)
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
       return(<div>
         {Toast.fire({
                icon: 'success',
                title: mensaje
              })}
       </div>
      )
}
export default Alerta