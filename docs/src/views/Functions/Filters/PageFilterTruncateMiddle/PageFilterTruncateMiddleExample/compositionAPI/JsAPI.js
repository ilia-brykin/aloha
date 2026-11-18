import {
  computed,
} from "vue";

import {
  filterTruncateMiddle,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55-7a1d2e3f4b5c");
// ${ filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55-7a1d2e3f4b5c") }

filterTruncateMiddle("Short");
// ${ filterTruncateMiddle("Short") }`;
  });

  return {
    codeJs,
  };
}
