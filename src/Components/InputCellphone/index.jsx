import React from 'react';
// import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});




export default function FormattedInputs({label, value, onChange}) {


  return (
  
      <FormControl variant="standard" color='success'>
        <InputLabel sx={{fontFamily:'DM Sans'}} htmlFor="formatted-text-mask-input">{label}</InputLabel>
        <Input
        sx={{fontFamily:'DM Sans'}}
          value={value}
          onChange={onChange}
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
  
  );
}
