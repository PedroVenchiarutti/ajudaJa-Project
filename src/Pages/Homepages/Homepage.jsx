import React, { useState } from 'react';

import Header from '../../Components/Header/Header';

import Information from '../Information/Information';
import FAQ from '../FAQ/FAQ';
import Cards from '../Cards/Cards';
import Footer from '../../Components/Footer/Footer';
import Chatbox from '../ChatBox';
import Fade from 'react-reveal/Fade';

import '../../index.scss';

function Homepage() {
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-[1270px]">
        <div className="flex md:max-h-[520px]">
          <Fade left>
            <div className="max-w-3xl flex-col flex-1 md:max-h-72 md:pr-0 pr-16">
              <h1 className="pt-32 md:mr-3 text-right font-secondary md:text-[60px] leading-relaxed text-[25px] font-bold pl-10">
                Saia de casa
                <h1 className="text-firstSessionFontColor">Sem se</h1>
                <font className="text-firstSessionFontColor flex-row">
                  {' '}
                  preocupar{' '}
                </font>
                com o amanhã!
              </h1>
            </div>
          </Fade>
          <div className="max-w-[800px]">
            <img
              className="md:mt-28  pt-40 md:pt-0  pb-12 md:w-[900px] md:h-[580px] pl-10"
              src="images/na_feb_50.jpg"
              alt=""
            />
          </div>
        </div>
        <a href="/signup">
          <button
            className=" mt-4 group bg-buttonColor hover:bg-faqGrayBg md:p-[16px] md:ml-24 md:mr-18 border-[1px] border-hidden hover:border-solid shadow-2xl p-2 
      mr-20 ml-[10%] rounded-lg hover:animate-pulse duration-500"
          >
            <h1
              className="text-xl group-hover:text-buttonColor duration-500
        text-fontColor md:font-bold"
            >
              Cadastrar-se
            </h1>
          </button>
        </a>

        <a href="/login">
          <button className="group hover:bg-navBg duration-500 md:p-[15px] md:ml-[83px] md:pl-10 md:pr-10 mr-[1px] border-2 pl-5 mt-4  p-2 rounded-lg shadow-2xl ml-2 pr-5">
            <h1 className="group-hover:text-faqGrayBg group-hover:animate-pulse text-buttonColor md:font-bold text-xl">
              Login
            </h1>
          </button>
        </a>

        <Information />
        <Cards />
        <FAQ />
        <Chatbox />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
