import React from 'react';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

const loginHandler = (props) => {
  Swal.fire({
    icon: props.icon,
    title: props.title,
    text: props.text,
    confirmButtonText: 'Ok',
    confirmButtonColor: '#3DCC67',
  });
};

const redirectAlert = (props) => {
  Swal.fire({
    icon: props.icon,
    title: props.title,
    text: props.text,
    confirmButtonText: 'Ok',
    confirmButtonColor: '#3DCC67',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = props.redirect;
    }
  });
};
const testeAlert = () => {
  Swal.fire({
    icon: 'success',
    title: 'Sucesso',
    text: 'Teste de alert',
    confirmButtonText: 'Ok',
  });
};
const loadingAlert = () => {
  Swal.fire({
    title: 'Aguarde...',
    text: 'Estamos processando sua solicitação',
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

const exitConfirmation = (props) => {
  Swal.fire({
    title: 'Tem certeza que deseja sair?',
    text: 'Você será redirecionado para a página Principal',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3DCC67',
    cancelButtonColor: '#E62822',
    confirmButtonText: 'Sim, sair!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = props.redirect;
    }
  });
};

export {
  loginHandler,
  loadingAlert,
  testeAlert,
  redirectAlert,
  exitConfirmation,
};
