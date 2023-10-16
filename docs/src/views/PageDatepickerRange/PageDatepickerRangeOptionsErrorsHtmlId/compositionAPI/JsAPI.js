export default function JsAPI() {
  const codeJs = `import { ref } from 'vue';
  
import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";

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
};`;

  return {
    codeJs,
  };
}
