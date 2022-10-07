import React, {useState} from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';



function Header() {

  let [menu, setMenu] =   useState(false);  

  return (
    <div className='fixed w-screen'>
      <nav className="p-5 bg-navBg items-center md:flex md:items-center md:justify-between">
        <div className='flex justify-between'>
          <span className="text-2xl font-secondary cursor-pointer md:ml-14 ml-4 ml:shadow">
            <img className="inline w-[172px] h-[58.76] " src="public\images\logo-v2.png" />
          </span>
          <div onClick={()=> setMenu(!menu)} className='cursor-pointer py-4 text-3xl cursor-hiddenpointer md:hidden block mx-2'>
          <ion-icon name={menu ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        <ul className={`menu md:flex md:items-center mr-20 z-[-1] md:z-auto
         md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7
         bg-navBg ml:shadow-lg md:opacity-100 top-[-400px]
         ease-in duration-300 ${ menu ? 'top-24' : 'top-[-490px]'}`}>
          <li>
             <DarkModeOutlinedIcon fontSize='large' className='mx-4 duration-500 cursor-pointer' />
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#"
              className="text-3xl font-secondary hover:text-hoverFontColor duration-500"
            >
              Início
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#"
              className="text-3xl font-secondary hover:text-hoverFontColor duration-500"
            >
              Sobre
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#"
              className="text-3xl font-secondary hover:text-hoverFontColor duration-500"
            >
              Meu perfil
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
