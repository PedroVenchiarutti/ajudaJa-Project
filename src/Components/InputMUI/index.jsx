import React from "react";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";


const InputMUI = ({label, error, helperText}) => { 
  

    return (
        <TextField
        aria-describedby="outlined-weight-helper-text"
        error={error}
        color="success"
        helperText={helperText}
        variant="standard"
        fullWidth
        sx={{
            fontFamily: 'DM Sans',
        }}
        InputLabelProps={{
            style: { fontFamily: 'DM Sans', color: '#495057' },
        }}
        label={label}
        
        />
    )
}

export default InputMUI