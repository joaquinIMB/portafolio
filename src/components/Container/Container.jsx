"use client";
import { useEffect } from "react";
import { useLanguageStore } from "@/app/store";

const Container = ({ children }) => {
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
  return language ? (
    <div
      className={`min-h-[100vh] flex flex-col items-center py-0 px-0 justify-center`}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export default Container;
