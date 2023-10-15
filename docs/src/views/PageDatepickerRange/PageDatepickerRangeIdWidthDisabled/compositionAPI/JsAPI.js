export default function JsAPI() {
  const codeJs = `import { ref } from 'vue';
  
import ADatepickerRange from "../../../../../src/ui/ADatepickerRange/ADatepickerRange";

export default {
  name: "PageDatepickerRangeIdWidthDisabled",
  components: {
    ADatepickerRange,
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
};`;

  return {
    codeJs,
  };
}
