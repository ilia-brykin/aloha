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
      server: { host: "localhost", port: 8080, tls: false },
      features: ["search", "export", "history"],
      limits: { requests: 1000, burst: 50 },
    });
    const isFullscreen = ref(undefined);
    const onFullscreen = ({ isFullscreen: value }) => {
      isFullscreen.value = value;
    };

    return {
      isFullscreen,
      model,
      onFullscreen,
    };
  },
};`;

  return {
    codeJs,
  };
}
