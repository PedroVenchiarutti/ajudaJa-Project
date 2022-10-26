import React from "react";
import TextField from '@mui/material/TextField';




export const inputText = ({info, handleChange, type, label, onKeyUp,placeholder, readOnly, id }) => { 
    
    return(
        
            <TextField type={type} value={info} onChange={handleChange} id={'"standard-basic"' || id} label={label} color="success"  variant="standard" placeholder={placeholder} onKeyUp={onKeyUp} InputProps={{ style: { fontFamily: 'DM Sans', label: 'white', },readOnly: readOnly}} InputLabelProps={{style: {fontFamily: 'DM Sans', color: '#495057'}}}/>
        
    )
}



export default inputText
