import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "@/locales/en/home.json";
import homeFR from "@/locales/fr/home.json";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        home: homeEN,
      },
      fr: {
        home: homeFR,
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
