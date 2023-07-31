export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInputNumber from "aloha-vue/src/ui/AInputNumber/AInputNumber";
import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressClassProgressBarFunction",
  components: {
    AInputNumber,
    AProgress,
  },
  setup() {    
    const getClassProgressBar = percent => {
      if (percent >= 80) {
        return "a_bg_danger";
      }
      if (percent > 50) {
        return "a_bg_warning";
      }
      return "a_bg_success";
    };
    const model = ref(50);

    return {
      getClassProgressBar,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
