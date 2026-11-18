import {
  computed,
} from "vue";

import {
  filterDuration,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDuration(90061, { showDays: false });
// ${ filterDuration(90061, { showDays: false }) }`;
  });

  return {
    codeJs,
  };
}
