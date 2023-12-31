import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterDefaultForEmptyImportCompositionApi",
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
