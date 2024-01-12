import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import ATranslation from "../../../../../../src/ATranslation/ATranslation";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterArguments",
  components: {
    AlohaExample,
    ATranslation,
  },
  props: {
    functionDescription: {
      type: String,
      required: true,
    },
    placeholder: {
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
