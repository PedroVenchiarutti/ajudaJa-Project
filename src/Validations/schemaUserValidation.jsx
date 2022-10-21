import { useState } from 'react';
import * as yup from 'yup';

const schemaValidation = yup.object().shape({
  firstName: yup.string().required('O primeiro nome e obrigatorio'),
  lastName: yup.string().required('O segundo name e obrigatorio'),
})

export default schemaValidation;
