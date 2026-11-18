import {
  computed,
} from "vue";

import {
  filterNumberCompact,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterNumberCompact(1000000);
// ${ filterNumberCompact(1000000) }

filterNumberCompact(1000000, { isTrailingZeros: true });
// ${ filterNumberCompact(1000000, { isTrailingZeros: true }) }`;
  });

  return {
    codeJs,
  };
}
