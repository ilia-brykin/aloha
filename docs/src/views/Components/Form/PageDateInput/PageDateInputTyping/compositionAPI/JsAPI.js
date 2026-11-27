export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);
    // time "HH:mm", date "YYYY-MM-DD" or null
    const isLunch = time => time >= "12:00" && time < "13:00";

    return {
      isLunch,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
