export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AAlert from "aloha-vue/src/AAlert/AAlert";
    
export default {
  name: "PageAlertExposes",
  components: {
    AAlert,
  },
  setup() {
    const alertRef = ref(undefined);
    
    setTimeout(() => {
      console.log("alertRef.value", alertRef.value);
      console.log("alertRef.value.close", alertRef.value.close);
      console.log("alertRef.value.isHidden", alertRef.value.isHidden);
    }, 300);
    
    return {
      alertRef,
    };
  },
};`;

  return {
    codeJs,
  };
}
