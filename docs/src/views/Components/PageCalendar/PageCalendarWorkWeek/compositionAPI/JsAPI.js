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
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
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
