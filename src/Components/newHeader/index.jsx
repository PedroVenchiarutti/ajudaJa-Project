import { IconButton, Toolbar, AppBar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from "react";
import logo from '/images/logo-v2.png'
const Header = () => { 
const [state, setState] = useState({ 
    mobileView: false,
});

const {mobileView} = state;

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
    return(
        <Toolbar>
            <IconButton
            {...{
                edge: 'start',
                color: 'inherit',
                "aria-label":"menu",
                "aria-haspopup": "true",
            }}
            >
                <MenuIcon/>
            </IconButton>
            <div><img className="w-[100px]" src={logo} alt="" /></div>
        </Toolbar>
    )
}

const displayDesktop = () => { 
    return ( 
        <div>Olá</div>
    )
}

return (
    <header>
        <AppBar className=''>
            {mobileView ? displayMobile() : displayDesktop() }
        </AppBar>
    </header>
)
}

export default Header