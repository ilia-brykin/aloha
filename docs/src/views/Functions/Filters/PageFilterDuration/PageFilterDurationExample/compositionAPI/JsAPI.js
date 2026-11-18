import {
  computed,
} from "vue";

import {
  filterDuration,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDuration(3725);
// ${ filterDuration(3725) }

filterDuration(90061);
// ${ filterDuration(90061) }

filterDuration(0);
// ${ filterDuration(0) }`;
  });

  return {
    codeJs,
  };
}
