import "server-only";

const dictionaries = {
  en: () =>
    import("./../dictionaries/en.json").then((module) => module.default),
  es: () =>
    import("./../dictionaries/es.json").then((module) => module.default),
  br: () =>
    import("./../dictionaries/br.json").then((module) => module.default),
  ar: () =>
    import("./../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) =>
  (dictionaries?.[locale] ?? dictionaries.en)();
