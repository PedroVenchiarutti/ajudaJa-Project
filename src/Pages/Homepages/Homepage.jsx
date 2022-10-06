import React, { useState } from 'react';

import Header from '../components/Header';

import Button from '@mui/material/Button'
import '../../index.scss'

function teste() {
  return (
    <div>
    <Header />
    <div className='flex'>

    <div className='max-w-3xl flex-col flex-1 max-h-full'>
      <h1  className=' pr-[120px] text-right font-secondary md:text-[80px] leading-relaxed text-[70px] font-bold'>Saia de casa<h1   className='text-firstSessionFontColor'>Sem se</h1  ><h1    className='text-firstSessionFontColor flex-row'> preocupar</h1 >com o amanhã!</h1 >
    </div>
    <div className='max-w-xl '>
      <img className='w-[629px] h-[671px] pr-7' src="public/images/image-firs-seasson.png" alt="" />
    </div>
    </div>
    </div>
  );
};

export default teste;
