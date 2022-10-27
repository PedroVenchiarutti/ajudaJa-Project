import React from "react";
import TextField from '@mui/material/TextField';



export const inputText = ({ txt, help, err, info, handleChange, type, label, onKeyUp}) => { 
    
    return(
        
            <TextField error={err} type={type} value={info} helperText={txt} onChange={handleChange} id="standard-basic" label={label} color="success" variant="standard"  onKeyUp={onKeyUp} InputProps={{ style: { fontFamily: 'DM Sans', label: 'white' }}} InputLabelProps={{style: {fontFamily: 'DM Sans', color: '#495057'}}}/>
        
    )
}



export default inputText

