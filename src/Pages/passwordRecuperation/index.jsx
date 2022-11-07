import React, { useState } from 'react';
import InputPassword from '../../Components/inputPassword';
import { useLocation } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import Api from '../../Api/api';

const passwordRecuperation = () => {
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
    showPassword: false,
    showNewPassword: false,
  });
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const token = location.search.split('=')[1];

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setValues({
      ...values,
      [prop]: !values[prop],
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleButton = (e) => {
    if (values.password != values.newPassword) {
      setFail(true);
      setSuccess(false);
      return;
    }

    Api.post(
      '/private/recovery',
      {
        password: values.password,
        passwordConfirmation: values.newPassword,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    ).catch((error) => {
      console.log(error);
    });
  };

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return handleButton(e);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white">
      <Fade bottom>
        <div className="p-10">
          <div
            className={
              success || fail
                ? 'box bg-[#fff] w-[370px] lg:w-[450px] md:w-[370px] md:mx-auto md:h-[400px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10'
                : 'box bg-[#fff] w-[370px] lg:w-[450px] md:w-[370px] md:mx-auto md:h-[380px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10'
            }
          >
            {fail ? (
              <div className="bg-[red] p-2 rounded-sm">
                <h1 className="font-bold text-white">SENHA NÃO COMPATÍVEL</h1>
              </div>
            ) : null}
            {success ? (
              <div className="bg-navFontColor p-2 rounded-sm">
                <h1 className="font-bold text-white">
                  SENHA ALTERADA COM SUCESSO
                </h1>
              </div>
            ) : null}
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">
                Recuperação de senha. Informe sua nova senha:{' '}
              </h1>
            </div>

            <InputPassword
              titleLabel="Nova senha"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              onClick={handleClickShowPassword('showPassword')}
              onMouseDown={handleMouseDownPassword}
              visibility={values.showPassword}
              onKeyUp={keyHandler}
            />

            <InputPassword
              titleLabel="Repita a senha"
              type={values.showNewPassword ? 'text' : 'password'}
              value={values.newPassword}
              onChange={handleChange('newPassword')}
              onClick={handleClickShowPassword('showNewPassword')}
              onMouseDown={handleMouseDownPassword}
              visibility={values.showNewPassword}
              onKeyUp={keyHandler}
            />

            <div className="">
              <button
                onClick={handleButton}
                className="my-4 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "
              >
                Mudar de senha
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default passwordRecuperation;
