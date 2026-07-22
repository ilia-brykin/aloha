export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
} from "aloha-vue";

export default {
  name: "PageMultiselectOrderedDataExtra",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
        group: "Main",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
        group: "Main",
      },
    ];
    const dataExtra = [
      {
        value: "extra_1",
        label: "Extra 1",
        group: "Recommended",
      },
      {
        value: "extra_2",
        label: "Extra 2",
        group: "Other",
      },
      {
        value: "extra_3",
        label: "Extra 3",
        group: "Other",
      },
    ];
    const model = ref([]);

    return {
      data,
      dataExtra,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
