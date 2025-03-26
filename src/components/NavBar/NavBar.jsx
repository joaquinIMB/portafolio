"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Code, AlignJustify, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(null);

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center w-full py-6 px-8 max-sm:px-4 bg-gradient-to-b from-[#000000] from-40% to-transparent fixed top-0 z-50">
      <div className="flex items-center">
        <Code className="text-cyan-400 w-6 h-6" />
        <Link 
        href="#"
        className="text-white font-bold text-xl pl-2">
          Joaquin.
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            exe
          </span>
        </Link>
      </div>
      <nav
        className={`flex gap-6 ${
          showMenu ? "flex-col fixed top-20 text-xl max-md:flex h-[100vh] z-50 bg-transparent backdrop-blur-md w-full left-[0px] px-4"
          :
          "max-md:hidden"
        }`}
      >
        {["Servicios", "Proyectos", "Contacto"].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4 max-md:hidden">
        <Link
          href="https://github.com/joaquinIMB"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joaquin-imbriago/"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          <Mail className="w-6 h-6 " />
        </Link>
      </div>
      <div
        className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 hidden max-md:flex"
        onClick={handleClickMenu}
      >
        {!showMenu ? (
          <AlignJustify className="w-8 h-8" />
        ) : (
          <X className="w-8 h-8" />
        )}
      </div>
    </header>
  );
};

export default NavBar;
