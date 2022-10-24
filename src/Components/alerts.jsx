import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast("Wow so easy !");

const testeAlert = (props) => {
    Swal.fire({
        icon: props.icon,
        title: props.title,
        text: props.text,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#3DCC67',
      })
    }

function noImage() {

    toast.warn("Insira uma Foto de perfil! ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
    });
}

export {notify, noImage, testeAlert}
