import {
  ref,
} from "vue";

import ADatepickerRange from "../../../../../../src/ui/ADatepickerRange/ADatepickerRange";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDatepickerRangeHelpText",
  components: {
    ADatepickerRange,
    AlohaExample,
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
