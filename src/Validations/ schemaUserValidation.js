import * as yup from 'yup';

let schemaValidation = yup.object().shape({
  lastName: yup.string().required('O segundo nome e obrigatorio'),
  firstName: yup.string().required('O primeiro nome e obrigatorio'),
});

export default schemaValidation;