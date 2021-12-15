import de from "../i18n/de.json";
import en from "../i18n/en.json";
import ru from "../i18n/ru.json";

const LANGUAGES = {
  de,
  en,
  ru,
};

export default {
  namespaced: true,
  state() {
    return {
      translation: {},
    };
  },
  getters: {
    translation(state) {
      return state.translation;
    },
  },
  mutations: {
    addTranslation(state, languageKey) {
      state.translation = LANGUAGES[languageKey];
    },
  },
};
