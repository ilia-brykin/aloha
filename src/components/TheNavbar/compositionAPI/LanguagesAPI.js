import {
  ref,
} from "vue";

import {
  setLanguage,
} from "../../../../../src/ATranslation/compositionAPI/ATranslationAPI";

export default function LanguagesAPI() {
  const modelLanguage = ref("de");
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
      setLanguage(modelLanguage.value);
    });
  };

  return {
    changeLanguage,
    languages,
    modelLanguage,
  };
}
