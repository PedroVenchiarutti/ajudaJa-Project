import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Box} from '@mui/material'

export default function RowRadioButtonsGroup({handleChange}) {
  return (
    <FormControl>
      <FormLabel color="success" id="demo-row-radio-buttons-group-label" sx={{fontSize:'14px', fontFamily:'DM Sans'}} >Gênero</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="F"
        onChange={handleChange}
        
      >
        <FormControlLabel sx={ {fontFamily: 'DM Sans'}} value={'F'} control={<Radio size="small" color="success" />}  label={ <Box component="div" fontSize={14} fontFamily={'DM Sans'}>
                Feminino
              </Box>} />
        <FormControlLabel  value={'M'} control={<Radio size="small" color="success"  />} label={ <Box component="div" fontSize={14}>
                Masculino
              </Box>} />
        
      </RadioGroup>
    </FormControl>
  );
}
