import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "uk"], // Поддерживаемые языки
    interpolation: {
      escapeValue: false, // Для React экранирование не нужно
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Подгрузка по namespace
    },
    ns: [
      "about",
      "feedback",
      "footer",
      "gallery",
      "header",
      "hero",
      "hero2",
      "hero3",
      "hero4",
      "news",
      "popularServices",
      "price",
      "recommendations",
      "services",
      "specialists",
    ],
    defaultNS: "header",
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
