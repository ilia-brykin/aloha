import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import TypeTranslate from "../../../../components/TypeTranslate/TypeTranslate.vue";
import {
  ATranslation,
} from "aloha-vue";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterArguments",
  components: {
    AlohaExample,
    ATranslation,
    TypeTranslate,
  },
  props: {
    argumentsText: {
      type: Array,
      required: true,
    },
    functionDescription: {
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
