import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DE } from "./translations/de/de";
import { EN } from "./translations/en/en";
import { RU } from "./translations/ru/ru";

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  de: {
    translation: DE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
});

export default i18n;
