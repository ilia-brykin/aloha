import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../ATranslation/compositionAPI/ATranslationAPI";

export default {
  install: (app, options, language) => {
    setI18n(options);
    setLanguage(language);
    updateTranslation();
  },
};
