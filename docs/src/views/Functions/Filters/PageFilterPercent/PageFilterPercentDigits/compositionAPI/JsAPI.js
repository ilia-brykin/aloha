import {
  computed,
} from "vue";

import {
  filterPercent,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterPercent(15.36, { digits: 1 });
// ${ filterPercent(15.36, { digits: 1 }) }

filterPercent(12345, { digits: 0, digitGrouping: false });
// ${ filterPercent(12345, { digits: 0, digitGrouping: false }) }`;
  });

  return {
    codeJs,
  };
}
