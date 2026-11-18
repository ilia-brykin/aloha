import {
  computed,
} from "vue";

import {
  filterDuration,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDuration(1500, { sourceUnits: "ms" });
// ${ filterDuration(1500, { sourceUnits: "ms" }) }

filterDuration(90, { sourceUnits: "m" });
// ${ filterDuration(90, { sourceUnits: "m" }) }

filterDuration(1.5, { sourceUnits: "h" });
// ${ filterDuration(1.5, { sourceUnits: "h" }) }`;
  });

  return {
    codeJs,
  };
}
