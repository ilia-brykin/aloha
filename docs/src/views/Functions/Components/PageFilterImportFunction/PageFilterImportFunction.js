import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterImportFunction",
  components: {
    AlohaExample,
  },
  props: {
    functionName: {
      type: String,
      required: true,
    },
    typeImport: {
      type: String,
      required: true,
      validator: value => ["filters", "utils", "utilsMath"].indexOf(value) !== -1,
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
