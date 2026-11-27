export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com", "carl@example.com", "dora@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    });
    const paths = ref([]);
    const onSelectionChange = ({ paths: selected }) => {
      paths.value = selected;
    };

    return {
      model,
      onSelectionChange,
      paths,
    };
  },
};`;

  return {
    codeJs,
  };
}
