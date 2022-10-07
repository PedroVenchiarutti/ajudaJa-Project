import React, { useState } from 'react';

import Header from '../components/Header';

import Button from '@mui/material/Button'
import '../../index.scss'

function Homepage() {
  return (
    <div>
    <Header />
    <div className='flex md:max-h-[520px]'>

    <div className='max-w-3xl flex-col flex-1 md:max-h-72 md:pr-0 pr-16'>
      <h1  className='pt-32 md:mr-36 text-right font-secondary md:text-[60px] leading-relaxed text-[25px] font-bold pl-10'>Saia de casa<h1   className='text-firstSessionFontColor'>Sem se</h1  ><font    className='text-firstSessionFontColor flex-row'> preocupar </font >com o amanhã!</h1 >

     
    </div>
    <div className='max-w-xl'>
      <img className='md:mt-24   pt-40 md:pt-0  pb-12 md:w-[629px] md:h-[671px] pr-7' src="public/images/img-header.svg" alt="" />
    </div>
    </div>
      <button className=' mt-4 group bg-buttonColor hover:bg-faqGrayBg md:p-[16px] md:ml-48 md:mr-18 border-2 shadow-2xl p-2 
      mr-20 ml-[10%] rounded-lg hover:animate-pulse duration-500'>
        <h1 className='text-xl group-hover:text-buttonColor duration-500
        text-fontColor md:font-bold'>
          Cadastrar-se
          </h1>
      </button>

        <button className='group hover:bg-navBg duration-500 md:p-[15px] md:ml-[83px] md:pl-10 md:pr-10 mr-[1px] border-2 pl-5 mt-4  p-2 rounded-lg shadow-2xl ml-2 pr-5'>
          <h1 className='group-hover:text-faqGrayBg group-hover:animate-pulse text-buttonColor md:font-bold text-xl'>
        Login
          </h1>
      </button> 
    </div>
  );
};

export default Homepage;
