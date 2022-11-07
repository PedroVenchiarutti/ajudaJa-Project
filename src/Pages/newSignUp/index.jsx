import React, { useState, useEffect, useRef } from 'react';
import logo from '/images/logo-v2.png';
import Fade from 'react-reveal/Fade';
import InputDate from '../../Components/InputDate';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { loadingAlert, loginHandler } from '../../Components/Alerts';
import Api from '../../Api/api';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { storage } from '../../Api/api';
import Swal from 'sweetalert2';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import FirstSession from './FirstSession';
import SecondSession from './SecondSession';
import FormattedInputs from '../../Components/InputCellphone'
import { NativeSelect } from '@mui/material'; 

const newSignUp = ({ backToLogin }) => {
  const [date, setDate] = useState(null)
  const [success, setSuccess] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (imageUpload) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUpload);
      NativeSelect;
    } else {
    }
  }, [imageUpload]);

  const uploadImage = () => {
    if (preview == null) {
    } else {
      if (imageUpload == null) return;
      loadingAlert();
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(imageRef).then((url) => {
          setImgUrl(url);

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
    helth_insurance: 'Não' || '',
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
      emergencynumber: user.emergencyNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''),
      helth_insurance: user.helth_insurance,
      gender: user.gender,
      avatar: url,
    })
      .then((resp) => {
        Swal.close();
        navigate('/userinformation');
       
      })
      .catch((err) => {
        console.log(err);
        Swal.close();
        loginHandler({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message,
        });
      });
  };

  const navigate = useNavigate();

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return handleSubmit(e);
    }
  };
  const methods = useForm()

  const nextStep = (data) => setSuccess(true);
  const onSubmit = (data) => {
    if (user.helth_insurance === 'false') {
      setUser({ ...user, helth_insurance: 'não' });
      uploadImage();
    } else {
      uploadImage();
    }
  };

  

  return (
    <>
      <div className="w-[100%] h-[100vh] bg-gradient-to-t from-navFontColor to-firstSessionFontColor  md:from-white md:to-white">
        <div className="grid grid-cols-1  md:p-0 md:grid-cols-2 h-[100%]">
          {success ? null : (
            <Fade left>
              <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:max-h-[900px]  m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-md md:text-lg font-bold">
                    Cadastre-se agora!
                  </h1>
                  <Link to="/">
                    <img className="w-[120px]" src={logo} alt="" />
                  </Link>
                </div>
                <form onSubmit={methods.handleSubmit(nextStep)}>

                    <FormProvider {...methods}>
                      <FirstSession 
                      onChangeUsername={(e) => setUser({...user, userName: e.target.value})}
                      onChangeEmail={(e) => setUser({...user, email: e.target.value})}
                      onChangePassword={(e) => setUser({...user, password: e.target.value})}
                      onChangeConfirmPassword={(e) => setUser({...user, confirmPassword: e.target.value})} />
                    </FormProvider>

                  <div className="pt-10 flex justify-between md:flex-row flex-col gap-5  content-center ">
                    <Link
                      to="/login"
                      className="hover:underline hover:cursor-pointer text-sm"
                    >
                      Usuário já cadastrado? <strong>Volte para o login!</strong>
                    </Link>

                    <button className="hover:cursor-pointer text-sm flex items-center hover:text-navFontColor">
                      Próximo <ArrowRightIcon />
                    </button>
                  </div>
                </form>
              </div>
            </Fade>
          )}

          {success ? (

              <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:max-h-[830px] m-auto flex flex-col gap-5 mb-8 mt-8 rounded-lg shadow-md p-10">
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

              <FormProvider {...methods}>

                <SecondSession 
                 onChangeFirstName={handleChange('firstName')}
                 onChangeLastName={handleChange('lastName')} 
                 methodHandleClick={methods.handleSubmit(onSubmit)}
                 onClickBackToRegister={(e) => setSuccess(false)}
                 changeGender={handleChange('gender')}
                 onChangeHelthInsurance={handleChange('helth_insurance')}
                 > 

                 <FormattedInputs label="Telefone de emergência" value={user.emergencyNumber} onChange={handleChange('emergencyNumber')}/>

              <InputDate
                  date={date}
                  handleChange={(newValue) => {
                    newValue && setDate(`${newValue['$y']}-${newValue['$M'] + 1}-${newValue['$D']}`,)}} />

              

                 </SecondSession> 

              </FormProvider>

              </div>
        
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
