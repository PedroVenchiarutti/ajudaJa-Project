import React from "react";
import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';


const FirstSession = ({ onChangeUsername, onChangeEmail, onChangePassword, onChangeConfirmPassword}) => { 

    const {register, formState: {errors}} = useFormContext()

    return (
        <>
            <TextField
            aria-describedby="outlined-weight-helper-text"
            color="success"
            variant="standard"
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            fullWidth
            sx={{
              fontFamily: 'DM Sans',
            }}
            InputLabelProps={{
              style: { fontFamily: 'DM Sans', color: '#495057' },
            }}
            label='Nome de usuário'
            {...register('username', {
                required: 'Esse campo é obrigatório',
                onChange: onChangeUsername,
                minLength: {
                  value: 3,
                  message: 'Mínimo de 3 caracteres',
                },
              })}
                  />

                <TextField
                    color="success"
                    label="Email"
                    aria-describedby="outlined-weight-helper-text"
                    fullWidth
                    variant="standard"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    {...register('email', {
                      required: 'Email é um campo obrigatório',
                      onChange: onChangeEmail,
                    })}
                    sx={{
                      fontFamily: 'DM Sans',
                      marginTop: '10px',
                    }}
                    InputLabelProps={{
                      style: { fontFamily: 'DM Sans', color: '#495057' },
                    }}
                  />
                  <TextField
                    color="success"
                    id="standard-basic"
                    type="password"
                    label="Senha"
                    variant="standard"
                    fullWidth
                    {...register('password', {
                      required: 'A senha é obrigatória.',
                      minLength: {
                        value: 6,
                        message: 'Mínimo de 6 caracteres',
                      },
                      onChange: onChangePassword ,
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    sx={{
                      fontFamily: 'DM Sans',
                      marginTop: '10px',
                    }}
                  />

                  <TextField
                    id="standard-basic"
                    color="success"
                    label="Confirme sua senha"
                    variant="standard"
                    type="password"
                    fullWidth
                    {...register('confirmPassword', {
                      required: 'A confirmação de senha é obrigatória.',
                      onChange: onChangeConfirmPassword,
                    })}
                    sx={{
                      fontFamily: 'DM Sans',
                      marginTop: '10px',
                    }}
                    InputLabelProps={{
                      style: { fontFamily: 'DM Sans', color: '#495057' },
                    }}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword?.message}
                  /> 
        </>
    )
}

export default FirstSession

