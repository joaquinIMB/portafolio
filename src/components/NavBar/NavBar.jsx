"use client";

import Link from "next/link";
import { Code, AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/utils/info";
import { socialMedia } from "@/utils/info";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(null);

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`flex justify-between items-center w-full py-6 px-8 max-sm:px-4 ${
        showMenu
          ? "bg-black"
          : "bg-gradient-to-b from-[#000000] from-40% to-transparent"
      }  fixed top-0 z-50`}
    >
      <div className="flex items-center">
        <Code className="text-cyan-400 w-6 h-6" />
        <Link href="#" className="text-white font-bold text-xl pl-2">
          Joaquin.
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            exe
          </span>
        </Link>
      </div>
      <nav
        className={`flex gap-6 ${
          showMenu
            ? "flex-col fixed top-20 text-xl max-md:flex h-[100vh] z-50 bg-transparent backdrop-blur-md w-full left-[0px] px-4"
            : "max-md:hidden"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={`http://localhost:3000/${item.href}`}
            className="text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setShowMenu(false)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4 max-md:hidden">
        {socialMedia.map((SM) => {
          const SocialIcon = SM.icon;
          return (
            <Link
              key={SM.id}
              href={SM.href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon className="w-6 h-6" />
            </Link>
          );
        })}
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
