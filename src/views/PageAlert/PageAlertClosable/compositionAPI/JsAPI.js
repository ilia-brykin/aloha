export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AAlert from "aloha-vue/src/AAlert/AAlert";
import AButton from "aloha-vue/src/AAlert/AButton";
    
export default {
  name: "PageAlertClosable",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const isAlertVisible = ref(true);

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
