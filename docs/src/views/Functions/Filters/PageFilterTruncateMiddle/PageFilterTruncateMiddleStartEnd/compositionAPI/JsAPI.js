import {
  computed,
} from "vue";

import {
  filterTruncateMiddle,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterTruncateMiddle("DE89370400440532013000", { start: 4, end: 4 });
// ${ filterTruncateMiddle("DE89370400440532013000", { start: 4, end: 4 }) }

filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55", { start: 8, end: 0 });
// ${ filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55", { start: 8, end: 0 }) }`;
  });

  return {
    codeJs,
  };
}
