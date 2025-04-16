import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "es",
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));