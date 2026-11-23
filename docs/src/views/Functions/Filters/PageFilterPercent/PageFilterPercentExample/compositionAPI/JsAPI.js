import {
  computed,
} from "vue";

import {
  filterPercent,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterPercent(15.3);
// ${ filterPercent(15.3) }

filterPercent("99,5");
// ${ filterPercent("99,5") }

filterPercent(12345.678);
// ${ filterPercent(12345.678) }`;
  });

  return {
    codeJs,
  };
}
