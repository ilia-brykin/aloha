import {
  computed,
} from "vue";

import {
  filterDateRelative,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDateRelative("2026-01-01", { now: "2026-03-10" });
// ${ filterDateRelative("2026-01-01", { now: "2026-03-10" }) }

filterDateRelative("2026-03-10T12:00:00", { now: "2026-03-10T11:58:00" });
// ${ filterDateRelative("2026-03-10T12:00:00", { now: "2026-03-10T11:58:00" }) }`;
  });

  return {
    codeJs,
  };
}
