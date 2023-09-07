import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AInputNumberRange from "../../../../../../src/ui/AInputNumberRange/AInputNumberRange";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputNumberRangeTypeInteger",
  components: {
    AlohaExample,
    AInputNumberRange,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const model = ref(undefined);

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
