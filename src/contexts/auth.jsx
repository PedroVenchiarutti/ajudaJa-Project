import React, { useState, useEffect, createContext } from 'react';
import { Navigate } from 'react-router-dom';
import Api from '../Api/api';

const USER_STORAGE_KEY = 'username';
const TOKEN_STORAGE_KEY = 'token'
const ID_STORAGE_KEY = 'id';

const saveUserInStorage = (user, token) => { 
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
    localStorage.setItem(ID_STORAGE_KEY, user.id)
}

const getUserFromStorage = () =>
  JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
const deleteToken = () => localStorage.removeItem(TOKEN_STORAGE_KEY);

const deleteStorageUser = () => {
  localStorage.removeItem(USER_STORAGE_KEY);
  deleteToken();
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
      const storageUser = getUserFromStorage();
      const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY)

      if(storageToken)
      storageUser ? setLoggedUserState(storageUser, storageToken) : ''
      else {
          setUnloggedUserState();
      }

  }, [])

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
  };

  const login = (email, password, redirectTo = '/myprofile') => {
    if (email && password)
      Api.post('/public/login', { email, password })
        .then((resp) => {
          setLoggedUserState(resp.data.user, resp.data.user.token);

          return <Navigate to="/" />;
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const logout = () => {
    confirm('Você realmente deseja sair?')
    setUnloggedUserState();
    return <Navigate to='/'/>
  };

  const state = {
    authenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={state} children={children} />;
};
