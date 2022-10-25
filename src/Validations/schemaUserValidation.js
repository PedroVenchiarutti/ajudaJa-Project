import * as yup from 'yup';

let schemaValidation = yup.object().shape({
  lastName: yup.string().required('O segundo Nome e obrigatorio'),
  firstName: yup.string().required('O primeiro Nome e obrigatorio'),
  email: yup.string().email('Email invalido').required('O email e obrigatorio'),
  password: yup.string().required('A senha e obrigatoria'),
  date: yup.string().required('A data e obrigatoria'),
  emergencyNumber: yup.string().required('O numero de emergencia e obrigatorio'),
});

export let schemaValidation2 = yup.object().shape({
  userName: yup.string().required('O nome de usuario e obrigatorio'),  
  email: yup.string().email('Email invalido').required('O email e obrigatorio'),
  password: yup.string().required('A senha e obrigatoria'),
  confirmPassword: yup.string().required('A confirmacao de senha e obrigatoria'),
});

export default schemaValidation;
