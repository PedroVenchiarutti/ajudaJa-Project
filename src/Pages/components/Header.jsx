import react from 'react';

function Header() {
  return (
    <div>
      <nav className="p-5 bg-navBg shadow flex items-center justify-between max-w-1270px max-h-1270px">
        <div>
          <span className="text-2xl font-secondary cursor-pointer ml-12 ">
            <img className="h-10 inline" src="public\images\logo-v2.png" />
          </span>
        </div>
        <ul className="flex items-center mr-20">
          <li className="mx-4">
            <a
              href="#"
              className="text-3xl font-secondary hover:text-hoverFontColor duration-500"
            >
              Início
            </a>
          </li>
          <li className="mx-4">
            <a
              href="#"
              className="text-3xl font-secondary hover:text-hoverFontColor duration-500"
            >
              Sobre
            </a>
          </li>
          <li className="mx-4">
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
