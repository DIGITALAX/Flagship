import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["queryString", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: {
          key: "value",
        },
      },
    },
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
