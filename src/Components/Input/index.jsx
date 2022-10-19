import React from "react";
import TextField from '@mui/material/TextField';



const Input = ({info, handleChange, type, label}) => { 
    
    return(
        
            <TextField type={type} value={info} onChange={handleChange} id="standard-basic" label={label} color="success" variant="standard" InputProps={{ style: { fontFamily: 'DM Sans', label: 'white' }}} InputLabelProps={{style: {fontFamily: 'DM Sans', color: '#495057'}}}/>
        
    )
}

export default Input

