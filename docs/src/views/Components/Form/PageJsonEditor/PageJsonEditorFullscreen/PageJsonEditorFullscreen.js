import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorFullscreen",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

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
      codeHtml,
      codeJs,
      isFullscreen,
      model,
      onFullscreen,
    };
  },
};
