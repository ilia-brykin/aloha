import {
  computed,
} from "vue";

import {
  filterDateRelative,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00" });
// ${ filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00" }) }

filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00", numeric: "always" });
// ${ filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00", numeric: "always" }) }`;
  });

  return {
    codeJs,
  };
}
