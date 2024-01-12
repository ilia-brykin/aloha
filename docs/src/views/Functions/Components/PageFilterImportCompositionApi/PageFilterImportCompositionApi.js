import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterImportCompositionApi",
  components: {
    AlohaExample,
  },
  props: {
    functionName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      codeJs,
    } = JsAPI(props);

    return {
      codeJs,
    };
  },
};
