export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};`;

  return {
    codeJs,
  };
}
