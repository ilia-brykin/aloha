import {
  computed,
} from "vue";

import {
  filterNumberCompact,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterNumberCompact(15300, { minValue: 100000 });
// ${ filterNumberCompact(15300, { minValue: 100000 }) }

filterNumberCompact(153000, { minValue: 100000 });
// ${ filterNumberCompact(153000, { minValue: 100000 }) }`;
  });

  return {
    codeJs,
  };
}
