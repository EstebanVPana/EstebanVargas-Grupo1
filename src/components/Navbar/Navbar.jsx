import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "../DarkMode/DarkMode";
import { Link } from 'react-router-dom';
import logo from '../../Img/1.png';

const Menu = [
  {
    id: 1,
    name: "Inicio",
    to: "/",
  },
  {
    id: 2,
    name: "Vinilos",
    to: "/Products",
  },
  {
    id: 3,
    name: "Contactos",
    to: "/contactos",
  },
  {
    id: 5, // Cambiado de 4 a 5 para reflejar el ID de "Nosotros"
    name: "Nosotros",
    to: "/nosotros",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Formato Flac",
    to: "/formato/flac",
  },
  {
    id: 2,
    name: "Formato MP3",
    to: "/formato/mp3",
  },
  {
    id: 3,
    name: "Formato WAV",
    to: "/formato/vinilo",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} className="w-[60px]" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input 
                type="text" 
                placeholder="Search"
                className="w-[200px] sm:w-[200px]
                group-hover:w-[300px] transition-all 
                duration-300 rounded-full border
                border-gray-300 px-2 py-1 
                focus:outline-none focus:border-1 
                focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
            </div>
            <Link to="/cart" className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">
                Carrito
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
            </Link>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-col sm:flex-row items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link 
                to={data.to}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li> 
          ))} 
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-[2px] py-2">
              Productos
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link 
                      to={data.to}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;


