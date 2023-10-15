import {
  ref,
} from "vue";

import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDatepickerRangeIdWidthDisabled",
  components: {
    ADatepickerRange,
    AlohaExample,
  },
  setup() {
    const isDisabled = ref(true);

    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      isDisabled,
      codeHtml,
      codeJs,
    };
  },
};
