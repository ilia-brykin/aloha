export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    const languages = ["Deutsch", "English", "Español", "Français", "Hrvatski", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "العربية"];

    return {
      languages,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
