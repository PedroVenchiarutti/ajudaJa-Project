import React, { useState, useEffect } from 'react';
import Modal from '../../Components/Modal';
import Fade from 'react-reveal/Fade';
import Api from '../../Api/api';
import { Link } from 'react-router-dom';
import InputPassword from '../../Components/inputPassword'

const editPassword = () => {

  const [client, setClient] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    showOldPassword: false,
    showNewPassword: false,
    showRepeatPassword: false
  });

  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('https://ajudajaapi.herokuapp.com/docs/#/');

  const id = localStorage.getItem('id');

  const config = {
    headers: {
      authorization: `${localStorage.getItem('token')}`,
    },
  };

  const handleChange = (props) => (e) => {
    let newClient = { ...client, [props]: e.target.value };
    setClient(newClient);
  };

  const handleClickShowPassword = (prop) => () => {
    setClient({
      ...client,
      [prop]: !client[prop],
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return handleButton(e);
    }
  };

  const handleButton = (e) => {

    Api.patch(
      `/private/update/users/password/${id}`,
      {
        password: client.password,
        newPassword: client.newPassword,
        confirmPassword: client.confirmPassword
      },
      config
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  return (
    <div className="w-full   bg-white">
      {/* Content */}
      <div className="lg:w-[1080px] pt-32 pb-32 grid m-auto">
        <Fade bottom>
          <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-16 py-5 rounded-lg pb-10 px-4">
            
            <div className="pt-4 formAndButtons flex flex-col  content-center ">
              <h2 className='font-bold text-xl pb-2 '>Altere sua senha</h2>
              <form className="flex flex-col gap-5 items-center ">

                <InputPassword 
                titleLabel='Senha atual'
                type={client.showOldPassword ? 'text' : 'password'}
                value={client.password}
                onChange={handleChange('password')}
                onClick={handleClickShowPassword('showOldPassword')}
                onMouseDown={handleMouseDownPassword}
                visibility={client.showOldPassword}
                onKeyUp={keyHandler}/>

                <InputPassword 
                titleLabel='Senha nova'
                type={client.showNewPassword ? 'text' : 'password'}
                value={client.newPassword}
                onChange={handleChange('newPassword')}
                onClick={handleClickShowPassword('showNewPassword')}
                onMouseDown={handleMouseDownPassword}
                visibility={client.showNewPassword}
                onKeyUp={keyHandler}/>

                <InputPassword
                titleLabel='Repita senha nova'
                type={client.showRepeatPassword ? 'text' : 'password'}
                value={client.confirmPassword}
                onChange={handleChange('confirmPassword')}
                onClick={handleClickShowPassword('showRepeatPassword')}
                onMouseDown={handleMouseDownPassword}
                visibility={client.showRepeatPassword}
                onKeyUp={keyHandler}
                 />

                
              </form>

              <div className="buttons py-6 pt-14 flex flex-col gap-2 justify-center">
              <Link to=""> <button
                  className="border px-8 py-2 rounded-lg w-[100%] text-navFontColor font-bold  hover:bg-navBg hover:text-white"
                onClick={e => handleButton()}
                >
                  Salvar
                </button></Link>
               
                <Link to="/editprofile"> <button className="px-6 py-2 w-[100%] rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border ">
                  Voltar
                </button></Link>
              </div>
            </div>
          </div>
        </Fade>

        {openModal && (
          <Modal
            label="Tem certeza que deseja alterar suas"
            labelStrong="Informações"
            confirmModal={'/myprofile'}
            closeModal={setOpenModal}
          />
        )}
      </div>
    </div>
  );
};

export default editPassword;
