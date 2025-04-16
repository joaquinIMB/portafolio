import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const Home = () => {

  const { mainPage } = useTranslations();

  return (
    <main
      id="home"
      className="relative duration-300 flex items-center px-20 pt-20 pb-8 w-[90%] max-sm:px-2 max-sm:pb-10 h-[90vh] max-sm:justify-center max-sm:w-[98%] max-sm:text-center transition-all"
    >
      <div className="absolute w-[90%] h-full">
        <div className="absolute w-[150px] h-[150px] rounded-full bg-purple-700 opacity-5 blur-[80px] top-[380px] left-[0px] animate-pulse" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-blue-400 opacity-20 blur-[80px] bottom-[-50px] right-[50px] animate-pulse delay-2000" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-purple-500 opacity-20 blur-[80px] top-[100px] right-[550px] animate-pulse delay-4000" />
      </div>
      <div className="relative max-w-3xl">
        <span className="text-cyan-500 text-xl font-mono">
          {"<FullStack />"}
        </span>
        <h1 className="text-7xl font-bold text-white pt-4 max-sm:text-6xl">
          {mainPage.title}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            {mainPage.span}
          </span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-300 pt-4 max-sm:text-xl max-sm:pt-6">
          {mainPage.paragraph1}
        </h2>
        <p className="text-lg text-gray-400 mt-4">{mainPage.paragraph2}</p>
        <div className="flex gap-4 mt-8 max-sm:justify-center">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-opacity hover:opacity-80"
          >
            {mainPage.buttonContact1}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 border border-gray-600 text-gray-300 py-3 px-6 rounded-full transition-colors hover:bg-gray-800"
          >
            <Code className="w-5 h-5" />
            {mainPage.buttonContact2}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
