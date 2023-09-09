import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../ATranslation/compositionAPI/ATranslationAPI";

export const translateConfig = {
  replaceText: undefined,
};

const setTranslateConfig = (config = {}) => {
  translateConfig.replaceText = config?.replaceText;
};

export default {
  install: (app, options, language, {
    config = {},
  } = {}) => {
    setI18n(options);
    setLanguage(language);
    updateTranslation();
    setTranslateConfig(config);
  },
};
