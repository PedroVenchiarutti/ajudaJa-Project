import { NativeSelect, Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';

export default function Options({ value, onChange }) {
  return (
    <>
      <FormControl fullWidth>
        <NativeSelect
          labelId="demo-simple-select-standard-label"
          color="success"
          variant="standard"
          id="demo-simple-select-standard"
          placeholder="Selecione"
          value={value}
          onChange={onChange}
        >
          <option value="Selecione">Selecione</option>
          <option value="Nenhuma">Nenhuma</option>
          <option value="Alergia a camarão">Alergia a camarão</option>
          <option value="Amnésia">Amnésia</option>
          <option value="Anemia">Anemia</option>
          <option value="Aids">Aids</option>
          <option value="Asma">Asma</option>
        </NativeSelect>
      </FormControl>
    </>
  );
}
