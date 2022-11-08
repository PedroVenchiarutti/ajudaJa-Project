import {
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  MenuItem,
  Button,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState, useContext } from 'react';
import logo from '/images/logo-v2.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as Scroll } from 'react-scroll';
import { exitConfirmation } from '../Alerts';
import Swal from 'sweetalert2';

const Header = ({ children }) => {
  const buttonLogout = () => {
    const { authenticated, logout } = useContext(AuthContext);
    return authenticated ? (
      <LogoutIcon
        className="ml-5 hover:cursor-pointer"
        onClick={(props) => {
          Swal.fire({
            icon: 'warning',
            title: 'Deseja sair?',
            text: 'Você será desconectado do sistema',
            showCancelButton: true,
            confirmButtonColor: '#3DCC67',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
          }).then((result) => {
            if (result.isConfirmed) {
              logout();
            }
          });
        }}
      />
    ) : null;
  };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const headersData = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Sobre',
      href: 'about',
    },
    {
      label: 'Meu perfil',
      href: '/myprofile',
    },
  ];
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };

    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <>
        <Toolbar
          sx={{
            backgroundColor: '#3DCC67',
            paddingRight: '79px',
            paddingLeft: '30px',
          }}
        >
          <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              archor: 'left',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div>{getDrawerChoices()}</div>
          </Drawer>
          <div className="flex justify-between items-center w-[100%]">
            <Link to="/">
              <img className="w-[100px]" src={logo} alt="" />
            </Link>
            <div className="">{buttonLogout()}</div>
          </div>
        </Toolbar>
      </>
    );
  };

  const getMenuButtons = () => {
    return (
      <>
        <Link
          {...{
            component: Link,
            to: '/',
            color: 'inherit',
            style: {
              textDecoration: 'none',
              fontWeight: 'bold',
              marginLeft: '30px',
            },
            key: 'inicio',
          }}
          className="hover:text-[#1f721f] text-lg hover:border-b-2 hover:pb-4 hover:pt-3 hover:mb-[-5px] "
        >
          Inicio
        </Link>

        <Scroll
          to={'about'}
          className="hover:text-[#1f721f] text-lg hover:border-b-2 hover:pb-[17.5px] hover:pt-3 hover:mb-[-6px] font-bold ml-8 hover:cursor-pointer"
          smooth={true}
          duration={1000}
        >
          Sobre
        </Scroll>

        <Link
          {...{
            component: Link,
            to: '/myprofile',
            color: 'inherit',
            style: {
              textDecoration: 'none',
              fontWeight: 'bold',
              marginLeft: '30px',
            },
            key: 'Meu perfil',
          }}
          className="hover:text-[#1f721f] text-lg hover:border-b-2 hover:pb-4 hover:pt-3 hover:mb-[-5px] "
        >
          Meu perfil
        </Link>
      </>
    );
  };

  const displayDesktop = () => {
    return (
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#3DCC67',
          boxShadow: 'rgba(0, 0, 0, 0.0) 1.95px 1.95px 2.6px',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'DM Sans',
            }}
          >
            <div>
              <img className="w-[100px]" src={logo} alt="" />
            </div>
            <div className="flex items-center">
              {getMenuButtons()}
              {buttonLogout()}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <>
        <Link
          {...{
            component: Link,
            to: '/',
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: 'Inicio',
          }}
        >
          <MenuItem sx={{ fontFamily: 'DM Sans', fontWeight: 500 }}>
            Inicio
          </MenuItem>
        </Link>

        <Scroll to={'about'} smooth={true} duration={1000}>
          <MenuItem sx={{ fontFamily: 'DM Sans', fontWeight: 500 }}>
            Sobre
          </MenuItem>
        </Scroll>

        <Link
          {...{
            component: Link,
            to: '/myprofile',
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: 'Meu perfil',
          }}
        >
          <MenuItem sx={{ fontFamily: 'DM Sans', fontWeight: 500 }}>
            Meu perfil
          </MenuItem>
        </Link>
      </>
    );
  };

  return (
    <>
      <header>
        <AppBar sx={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;' }}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </>
  );
};

export default Header;
