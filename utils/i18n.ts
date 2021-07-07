import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./i18n/en/en.json";
import translationFr from "./i18n/fr-FR/fr.json";
import tanslationTr from "./i18n/tr-TR/tr.json";
import { Lang } from "./types";

export const languages: Lang[] = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "fr",
    name: "Français",
  },
  {
    code: "tr",
    name: "Turkish",
  },
];

i18n.use(initReactI18next).init({
  supportedLngs: ["en", "fr", "tr"],
  resources: {
    en: {
      translation: translationEn,
    },
    fr: {
      translation: translationFr,
    },
    tr: {
      translation: tanslationTr,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
