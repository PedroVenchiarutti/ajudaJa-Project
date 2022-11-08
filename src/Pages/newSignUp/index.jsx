import React, { useState, useEffect, useRef, useContext } from 'react';
import logo from '/images/logo-v2.png';
import Fade from 'react-reveal/Fade';
import InputDate from '../../Components/InputDate';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { loadingAlert, loginHandler } from '../../Components/Alerts';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { storage } from '../../Api/api';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FirstSession from './FirstSession';
import SecondSession from './SecondSession';
import FormattedInputs from '../../Components/InputCellphone';
import { NativeSelect } from '@mui/material';
import ImageEdit from '../../Components/imageEdit';
import { AuthContext } from '../../contexts/auth';

const newSignUp = ({ backToLogin }) => {
  const [date, setDate] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [imgUrl, setImgUrl] = useState('');
  const { register } = useContext(AuthContext);

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
    register(
      user.firstName,
      user.lastName,
      user.password,
      user.confirmPassword,
      user.userName,
      user.email,
      date,
      user.emergencyNumber
        .replace('(', '')
        .replace(')', '')
        .replace(' ', '')
        .replace('-', ''),
      user.helth_insurance,
      user.gender,
      url,
    );
  };

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return handleSubmit(e);
    }
  };
  const methods = useForm();

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
                      onChangeUsername={(e) =>
                        setUser({ ...user, userName: e.target.value })
                      }
                      onChangeEmail={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      onChangePassword={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      onChangeConfirmPassword={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                      }
                    />
                  </FormProvider>

                  <div className="pt-10 flex justify-between md:flex-row flex-col gap-5  content-center ">
                    <Link
                      to="/login"
                      className="hover:underline hover:cursor-pointer text-sm"
                    >
                      Usuário já cadastrado?{' '}
                      <strong>Volte para o login!</strong>
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
              <ImageEdit
                preview={preview}
                srcPreview={preview}
                onClickIMG={() => {
                  fileInputRef.current.click();
                }}
                onClickButton={(e) => {
                  e.preventDefault();
                  fileInputRef.current.click();
                }}
                reference={fileInputRef}
                onChange={(e) => setImageUpload(e.target.files[0])}
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
                  <FormattedInputs
                    label="Telefone de emergência"
                    value={user.emergencyNumber}
                    onChange={handleChange('emergencyNumber')}
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
                  />
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
