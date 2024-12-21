export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageAlertExposes",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const alertRef = ref(undefined);

    const closeAlert = () => {
      alertRef.value.close();
    };

    const showAlert = () => {
      alertRef.value.isHidden = false;
    };
    
    return {
      closeAlert,
      showAlert,
    };
  },
};`;

  return {
    codeJs,
  };
}
