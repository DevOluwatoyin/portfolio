import {FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { navLinks } from './variables/nav';

const NavBar = () => {

  const [nav, navOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between text-center w-full h-20 p-4 text-white bg-black fixed z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? "navbar-scroll" : ""
    }`}>
      <div>
        <h1 className="text-5xl font-signature ml-2">Oluwatoyin</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({id, text}) =>
        (<li key={id} className="px-4 py-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:underline duration-200">
            <Link to={text} smooth duration={500}>{text}</Link>
        </li>))}
      </ul>
      <div onClick={() => navOpen(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav &&
        (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 ">
      {navLinks.map(({id, text}) =>
        (<li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <Link to={text} smooth duration={500} onClick={() => navOpen(!nav)}>{text}</Link>
        </li>))}
      </ul>)}
    </div>
  )
}

export default NavBar;
