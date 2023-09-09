import {
  ref,
} from "vue";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../ATranslation/compositionAPI/ATranslationAPI";

import {
  isFunction,
} from "lodash-es";

export const translateConfig = ref({
  replaceText: undefined,
});

const setTranslateConfig = (config = {}) => {
  if (isFunction(config?.replaceText)) {
    translateConfig.value.replaceText = config?.replaceText;
  }
};

export default {
  install: (app, options, language, config = {}) => {
    setI18n(options);
    setLanguage(language);
    updateTranslation();
    setTranslateConfig(config);
  },
};
