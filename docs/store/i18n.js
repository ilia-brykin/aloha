import de from "../i18n/de.json";
import en from "../i18n/en.json";
import ru from "../i18n/ru.json";
import hr from "../i18n/hr.json";

const LANGUAGES = {
  de,
  en,
  ru,
  hr,
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
