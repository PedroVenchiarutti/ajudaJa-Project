import { useState, useEffect } from 'react';

const useValidation = (schema, data) => {
  const [errors, setErrors] = useState({});
  const [newErrors, setNewErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log('newData', newData);

  const isValidate = schema
    .validate(data)
    .then((valid) => {
      console.log(valid);
    })
    .catch((err) => {
      console.log(err);
      setNewErrors(err);
    });

  return {isValidate, newErrors} 

  // useEffect(() => {
  //   const isValid = schema
  //     .validate(data)
  //     .then((response) => {
  //       setErrors({});
  //       setIsSubmitting(true);
  //     })
  //     .catch((err) => {
  //       setErrors({
  //         [err.path]: err.message,
  //       });
  //       setIsSubmitting(false);
  //     });
  // }, [data]);
};
export default useValidation;
