export default function JsAPI() {
  const codeJs = `import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";

export default {
  name: "PageDatepickerRangeModelInputIdPrefixIsError",
  components: {
    ADatepickerRange,
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
};`;

  return {
    codeJs,
  };
}
