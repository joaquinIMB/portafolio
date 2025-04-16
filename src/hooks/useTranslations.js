import { useLanguageStore } from "@/app/store";
import { translations } from "@/utils/translations";

export const useTranslations = () => {
  const { language } = useLanguageStore();
  const selectedLanguage = translations[language];

  return selectedLanguage ?? translations["en"];
};
