import React, { useState } from 'react';
import axios from 'axios';
import Information from '../Information/Information';
import FAQ from '../FAQ/FAQ';
import Cards from '../Cards/Cards';
import Chatbox from '../ChatBox';
import Fade from 'react-reveal/Fade';
import Header from '../Header';

import '../../index.scss';

function Homepage() {
  return (
    <>
      <div className="w-[100%] m-auto pb-20 ">
        <Fade top>
        <Header />
        </Fade>

        <div className="lg:max-w-[1280px] m-auto">
        <Information id="about" />
          <Cards />
          <FAQ />
        
        </div>
      </div>
    </>
  );
}

export default Homepage;
