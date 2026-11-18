import {
  computed,
} from "vue";

import {
  filterInitials,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterInitials("anna schmidt", { isUppercase: false });
// ${ filterInitials("anna schmidt", { isUppercase: false }) }`;
  });

  return {
    codeJs,
  };
}
