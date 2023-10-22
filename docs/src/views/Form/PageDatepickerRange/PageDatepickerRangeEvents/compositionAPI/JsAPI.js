export default function JsAPI() {
  const codeJs = `import { ref } from 'vue';
  
import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";

export default {
  name: "PageDatepickerRangeOptionsEvents",
  components: {
    ADatepickerRange,
  },
  setup() {
    const dateRangeModel = ref({
      date_after: null,
      date_before: null,
    });

    const handleFocus = () => console.log("Focused!");
    const handleChange = () => console.log("Changed!");

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
      handleFocus,
      updateDateRange,
      handleChange,
      dateRangeModel,
      codeHtml,
      codeJs,
    };
  },
};`;

  return {
    codeJs,
  };
}
