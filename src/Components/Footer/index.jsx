import React from 'react';
import Logo from '/images/logo-v2.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="md:w-full ">
      <div className=" pb-20 lg:h-[180px] bg-navBg md:w-full   ">
        <div className="md:h-36 pt-14  py-6 px-8 md:pt-20 lg:max-w-[1270px]  m-auto md:px-24  flex md:justify-between  md:items-center md:flex-row flex-col  ">
          <div className="">
            <div className="w-[200px]">
              <img src={Logo} alt="" />
            </div>
            <h1 className="pl-2 pt-1 text-sm  text-[#0a0a0a]">
              ©2022 Ajuda.já
            </h1>
            <h3 className="pl-2 pt-1  text-[#0a0a0a] text-sm pb-6 md:pb-0">
              Todos os direitos reservados.
            </h3>
          </div>
          <div className=" text-[#0a0a0a] flex pl-2 md:pl-0  gap-7 ">
            <button>
              <LocalPhoneIcon fontSize="large" />
            </button>
            <button>
              <EmailIcon fontSize="large" />
            </button>
            <button>
              <InstagramIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
