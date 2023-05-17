export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkLoading",
  components: {
    AButton,
    ALink,
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
