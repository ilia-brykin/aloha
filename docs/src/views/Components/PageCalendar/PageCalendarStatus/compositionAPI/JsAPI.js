export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Confirmed", start: "2026-03-09T09:00:00", end: "2026-03-09T10:00:00" },
      { id: 2, label: "Maybe", start: "2026-03-10T11:00:00", end: "2026-03-10T12:00:00", status: "tentative" },
      { id: 3, label: "Cancelled", start: "2026-03-11T14:00:00", end: "2026-03-11T15:00:00", status: "cancelled", color: "danger" },
    ]);
    const model = ref("2026-03-11");

    return {
      events,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
