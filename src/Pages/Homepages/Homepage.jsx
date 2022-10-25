import React, { useState } from 'react';
import axios from 'axios';
import Information from '../Information/Information';
import FAQ from '../FAQ/FAQ';
import Cards from '../Cards/Cards';
import Chatbox from '../ChatBox'
import Fade from 'react-reveal/Fade';
import Header from '../Header';



import '../../index.scss';

function Homepage() {

  return (
    <>
    
      <div className='w-[100%] m-auto '>
     
      <div className='lg:max-w-[1280px] m-auto'>
        <Fade top>

        <Header/>
      
        </Fade>
        <Information/>
        <Cards/>
        <FAQ/>
        <Chatbox/>
        
      </div>
      </div>
     
    </>
  );
}

export default Homepage;
