import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: null,
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));