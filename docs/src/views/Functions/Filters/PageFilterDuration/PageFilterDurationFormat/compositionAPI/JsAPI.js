import {
  computed,
} from "vue";

import {
  filterDuration,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDuration(3725, { format: "clock" });
// ${ filterDuration(3725, { format: "clock" }) }

filterDuration(90061, { format: "clock" });
// ${ filterDuration(90061, { format: "clock" }) }`;
  });

  return {
    codeJs,
  };
}
