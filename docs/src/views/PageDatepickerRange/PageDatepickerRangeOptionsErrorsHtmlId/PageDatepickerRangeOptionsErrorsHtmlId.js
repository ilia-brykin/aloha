import {
  ref,
} from "vue";

import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDatepickerRangeOptionsErrorsHtmlId",
  components: {
    ADatepickerRange,
    AlohaExample,
  },
  setup() {
    const dateRangeModel = ref({
      date_after: null,
      date_before: null,
    });

    const options = ref({
      format: "DD.MM.YY",
    });
    const errors = ref(["Start date is required", "End date is invalid"]);

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
      options,
      dateRangeModel,
      updateDateRange,
      errors,
      codeHtml,
      codeJs,
    };
  },
};
