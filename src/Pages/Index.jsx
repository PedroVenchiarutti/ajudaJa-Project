import React, { useState } from 'react';

import Button from '@mui/material/Button'
import '../index.scss'

function Header() {



  return (
    <div className='max-w-full bg-navBg'>
        <div className='h-20 items-center flex justify-around flex-nowrap flex-row max-w-screen-2xl'>
          <h1 className='text-3xl'><a href="/home">Logo</a></h1>
          <ul> 
            <li className='font-secondary inline px-1.5'>Moon</li>
            <li className='font-secondary inline px-1.5'>Inicio</li>
            <li className='font-secondary inline px-1.5'>Sobre</li>
            <li className='font-secondary inline px-1.5'>Meu perfil</li>
          </ul>

        </div>
    </div>
  );
};

export default Header;
