"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialMedia } from "@/utils/info";
import { Code, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguageStore } from "@/app/store";
import { envioronmentLink } from "@/utils/envioronmentLink";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { language } = useLanguageStore();
  const { footerSection, navLinks } = useTranslations();

  const containerRef = useRef();
  const sectionRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(iconRefs.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={containerRef} className="relative overflow-hidden border-t border-gray-800 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-black to-purple-500/50"></div>

      <div className="relative z-10 mx-auto px-10 py-8 max-md:px-6 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4" ref={(el) => (sectionRefs.current[0] = el)}>
            <div className="flex items-center gap-2">
              <Code className="text-cyan-400 w-6 h-6" />
              <span className="text-white font-bold text-xl">{footerSection.title}</span>
            </div>
            <p className="text-gray-400 max-w-xs">{footerSection.paragraph1}</p>
            <div className="flex space-x-4 pt-2">
              {socialMedia.map((item, i) => {
                const SocialIcon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
                    ref={(el) => (iconRefs.current[i] = el)}
                  >
                    <div className="absolute inset-0 bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300"></div>
                    <SocialIcon className="relative z-10 w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8" ref={(el) => (sectionRefs.current[1] = el)}>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">{footerSection.title2}</h3>
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={envioronmentLink + item.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">{footerSection.title3}</h3>
              <ul className="space-y-2">
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4" ref={(el) => (sectionRefs.current[2] = el)}>
            <h3 className="text-white font-semibold">{footerSection.title4}</h3>
            <p className="text-gray-400">{footerSection.paragraph2}</p>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder={language === "es" ? "Tu correo electrónico" : "Your email"}
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
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {footerSection.copyright}</p>
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
