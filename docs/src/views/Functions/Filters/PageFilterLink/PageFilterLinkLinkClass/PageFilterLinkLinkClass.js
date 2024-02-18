import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterLinkLinkClass",
  components: {
    AlohaExample,
  },
  setup() {
    const {
      codeJs,
    } = JsAPI();

    return {
      codeJs,
    };
  },
};
