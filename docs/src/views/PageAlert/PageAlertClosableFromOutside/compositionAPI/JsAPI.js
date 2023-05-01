export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AAlert from "aloha-vue/src/AAlert/AAlert";
import AButton from "aloha-vue/src/AAlert/AButton";
    
export default {
  name: "PageAlertClosableFromOutside",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const isAlertVisible = ref(false);

    const showAlert = () => {
      isAlertVisible.value = true;
    };

    const hideAlert = () => {
      isAlertVisible.value = false;
    };
    
    return {
      hideAlert,
      isAlertVisible,
      showAlert,
    };
  },
};`;

  return {
    codeJs,
  };
}
