"use client";

import { useLanguage } from "../lib/i18n/language-context";

const languages = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文",
} as const;

type Language = keyof typeof languages;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(event) => {
        const nextLanguage = event.target.value as Language;
        (setLanguage as (language: Language) => void)(nextLanguage);
      }}
      aria-label="Language"
      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-50 focus:border-indigo-400"
    >
      {(Object.entries(languages) as Array<[Language, string]>).map(
        ([code, label]) => (
          <option key={code} value={code}>
            {code === "en"
              ? "🇺🇸"
              : code === "vi"
                ? "🇻🇳"
                : "🇨🇳"}{" "}
            {label}
          </option>
        )
      )}
    </select>
  );
}