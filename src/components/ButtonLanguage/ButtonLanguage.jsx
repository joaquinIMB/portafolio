import { useLanguageStore } from "@/app/store";
import { Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ButtonLanguage = ({ showMenu }) => {
  const [showLanguage, setShowLanguage] = useState(false);
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

  const handleClickLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    localStorage.removeItem("language");
    localStorage.setItem("language", lang);
    setShowLanguage(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleClickLanguage}
        aria-label="language"
        className="bg-gray-100 hover:bg-white transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        type="button"
      >
        <Globe className="w-6 h-6 text-gray-900 hover:text-black" />
      </button>

      {showLanguage && (
        <div
          className={`absolute right-0 w-28 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50 ${
            showMenu
              ? "bottom-full mb-2 origin-bottom-right"
              : "mt-2 origin-top-right"
          }`}
        >
          <div className="py-2 px-2 flex flex-col text-center text-sm text-gray-700">
            <button
              onClick={() => selectLanguage("es")}
              className={`hover:bg-gray-100 rounded p-1 cursor-pointer ${
                language === "es" ? "font-bold text-cyan-600" : ""
              }`}
            >
              Español
            </button>
            <button
              onClick={() => selectLanguage("en")}
              className={`hover:bg-gray-100 rounded p-1 cursor-pointer ${
                language === "en" ? "font-bold text-cyan-600" : ""
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonLanguage;
