import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import people from '/images/people2.svg'
import { Link } from 'react-router-dom';

const Header = () => { 
    return (
        <header className='w-[100%] bg-[#dcfddd]'>
            <div className="max-w-[1200px] pr-5 pt-24 md:pt-32 m-auto pb-16 ">

            <div className="content grid md:grid-cols-2 items-center text-[#0f0f0f]">
            <div className="textAndImage    text-6xl leading-[65px] md:leading-[70px] px-10 md:px-0  md:text-right md:pr-16 ">
                <h1>Saia de casa <br /> <span className='font-medium text-firstSessionFontColor'> sem se</span> <br /> <span className='font-bold'><span className='text-firstSessionFontColor'>preocupar</span> com</span> <br />
                <span className='font-bold'>
                    o amanhã</span></h1>
                
                <div className="text-lg flex md:justify-end  gap-3 pt-9">
                <Link to="/register">
                    <button className='text-lg font-bold bg-[#3DCC67] w-[220px] text-white rounded-2xl py-2 hover:bg-white hover:text-[#000] hover:border transform hover:scale-90 transition duration-300 '>
                        
                        Cadastrar
                       
                        </button> </Link>

                        <Link to="/login"><button className='text-lg font-bold bg-white border  w-[150px] rounded-2xl py-2 hover:bg-buttonColor hover:border-white hover:text-white transform hover:scale-90 transition duration-300  '>
                        Login
                    </button></Link>

                </div>
            </div>

            <div className="image hidden md:block w-[100%] ">
                <img src={people} alt="" />
            </div>

            </div>

            </div>
        
        </header>
    )
}

export default Header