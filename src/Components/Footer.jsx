import React from 'react';

export default function Footer (){
    return(
        <div className="mt-44 flex bg-navBg h-36 w-screen text-center md:text-2xl text-[10px]">
        <img
          src="images\logo-v2.png"
          alt=""
          className="md:w-[172px] md:h-[58.76px] w-[70px] h-[28px] md:ml-[68px] ml-4 mt-12"
        />
        <div className="pl-11 md:pl-44">
          <h1 className="mt-12 text-fontColor">
            Ajuda.JÁ© Todos os direitos reservados.
          </h1>
          <h1 className="text-fontColor">Conte conosco ;)</h1>
        </div>
            <div className='md:ml-40 ml-10 md:mt-12 mt-[72px] text-[56px]'>

          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="call"></ion-icon>
          <ion-icon name="mail"></ion-icon>
        </div>
      </div>
    )

}