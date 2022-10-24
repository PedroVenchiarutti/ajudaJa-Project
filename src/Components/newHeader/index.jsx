import { IconButton, Toolbar, AppBar, Drawer, Link, MenuItem, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState, useContext } from "react";
import logo from '/images/logo-v2.png'
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from '../../contexts/auth';
import LogoutIcon from '@mui/icons-material/Logout';



const Header = ({children}) => { 

    const buttonLogout = () => { 
        const {authenticated, logout} = useContext(AuthContext);
        return authenticated ? <LogoutIcon className="ml-5 hover:cursor-pointer" onClick={logout}/> : null 
    }

    

const [state, setState] = useState({ 
    mobileView: false,
    drawerOpen: false
});

const headersData = [
    {
        label: 'Inicio',
        href: '/'
    }, 
    {
        label: 'Sobre',
        href: '/'
    },
    {
        label: 'Meu perfil',
        href: '/myprofile'
    }
];
const {mobileView, drawerOpen} = state;


useEffect(()=> { 
    const setResponsiveness = () => { 
        return window.innerWidth < 900 
        ? setState((prevState) => ({...prevState, mobileView: true}))
        : setState((prevState) => ({...prevState, mobileView: false}))
    };

    setResponsiveness();
    window.addEventListener('resize', ()=> setResponsiveness());

    return () => { 
        window.removeEventListener('resize', ()=> setResponsiveness());
    }


}, []);

const displayMobile = () => { 

    const handleDrawerOpen = () => { 
        setState((prevState) => ({...prevState, drawerOpen: true}));
    }

    const handleDrawerClose = () => { 
        setState((prevState)=> ({...prevState, drawerOpen: false}));
    } 

    return(
        <>
            <Toolbar sx={{
                backgroundColor:"#3DCC67",
                paddingRight: "79px",
                paddingLeft: "30px",
                }}>
                <IconButton
                {...{
                    edge: 'start',
                    color: 'inherit',
                    "aria-label":"menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}
                >
                    <MenuIcon/>
                </IconButton>
                <Drawer {...{
                    archor: 'left',
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                   
                }}
                >
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <div className="flex justify-between items-center w-[100%]"><a href="/"><img  className="w-[100px]" src={logo} alt="" /></a>
                <div className="">{buttonLogout()}</div>
                </div>
            </Toolbar>
            
        </>
    )
}

const getMenuButtons = () => { 
    return headersData.map(({label, href})=> { 
        return(
            <Button {...{
                key:label,
                color: 'inherit',
                to: href,
                component: RouterLink,
                

            }} sx={{ 
                textTransform: 'capitalize',
                size: '70px',
                fontFamily: 'DM Sans',
                fontWeight: 'bold',
                fontSize: '18px',
                marginLeft: '30px',
                background: 'transparent',
                '&:hover': { 
                borderRadius: '0px',
                background: 'transparent',
                // backgroundColor: '#316B44',
                padding: '14px 9px',
                borderBottom: '3px solid #316B44 ',
                color: '#316B44',
                transition: 'none',
              
            }}}>
                {label}
            </Button>
        )
    })
}

const displayDesktop = () => { 
    return ( 
        <Toolbar sx={{
            backgroundColor:"#3DCC67",
            paddingRight: "79px",
            paddingLeft: "30px",
            display: 'flex',
            justifyContent: 'space-between',
            textShadow: 'none   '
            }}>
            <div><img className="w-[100px]" src={logo} alt="" /></div>
            <div className="flex items-center">{getMenuButtons()}
            {buttonLogout()}
            </div>
        </Toolbar>
    )
}

const getDrawerChoices = () => { 
    return headersData.map(({label, href}) => { 
        return(
            <Link
            {...{
                component: RouterLink, 
                to:href,
                color: 'inherit',
                style: {textDecoration: 'none'},
                key: label,
                
            }}
            >
                <MenuItem sx={{fontFamily: 'DM Sans', fontWeight: 500}}>{label}</MenuItem>
            </Link>
        )
    })
}

return (
    <>
        <header>
            <AppBar sx={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'}}>
                {mobileView ? displayMobile() : displayDesktop() }
            </AppBar>
        </header>
        
    </>
)
}

export default Header