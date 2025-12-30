import es from "./es.json";
import en from "./en.json";

const translations = { es, en };

export function t(lang: "es" | "en", key: string) {
    return key.split(".").reduce((obj: any, i) => obj[i], translations[lang]);
}