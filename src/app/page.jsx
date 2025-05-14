"use client";

import HomePage from "@/components/MainPage/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe/ContactMe";
import { useLanguageStore } from "./store";
import { useEffect } from "react";

export default function Home() {
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");

    if (storedLang) {
      return setLanguage(storedLang);
    }

    const browserLang = navigator.language.slice(0, 2);
    const validLang = ["es", "en"].includes(browserLang) ? browserLang : "en";

    localStorage.setItem("language", validLang);
    return setLanguage(validLang);
  }, []);

  return (
    language && (
      <>
        <HomePage />
        <AboutMe />
        <Services />
        <Projects />
        <ContactMe />
      </>
    )
  );
}
