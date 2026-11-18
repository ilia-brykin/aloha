import {
  computed,
} from "vue";

import {
  filterNumberCompact,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterNumberCompact(1234567, { digits: 2 });
// ${ filterNumberCompact(1234567, { digits: 2 }) }

filterNumberCompact(1234567, { digits: 0 });
// ${ filterNumberCompact(1234567, { digits: 0 }) }`;
  });

  return {
    codeJs,
  };
}
