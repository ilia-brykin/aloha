export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementComplex",
  components: {
    AElement,
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
