import {
  computed,
} from "vue";

import {
  filterDuration,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDuration(90061, { maxUnits: 2 });
// ${ filterDuration(90061, { maxUnits: 2 }) }

filterDuration(3725, { maxUnits: 1 });
// ${ filterDuration(3725, { maxUnits: 1 }) }`;
  });

  return {
    codeJs,
  };
}
