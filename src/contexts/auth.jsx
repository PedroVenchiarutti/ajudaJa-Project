import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Api from '../Api/api';
import { loginHandler } from '../Components/Alerts';
import Modal from '../Components/Modal';

const USER_STORAGE_KEY = 'username';
const TOKEN_STORAGE_KEY = 'token';
const ID_STORAGE_KEY = 'id';

const saveUserInStorage = (user, token) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  localStorage.setItem(ID_STORAGE_KEY, user.id);
};

const getUserFromStorage = () =>
  JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
const deleteToken = () => localStorage.removeItem(TOKEN_STORAGE_KEY);

const deleteStorageUser = () => {
  localStorage.removeItem(USER_STORAGE_KEY);
  deleteToken();
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storageUser = getUserFromStorage();
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (storageToken)
      storageUser ? setLoggedUserState(storageUser, storageToken) : '';
    else {
      setUnloggedUserState();
    }
  }, []);

  const setLoggedUserState = (user, token) => {
    saveUserInStorage(user, token);
    setUser(user);
    setToken(token);
    setAuthenticated(true);
  };

  const setUnloggedUserState = () => {
    deleteStorageUser();
    setUser({});
    setToken('');
    setAuthenticated(false);
    return navigate('/');
  };

  const login = (email, password, redirectTo = '/myprofile') => {
    if (email && password)
      Api.post('/public/login', { email, password })
        .then((resp) => {
          setLoggedUserState(resp.data.user, resp.data.user.token);
          Swal.close();
          return navigate('/myprofile');
        })
        .catch((err) => {
          loginHandler({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          });
        });
  };

  const register = (
    name,
    lastname,
    password,
    passwordConfirmation,
    username,
    email,
    birthday,
    emergencynumber,
    helth_insurance,
    gender,
    avatar,
  ) => {
    if (username && password && emergencynumber && birthday) {
      Api.post('/public/register', {
        name,
        lastname,
        password,
        passwordConfirmation,
        username,
        email,
        birthday,
        emergencynumber,
        helth_insurance,
        gender,
        avatar,
      })
        .then((resp) => {
          Swal.close();
          navigate('/userinformation');
          console.log(resp.data);
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
    } else {
      alert('Preencha todos os campos');
    }
  };

  const logout = () => {
    return (
      <>
        {openModal && (
          <Modal
            label="Você deseja realmente"
            labelStrong="sair"
            confirmModal={'/'}
            closeModal={setOpenModal}
          />
        )}
        {setUnloggedUserState()}
      </>
    );
  };

  const state = {
    authenticated,
    user,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={state} children={children} />;
};
