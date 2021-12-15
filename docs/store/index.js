import {
  createStore,
} from "vuex";

import i18n from "./i18n";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  modules: {
    i18n,
  },
});
