import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Meu Site</div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li className="text-white hover:text-gray-300">Início</li>
            <li className="text-white hover:text-gray-300">Sobre</li>
            <li className="text-white hover:text-gray-300">Serviços</li>
            <li className="text-white hover:text-gray-300">Contato</li>
          </ul>
        </div>
        <div className="md:hidden">
          {/* Ícone de menu para telas menores */}
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
