import React, { useState, useEffect, useRef } from 'react';
import logo from '/images/logo-v2.png';
import Fade from 'react-reveal/Fade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Input from '../../Components/TextField';
import InputDate from '../../Components/InputDate';
import RowRadioButtonsGroup from '../../Components/Radio';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { loadingAlert, loginHandler } from '../../Components/alerts';
import Api from '../../Api/api';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { storage } from '../../Api/api';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import { Button, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';

const newSignUp = ({ backToLogin }) => {
  const [date, setDate] = useState();
  const [success, setSuccess] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [errMsgDate, setErrMsgDate] = useState('');
  const [preview, setPreview] = useState(null);
  const [errDate, setErrDate] = useState(false);
  const fileInputRef = useRef(null);
  const [imgUrl, setImgUrl] = useState('');

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
          submita(url);
        });
      });
    }
  };
  const [user, setUser] = React.useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    emergencyNumber: '',
  });

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const submita = (url) => {
    Api.post('/public/register', {
      name: user.firstName,
      lastname: user.lastName,
      password: user.password,
      passwordConfirmation: user.confirmPassword,
      username: user.userName,
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setSuccess(true);
  const onSubmit2 = (data) => uploadImage();
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

                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    aria-describedby="outlined-weight-helper-text"
                    error={Boolean(errors.userName)}
                    {...register('userName', {
                      required: 'Esse campo é obrigatório',
                      onChange: (e) => {
                        setUser({ ...user, userName: e.target.value });
                      },
                      minLength: {
                        value: 3,
                        message: 'Mínimo de 3 caracteres',
                      },
                    })}
                    helperText={errors.userName?.message}
                    variant="standard"
                    fullWidth
                    margin=""
                    label="Nome de usuario"
                  />
                  <TextField
                    label="Email"
                    aria-describedby="outlined-weight-helper-text"
                    fullWidth
                    variant="standard"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    {...register('email', {
                      required: 'Email is required',
                      onChange: (e) => {
                        setUser({ ...user, email: e.target.value });
                      },
                    })}
                  />
                  <TextField
                    id="standard-basic"
                    type="password"
                    label="Senha"
                    variant="standard"
                    margin="densed"
                    fullWidth
                    {...register('password', {
                      required: 'A senha é obrigatória.',
                      minLength: {
                        value: 6,
                        message: 'Mínimo de 6 caracteres',
                      },
                      onChange: (e) => {
                        setUser({ ...user, password: e.target.value });
                      },
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                  />
                  <TextField
                    id="standard-basic"
                    label="Confirme sua senha"
                    variant="standard"
                    type="password"
                    margin="densed"
                    fullWidth
                    {...register('confirmPassword', {
                      required: 'A confirmação de senha é obrigatória.',
                      onChange: (e) => {
                        setUser({ ...user, confirmPassword: e.target.value });
                      },
                    })}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword?.message}
                  />
                  <div className="clearfix"></div>
                  <FormHelperText style={{ color: '#d32f2f' }}>
                    {errors.tnc?.message}
                  </FormHelperText>
                  <div className="clearfix"></div>

                  <div className="pt-10 flex justify-between md:flex-row flex-col gap-5  content-center ">
                    <a
                      onClick={backToLogin}
                      className="hover:underline hover:cursor-pointer text-sm"
                    >
                      Usuário já cadastrado?{' '}
                      <strong>Volte para o login!</strong>
                    </a>

                    <button className="hover:cursor-pointer text-sm flex items-center hover:text-navFontColor">
                      Próximo <ArrowRightIcon />
                    </button>
                  </div>
                </form>
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
                <TextField
                  aria-describedby="outlined-weight-helper-text"
                  error={Boolean(errors.firstName)}
                  {...register('firstName', {
                    required: 'Esse campo é obrigatório',
                    onChange: (e) => {
                      setUser({ ...user, firstName: e.target.value });
                    },
                    minLength: {
                      value: 3,
                      message: 'Mínimo de 3 caracteres',
                    },
                  })}
                  helperText={errors.firstName?.message}
                  variant="standard"
                  fullWidth
                  margin=""
                  label="Insira seu primeiro nome"
                />
                <TextField
                  label="Insira seu sobrenome"
                  aria-describedby="outlined-weight-helper-text"
                  fullWidth
                  variant="standard"
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName?.message}
                  {...register('lastName', {
                    required: 'sobrenome é obrigatório',
                    onChange: (e) => {
                      setUser({ ...user, lastName: e.target.value });
                    },
                  })}
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

                <TextField
                  label="Insira um numero de emergência"
                  aria-describedby="outlined-weight-helper-text"
                  fullWidth
                  variant="standard"
                  error={Boolean(errors.emergencyNumber)}
                  helperText={errors.emergencyNumber?.message}
                  {...register('emergencyNumber', {
                    required: 'o numero de emergencia é obrigatório',
                    onChange: (e) => {
                      setUser({ ...user, emergencyNumber: e.target.value });
                    },
                  })}
                />

                <RowRadioButtonsGroup handleChange={handleChange('gender')} />

                <div className="">
                  <button
                    onClick={handleSubmit(onSubmit2)}
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
