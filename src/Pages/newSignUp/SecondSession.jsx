import React, { useState } from "react";
import { InputLabel } from '@mui/material';
import { NativeSelect } from '@mui/material';
import RowRadioButtonsGroup from '../../Components/Radio';

import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


const SecondSession = ({onChangeFirstName, onChangeLastName, children, methodHandleClick, onClickBackToRegister, changeGender, onChangeHelthInsurance }) => { 
    const {register, formState: {errors}} = useFormContext()
    const [visible, setVisible] = useState(false);

    return (
        <>
                <TextField
                  color="success"
                  aria-describedby="outlined-weight-helper-text"
                  error={Boolean(errors.firstName)}
                  {...register('firstName', {
                    required: 'Esse campo é obrigatório',
                    onChange: onChangeFirstName,
                    minLength: {
                      value: 3,
                      message: 'Mínimo de 3 caracteres',
                    },
                  })}
                  helperText={errors.firstName?.message}
                  variant="standard"
                  fullWidth
                  label="Insira seu primeiro nome"
                  sx={{
                    fontFamily: 'DM Sans',
                  }}
                  InputLabelProps={{
                    style: { fontFamily: 'DM Sans', color: '#495057' },
                  }}
                />

                <TextField
                  color="success"
                  label="Insira seu sobrenome"
                  aria-describedby="outlined-weight-helper-text"
                  fullWidth
                  variant="standard"
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName?.message}
                  {...register('lastName', {
                    required: 'sobrenome é obrigatório',
                    onChange: onChangeLastName,
                  })}
                  sx={{
                    fontFamily: 'DM Sans',
                  }}
                  InputLabelProps={{
                    style: { fontFamily: 'DM Sans', color: '#495057' },
                  }}
                />

                  {children}

                  <RowRadioButtonsGroup handleChange={changeGender} /> 

                  <InputLabel sx={{
              fontFamily: 'DM Sans',
            }} variant="standard" htmlFor="uncontrolled-native">
                  Você possue convenio médico?
                </InputLabel>
                <NativeSelect
                  defaultValue={visible}
                  inputProps={{
                    name: 'Convênio',
                    id: 'uncontrolled-native',
                  }}
                  onChange={(e) => {
                    setVisible(e.target.value);
                  }}
                >
                  <option className="font-primary" value={false}>Não</option>
                  <option className="font-primary" value={true}>Sim</option>
                </NativeSelect>
                {visible === 'true' && (
                  <TextField
                    color="success"
                    label="Insira o nome do seu convenio"
                    aria-describedby="outlined-weight-helper-text"
                    fullWidth
                    variant="standard"
                    error={Boolean(errors.helthInsurance)}
                    helperText={errors.helthInsurance?.message}
                    {...register('helthInsurance', {
                      required: 'O nome do convenio é obrigatório',
                      onChange: onChangeHelthInsurance,
                    })}
                    sx={{
                      fontFamily: 'DM Sans',
                    }}
                    InputLabelProps={{
                      style: { fontFamily: 'DM Sans', color: '#495057' },
                    }}
                  />
                )}

                  <div className="">
                  <button
                    onClick={methodHandleClick}
                    className="my-4 mt-[-10px] mb-5 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "
                  >
                    Finalizar Cadastro
                  </button>
                  <a
                    onClick={onClickBackToRegister}
                    className=" flex items-center hover:cursor-pointer text-sm hover:text-navFontColor"
                  >
                    <ArrowLeftIcon />
                    Voltar
                  </a>
                </div>
              
                </>
    )
}

export default SecondSession