import { MenuItem, Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';

export default function Options(props) {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="Age"
          onChange={props.onChange}
        >
          <MenuItem value="Nenhum">Nenhum</MenuItem>
          <MenuItem value="">Alergia a camarão</MenuItem>
          <MenuItem value={30}>Amnézia</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
