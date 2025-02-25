import moment from "moment/dist/moment";


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
