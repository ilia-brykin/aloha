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
    const modelAppointment = ref("2025-03-05T09:30");
    const modelMeasurement = ref("14:30:15");

    return {
      modelAppointment,
      modelMeasurement,
    };
  },
};`;

  return {
    codeJs,
  };
}
