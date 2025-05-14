import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const { mainPage } = useTranslations();

  const words = useRef();

  useEffect(() => {
    gsap.fromTo(
      words.current?.children,
      {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "back",
        stagger: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <main
      id="home"
      className="relative duration-300 flex items-center px-20 pt-10 pb-8 w-[90%] max-sm:px-2 max-sm:pb-10 h-[100vh] max-sm:justify-center max-sm:w-[98%] max-sm:text-center transition-all"
    >
      <div className="absolute w-[90%] h-full">
        <div className="absolute w-[150px] h-[150px] rounded-full bg-purple-700 opacity-5 blur-[80px] top-[380px] left-[0px] animate-pulse" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-blue-400 opacity-20 blur-[80px] bottom-[-50px] right-[50px] animate-pulse delay-2000" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-purple-500 opacity-20 blur-[80px] top-[100px] right-[550px] animate-pulse delay-4000" />
      </div>
      <div ref={words} className="relative text-center mx-auto">
        <h1 className="text-[138px] font-bold text-white pt-4 max-[702px]:text-[80px] leading-34 max-[1060px]:text-[102px] max-[1060px]:leading-26 max-[702px]:leading-18 transition-[font-size] duration-300">
          {mainPage.title}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            {mainPage.span}
          </span>
        </h1>
        <h2 className="text-[48px] font-bold text-gray-300 pt-4 max-sm:text-xl max-sm:pt-4 max-[1060px]:text-[30px]  transition-[font-size] duration-300 ">
          {mainPage.paragraph1}
        </h2>
        <p className="text-lg text-gray-400 mt-3 max-sm:px-6">
          {mainPage.paragraph2}
        </p>
        <div className="flex gap-4 mt-8 justify-center">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-opacity hover:opacity-80"
          >
            {mainPage.buttonContact1}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-2 border-2 border-gray-600 text-gray-300 py-3 px-6 rounded-full transition-colors hover:bg-gray-800"
          >
            <Code className="w-5 h-5" />
            {mainPage.buttonAbout}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
