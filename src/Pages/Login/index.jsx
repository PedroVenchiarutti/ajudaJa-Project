import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import logo from '/images/logo-v2.png';
import Fade from 'react-reveal/Fade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Input from '../../Components/TextField';
import Api from '../../Api/api';
import { loadingAlert } from '../../Components/Alerts';
import { Link } from 'react-router-dom';


const FormLogin = ({ goToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticated, login } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    loadingAlert();
  };

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return handleSubmit(e);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const newPassword = (e) => {
    Api.post('/public/recovery', { email: email }).then((response) => {});
    alert('Veja sua caixa de entrada');
    setSuccess(false);
    setEmail('');
  };

  const newPasswordKey = (e) => {
    if (e.key === 'Enter') {
      return newPassword(e);
    }
  };

  return (
    <>
      <div className="w-[100w] h-[100vh] bg-gradient-to-t from-navFontColor to-firstSessionFontColor  md:from-white md:to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh]">
          <div className="hidden md:flex justify-center  bg-gradient-to-t from-navFontColor to-firstSessionFontColor drop-shadow-lg pl-10 ">
            <Fade left>
              <div className="flex items-center justify-center">
                <h2 className="font-bold lg:text-5xl drop-shadow-md text-5xl  text-white xl:text-7xl xl:leading-[80px] ">
                  Saia de casa <br />
                  <span className="font-normal">
                    sem se <br /> preocupar com
                  </span>
                  <br />
                  <span className="xl:text-8xl font-bold  text-[#9EFFBB] ">
                    o amanhã!
                  </span>
                </h2>
              </div>
            </Fade>
          </div>
          {success ? null : (
            <Fade right>
              <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[390px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-bold">
                    Bem-vindo, faça seu login!
                  </h1>
                  <Link to="/">
                    <img className="w-[120px]" src={logo} alt="" />
                  </Link>
                </div>
                <Input
                  label="Insira seu email"
                  type="email"
                  info={email}
                  onKeyUp={keyHandler}
                  handleChange={handleChangeEmail}
                />
                <Input
                  label="Insira sua senha"
                  type="password"
                  info={password}
                  onKeyUp={keyHandler}
                  handleChange={handleChangePassword}
                />
                <div className="">
                  <a
                    onClick={(e) => setSuccess(true)}
                    className="hover:underline text-sm"
                  >
                    Esqueceu sua senha?
                  </a>
                  <button
                    onClick={handleSubmit}
                    className="my-4 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "
                  >
                    Entrar
                  </button>
                  <Link className="hover:underline" to="/register">
                    Não tem cadastro? <strong>Cadastre-se agora!</strong>
                  </Link>
                </div>
              </div>
            </Fade>
          )}

          {success ? (
            <Fade right>
              <div className="box bg-[#fff] w-[370px]  md:w-[370px] md:mx-auto lg:w-[500px]  h-[340px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-bold">Recupere sua senha</h1>
                  <Link to="/">
                    <img className="w-[120px]" src={logo} alt="" />
                  </Link>
                </div>
                <p>Coloque seu e-mail cadastrado</p>
                <Input
                  type="email"
                  info={email}
                  onKeyUp={newPasswordKey}
                  handleChange={handleChangeEmail}
                  label="Insira seu e-mail"
                />

                <div className="">
                  <button
                    onClick={newPassword}
                    className="my-4 mb-7 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "
                  >
                    Recuperar Senha
                  </button>
                  <a
                    onClick={(e) => setSuccess(false)}
                    className=" hover:underline text-md"
                  >
                    <ArrowLeftIcon />
                    Voltar
                  </a>
                </div>
              </div>
            </Fade>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FormLogin;
