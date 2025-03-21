import {
  ref,
} from "vue";

import {
  setLanguage,
} from "aloha-vue";

export const modelLanguage = ref("de");

export default function LanguagesAPI() {
  const languages = [
    {
      label: "Deutsch",
      value: "de",
    },
    {
      label: "English",
      value: "en",
    },
    {
      label: "Русский",
      value: "ru",
    },
    {
      label: "Hrvatski",
      value: "hr",
    },
    {
      label: "Français",
      value: "fr",
    },
    {
      label: "عربي",
      value: "ar",
    },
    {
      label: "español",
      value: "es",
    },
    {
      label: "Italiano",
      value: "it",
    },
  ];

  const changeLanguage = () => {
    setTimeout(() => {
      localStorage.setItem("language", modelLanguage.value);
      setLanguage(modelLanguage.value);
    });
  };

  return {
    changeLanguage,
    languages,
    modelLanguage,
  };
}

export function setLanguageFromLocalStorage() {
  modelLanguage.value = localStorage.getItem("language") || "de";
}

