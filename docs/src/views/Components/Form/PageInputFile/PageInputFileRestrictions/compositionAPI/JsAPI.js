export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileRestrictions",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);
    const rejected = ref([]);

    const onReject = ({ files }) => {
      rejected.value = files.map(({ name, reason }) => \`\${ name }: \${ reason }\`);
    };

    return {
      model,
      onReject,
      rejected,
    };
  },
};`;

  return {
    codeJs,
  };
}
