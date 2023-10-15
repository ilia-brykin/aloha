import {
  ref,
} from "vue";

import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDatepickerRangeModelInputIdPrefixIsError",
  components: {
    ADatepickerRange,
    AlohaExample,
  },
  setup() {
    const dateRangeModel = ref({
      date_after: null,
      date_before: null,
    });

    const idPrefix = ref("datepicker-prefix-");
    const isError = ref(false);

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
      idPrefix,
      isError,
      codeHtml,
      codeJs,
    };
  },
};
