"use client";

import Link from "next/link";
import { Code, AlignJustify, X } from "lucide-react";
import { useState, useEffect } from "react";
import { socialMedia } from "@/utils/info";
import ButtonLanguage from "../ButtonLanguage/ButtonLanguage";
import { useTranslations } from "@/hooks/useTranslations";
import { envioronmentLink } from "@/utils/envioronmentLink";

const NavBar = () => {
  const { navLinks } = useTranslations();
  const [showMenu, setShowMenu] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const handleCloseMenu = (e) => {
    if (e.target.closest("a")) return;

    setShowMenu(false);
  };

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!hasMounted) return null;

  return (
    <header
      className={`flex justify-between items-center w-full py-6 px-8 max-sm:px-4 transition-transform duration-300 ${
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
        onClick={handleCloseMenu}
        className={`flex gap-6 transition-all ${
          showMenu
            ? "flex-col fixed top-20 text-xl max-md:flex py-4 rounded-b-lg z-[99] bg-gradient-to-b from-black from-28% to-bg-[#00000099] h-full w-full left-[0px] px-8 max-sm:px-4"
            : "max-md:hidden"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={envioronmentLink + item.href}
            className="text-gray-300 hover:text-white max-md:text-gray-50 transition-colors duration-300 w-fit"
            onClick={() => setShowMenu(false)}
          >
            {item.title}
          </Link>
        ))}
        <div className="hidden gap-4 items-center max-md:justify-center fixed bottom-0 right-0 pb-4 px-4 max-md:flex">
          <ButtonLanguage />
          {socialMedia.map((SM) => {
            const SocialIcon = SM.icon;
            return (
              <Link
                key={SM.id}
                href={SM.href}
                className="text-gray-50 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon className="w-6 h-6 drop-shadow-2xl" />
              </Link>
            );
          })}
        </div>
      </nav>
      <div className={`flex gap-4 max-md:hidden items-center`}>
        <ButtonLanguage />
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
