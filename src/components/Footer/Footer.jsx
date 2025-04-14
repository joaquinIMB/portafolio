"use client";

import { navLinks, socialMedia } from "@/utils/info";
import { Code, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-800 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-black to-purple-500/50"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      <div className="relative z-10 container mx-auto px-10 py-8 max-md:px-6 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="text-cyan-400 w-6 h-6" />
              <span className="text-white font-bold text-xl">
                Joaquin Imbriago
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Desarrollador FullStack especializado en crear experiencias
              digitales modernas y atractivas.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialMedia.map((item) => {
                const SocialIcon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300"></div>
                    <SocialIcon className="relative z-10 w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Navegación</h3>
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
                    >
                      <span className="text-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>{" "}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Contacto</h3>
              <ul className="space-y-2">
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
                    >
                      <span className="text-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>{" "}
                      {item.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Suscríbete</h3>
            <p className="text-gray-400">
              Recibe actualizaciones sobre mis nuevos proyectos y artículos.
            </p>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-l-lg py-2 px-4 text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-transparent transition-all"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 rounded-r-lg hover:opacity-90 transition-opacity">
                  <ArrowUp className="w-4 h-4 -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Joaquin Imbriago. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="cursor-pointer group relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300"></div>
              <ArrowUp className="relative z-10 w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
