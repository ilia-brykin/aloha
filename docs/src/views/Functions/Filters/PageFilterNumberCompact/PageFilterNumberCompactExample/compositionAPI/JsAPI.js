import {
  computed,
} from "vue";

import {
  filterNumberCompact,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterNumberCompact(1234567);
// ${ filterNumberCompact(1234567) }

filterNumberCompact(15300);
// ${ filterNumberCompact(15300) }

filterNumberCompact(2500000000);
// ${ filterNumberCompact(2500000000) }

filterNumberCompact(999);
// ${ filterNumberCompact(999) }`;
  });

  return {
    codeJs,
  };
}
