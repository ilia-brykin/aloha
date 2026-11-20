import {
  computed,
} from "vue";

import {
  filterPercent,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterPercent(0.153, { isFraction: true });
// ${ filterPercent(0.153, { isFraction: true }) }

filterPercent(1, { isFraction: true, digits: 0 });
// ${ filterPercent(1, { isFraction: true, digits: 0 }) }`;
  });

  return {
    codeJs,
  };
}
