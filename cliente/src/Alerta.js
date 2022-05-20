import Swal from 'sweetalert2'
function Alerta() 
{
   
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
       return(
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      }))
}
export default Alerta