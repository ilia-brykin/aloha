import {
  ref,
} from "vue";

import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDatepickerRangeBasic",
  components: {
    ADatepickerRange,
    AlohaExample,
  },
  setup() {
    const dateRangeModel = ref({
      date_after: null,
      date_before: null,
    });

    const updateDateRange = newRange => {
      dateRangeModel.value = newRange.model;
    };

    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      dateRangeModel,
      updateDateRange,
      codeHtml,
      codeJs,
    };
  },
};
