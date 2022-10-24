import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const noImage = () => toast.warn("Insira uma Foto de perfil! ", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
    });
const noCamps = (props) => toast.warn('preencha todos os campos!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
    });

function AlertSH (props) {
    Swal.fire({
        title: props.title,
        icon: props.icon,
        confirmButtonText: props.buttonText,
        })

}

function Loading (props ) {
    Swal.fire({
        title: 'Carregando...',
        allowOutsideClick: false,
        didOpen: (props) => {
            Swal.showLoading()
        }
    })


}


 
export {noImage , noCamps, AlertSH, Loading}; 