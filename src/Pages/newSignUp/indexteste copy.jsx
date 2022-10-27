import React, { useState, useEffect, useRef } from 'react';
import logo from '/images/logo-v2.png';
import Fade from 'react-reveal/Fade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Input from '../../Components/TextField';
import InputDate from '../../Components/InputDate/';
import RowRadioButtonsGroup from '../../Components/Radio';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { loadingAlert, loginHandler } from '../../Components/alerts';
import Api from '../../Api/api';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { storage } from '../../Api/api';
import Swal from 'sweetalert2';

const newSignUp = ({ backToLogin }) => {
  const [date, setDate] = useState();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    username: '',
    email: '',
    gender: '',
    emergencyNumber: '',
  });

  const [success, setSuccess] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [errMsgPsw, setErrMsgPsw] = useState('');
  const [errMsgPswConfirm, setErrMsgPswConfirm] = useState('');
  const [errMsgEmail, setErrMsgEmail] = useState('');
  const [errMsgUsername, setErrMsgUsername] = useState('');
  const [errMsgFirstName, setErrMsgFirstName] = useState('');
  const [errMsgLastName, setErrMsgLastName] = useState('');
  const [errMsgEmergencyNumber, setErrMsgEmergencyNumber] = useState('');
  const [errMsgDate, setErrMsgDate] = useState('');
  const [preview, setPreview] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [errPsw, setErrPsw] = useState(false);
  const [errPswConfirm, setErrPswConfirm] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errUsername, setErrUsername] = useState(false);
  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState(false);
  const [errEmergencyNumber, setErrEmergencyNumber] = useState(false);
  const [errDate, setErrDate] = useState(false);
  const [msgErr, setMsgErr] = useState({
    password: '',
    confirmPassword: '',
    email: '',
    username: '',
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (imageUpload) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUpload);
    } else {
    }
  }, [imageUpload]);

  function validation() {
    if (user.password === '') {
      setErrPsw(true);
      setErrMsgPsw('A senha é obrigatória');
    } else if (user.password !== '') {
      setErrPsw(false);
      setErrMsgPsw('');
    }
    if (user.confirmPassword === '') {
      setErrPswConfirm(true);
      setErrMsgPswConfirm('A confirmação de senha é obrigatória');
    } else if (user.confirmPassword !== '') {
      setErrPswConfirm(false);
      setErrMsgPswConfirm('');
    }
    if (user.email === '') {
      setErrEmail(true);
      setErrMsgEmail('O email é obrigatório');
    } else if (user.email !== '') {
      setErrEmail(false);
      setErrMsgEmail('');
    }
    if (user.username === '') {
      setErrUsername(true);
      setErrMsgUsername('O nome de usuário é obrigatório');
    } else if (user.username !== '') {
      setErrUsername(false);
      setErrMsgUsername('');
    }
    if (
      user.password == user.confirmPassword &&
      user.confirmPassword !== '' &&
      user.password !== '' &&
      user.email !== '' &&
      user.username !== ''
    ) {
      setSuccess(true);
    }
  }

  function validateSecondScreen() {
    if (user.firstName === '') {
      setErrFirstName(true);
      setErrMsgFirstName('O nome é obrigatório');
    } else if (user.firstName !== '') {
      setErrFirstName(false);
      setErrMsgFirstName('');
    }
    if (user.lastName === '') {
      setErrLastName(true);
      setErrMsgLastName('O sobrenome é obrigatório');
    } else if (user.lastName !== '') {
      setErrLastName(false);
      setErrMsgLastName('');
    }
    if (user.emergencyNumber === '') {
      setErrEmergencyNumber(true);
      setErrMsgEmergencyNumber('O número de emergência é obrigatório');
    } else if (user.emergencyNumber !== '') {
      setErrEmergencyNumber(false);
      setErrMsgEmergencyNumber('');
    }
    if (date === '') {
      setErrDate(true);
      setErrMsgDate('A data de nascimento é obrigatória');
    } else if (date !== '') {
      setErrDate(false);
      setErrMsgDate('');
    }
    if (user.password !== user.confirmPassword) {
      setErrPswConfirm(true);
      setErrMsgPswConfirm('As senhas não coincidem');
    }
    if (
      user.firstName !== '' &&
      user.lastName !== '' &&
      user.emergencyNumber !== '' &&
      date !== ''
    ) {
      uploadImage();
    }
  }

  const uploadImage = () => {
    if (preview == null) {
      console.log('sajin');
    } else {
      if (imageUpload == null) return;
      loadingAlert();
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(imageRef).then((url) => {
          setImgUrl(url);
          console.log(url);
          handleSubmit(url);
        });
      });
    }
  };

  const handleChange = (prop) => (e) => {
    e.preventDefault();
    setUser({ ...user, [prop]: e.target.value });
  };

  const handleSubmit = (url) => {
    Api.post('/public/register', {
      name: user.firstName,
      lastname: user.lastName,
      password: user.password,
      passwordConfirmation: user.confirmPassword,
      username: user.username,
      email: user.email,
      birthday: date,
      emergencynumber: user.emergencyNumber,
      helth_insurance: 'Nao',
      gender: user.gender,
      avatar: url,
    })
      .then((resp) => {
        console.log(resp);
        Swal.close();
      })
      .catch((err) => {
        console.log(err);
        Swal.close();
        loginHandler({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
        });
      });
  };

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return handleSubmit(e);
    }
  };

  return (
    <>
      <div className="w-[100w] h-[100%] bg-gradient-to-t from-navFontColor to-firstSessionFontColor  md:from-white md:to-white">
        <div className="grid grid-cols-1  md:p-0 md:grid-cols-2 h-[100vh]">
          {success ? null : (
            <Fade left>
              <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[470px] h-[500px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-md md:text-lg font-bold">
                    Cadastre-se agora!
                  </h1>
                  <button onClick={backToLogin}>
                    <img className="w-[80px] md:w-[120px]" src={logo} alt="" />
                  </button>
                </div>

                <Input
                  id="myh1"
                  label="Nome de usuário"
                  err={errUsername}
                  txt={errMsgUsername}
                  type="text"
                  info={user.username}
                  handleChange={handleChange('username')}
                />

                <Input
                  label="Insira seu email"
                  err={errEmail}
                  txt={errMsgEmail}
                  type="email"
                  info={user.email}
                  handleChange={handleChange('email')}
                />

                <Input
                  label="Insira sua senha"
                  txt={errMsgPsw}
                  type="password"
                  info={user.password}
                  handleChange={handleChange('password')}
                  err={errPsw}
                />
                <Input
                  label="Repita sua senha"
                  err={errPswConfirm}
                  txt={errMsgPswConfirm}
                  type="password"
                  info={user.confirmPassword}
                  handleChange={handleChange('confirmPassword')}
                />

                <div className="pt-10 flex justify-between md:flex-row flex-col gap-5  content-center ">
                  <a
                    onClick={backToLogin}
                    className="hover:underline hover:cursor-pointer text-sm"
                  >
                    Usuário já cadastrado? <strong>Volte para o login!</strong>
                  </a>

                  <a
                    onClick={(e) => {
                      validation();
                    }}
                    className="hover:cursor-pointer text-sm flex items-center hover:text-navFontColor"
                  >
                    Próximo <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </Fade>
          )}

          {success ? (
            <Fade left>
              <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[610px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                <div className="flex justify-between items-center">
                  {preview ? (
                    <img
                      className="w-24 h-24  rounded-[50%] cursor-pointer border border-[#E3E6E3] "
                      src={preview}
                      style={{ objectFit: 'cover' }}
                      onClick={() => {
                        fileInputRef.current.click();
                      }}
                      alt=""
                    />
                  ) : (
                    <button
                      className="w-24 h-24  rounded-[50%] cursor-pointer border border-[#E3E6E3] "
                      onClick={(e) => {
                        e.preventDefault();
                        fileInputRef.current.click();
                      }}
                    >
                      <span className="text-sm">
                        Foto de <br /> perfil
                      </span>
                    </button>
                  )}
                  <img className="w-[120px]" src={logo} alt="" />
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  id="fileImg"
                  onChange={(e) => setImageUpload(e.target.files[0])}
                  className="ml-36 absolute hidden placeholder-colorFontParagraph max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "
                />
                <Input
                  type="text"
                  info={user.firstName}
                  handleChange={handleChange('firstName')}
                  label="Seu nome"
                  err={errFirstName}
                  txt={errMsgFirstName}
                />
                <Input
                  type="text"
                  info={user.lastName}
                  handleChange={handleChange('lastName')}
                  label="Seu sobrenome"
                  err={errLastName}
                  txt={errMsgLastName}
                />

                <InputDate
                  date={date}
                  handleChange={(newValue) => {
                    newValue &&
                      setDate(
                        `${newValue['$y']}-${newValue['$M'] + 1}-${
                          newValue['$D']
                        }`,
                      );
                  }}
                  err={errDate}
                  txt={errMsgDate}
                />

                <Input
                  type="number"
                  placeholder="00 00000 0000"
                  info={user.emergencyNumber}
                  handleChange={handleChange('emergencyNumber')}
                  label="Telefone de emergência"
                  err={errEmergencyNumber}
                  txt={errMsgEmergencyNumber}
                />

                <RowRadioButtonsGroup handleChange={handleChange('gender')} />

                <div className="">
                  <button
                    onClick={validateSecondScreen}
                    className="my-4 mt-[-10px] mb-5 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "
                  >
                    Finalizar Cadastro
                  </button>
                  <a
                    onClick={(e) => setSuccess(false)}
                    className=" flex items-center hover:cursor-pointer text-sm hover:text-navFontColor"
                  >
                    {' '}
                    <ArrowLeftIcon />
                    Voltar{' '}
                  </a>
                </div>
              </div>
            </Fade>
          ) : null}

          <Fade right>
            <div className="hidden md:block bg-gradient-to-t from-navFontColor to-firstSessionFontColor drop-shadow-lg pl-10 pt-20"></div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default newSignUp;
