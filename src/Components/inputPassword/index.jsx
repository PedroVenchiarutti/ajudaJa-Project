import React from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import { fontFamily, style } from "@mui/system";

const Password = ({titleLabel, type, value, onChange, onClick, onMouseDown, visibility, onKeyUp}) => { 

    return (
      <FormControl   variant="standard">
  
      <InputLabel sx={{fontFamily: 'DM Sans'}}  htmlFor="standard-adornment-password">{titleLabel}</InputLabel>
      <Input
        inputProps={{style: {fontFamily: 'DM Sans'}}}
          id="standard-adornment-password"
          type={type}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          endAdornment={
          <InputAdornment position="end">
              <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={onMouseDown}
              >
              {visibility ? <VisibilityOff /> : <Visibility />}
              </IconButton>
          </InputAdornment>
          }
      />
      </FormControl>
    )
  
  }
  
  export default Password