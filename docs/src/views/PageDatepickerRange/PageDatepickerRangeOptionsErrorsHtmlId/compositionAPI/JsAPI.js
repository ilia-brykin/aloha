export default function JsAPI() {
  const codeJs = `import { ref } from 'vue';
  
import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";

export default {
  name: "PageDatepickerRangeOptionsErrorsHtmlId",
  components: {
    ADatepickerRange,
  },
  setup() {
    const dateRangeModel = ref({
      date_after: null,
      date_before: null,
    });

    const options = ref({
      value: {
        htmlId: "myDatepicker3",
        id: "date1",
      }
    });
    const errors = ref(["Start date is required", "End date is invalid"]);
    const data = ref(null);
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
      data,
      codeHtml,
      codeJs,
    };
  },
};`;

  return {
    codeJs,
  };
}
