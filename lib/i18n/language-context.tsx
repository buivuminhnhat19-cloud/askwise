"use client";

import { useEffect, useState } from "react";
import {
  languages,
  translations,
  type Language,
} from "./translations";

export function useLanguage() {
  const [language, setLanguageState] =
    useState<Language>("en");

  useEffect(() => {
    const saved =
      window.localStorage.getItem("askwise-language");

    if (saved && saved in languages) {
      setLanguageState(saved as Language);
    }
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);

    window.localStorage.setItem(
      "askwise-language",
      nextLanguage
    );

    window.dispatchEvent(
      new CustomEvent("askwise-language-change", {
        detail: nextLanguage,
      })
    );
  }

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;

      if (customEvent.detail in languages) {
        setLanguageState(customEvent.detail);
      }
    };

    window.addEventListener(
      "askwise-language-change",
      handleLanguageChange
    );

    return () => {
      window.removeEventListener(
        "askwise-language-change",
        handleLanguageChange
      );
    };
  }, []);

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}