import {
  reactive,
} from "vue";

export default {
  install: (app, options, language) => {
    app.config.globalProperties.$i18n = reactive({ language: language });
    app.provide("i18n", options);
  },
};
