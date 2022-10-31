import React from 'react';
import TextField from '@mui/material/TextField';

export const inputText = ({
  info,
  handleChange,
  type,
  label,
  onKeyUp,
  placeholder,
  id,
  error,
  helperText
}) => {
  return (
    <TextField
      type={type}
      error={error}
      helperText={helperText}
      value={info}
      onChange={handleChange}
      id={'standard-basic'}
      label={label}
      color="success"
      variant="standard"
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      InputProps={{ style: { fontFamily: 'DM Sans', label: 'white' } }}
      InputLabelProps={{ style: { fontFamily: 'DM Sans', color: '#495057' } }}
    />
  );
};

export default inputText;
