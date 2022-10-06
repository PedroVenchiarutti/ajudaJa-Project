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
      <h1  className=' pr-[120px] text-right font-secondary md:text-[80px] leading-relaxed text-[70px] font-bold'>Saia de casa<h1   className='text-firstSessionFontColor'>Sem se</h1  ><font    className='text-firstSessionFontColor flex-row'> preocupar </font >com o amanhã!</h1 >
    </div>
    <div className='max-w-xl '>
      <img className='pb-12 w-[629px] h-[671px] pr-7' src="public/images/img-header.svg" alt="" />
    </div>
    </div>
    </div>
  );
};

export default teste;
