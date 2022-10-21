import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function InputDate({date, handleChange}) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Data de Nascimento"
        inputFormat='DD/MM/YYYY'
        value={date}
        onChange={handleChange}
        renderInput={(params) => <TextField id="standard-basic" variant="standard" color='success' {...params}  InputLabelProps={{style: {fontFamily: 'DM Sans', color: '#495057'}}} />}
      />
    </LocalizationProvider>
  );
}
