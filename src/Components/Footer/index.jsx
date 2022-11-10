import React from 'react';
import Logo from '/images/logo-v2.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="md:w-full ">
      <div className=" pb-6  h-full  bg-navBg md:w-full   ">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-around items-center  pt-6   lg:max-w-[1270px]  m-auto  ">
      
        
          
            <div className="w-[110px]">
              <img src={Logo} alt="" />
            </div>
            
           
         

      
          <h1 className="text-[13px]  text-[#0a0a0a]">
              ©2022 Ajuda.já | Todos os direitos reservados.
            </h1>
          

          <div className=" text-[#0a0a0a] flex justify-between  gap-4 ">
          
            <button>
              <LocalPhoneIcon fontSize="medium" />
            </button>
            <button>
              <EmailIcon fontSize="medium" />
            </button>
            <button>
              <InstagramIcon fontSize="medium" />
            </button>
          
          </div>
          
        </div>
      </div>
    </div>
  );
}
