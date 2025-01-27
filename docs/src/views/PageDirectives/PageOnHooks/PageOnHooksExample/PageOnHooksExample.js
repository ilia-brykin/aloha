import {
  AOnHooks,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageOnHooksExample",
  components: {
    AlohaExample,
  },
  directives: {
    AOnHooks,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const onCreated = (el, binding) => {
      console.log("created", el, binding);
    };

    const onBeforeMount = (el, binding) => {
      console.log("beforeMount", el, binding);
    };

    const onMounted = (el, binding) => {
      console.log("mounted", el, binding);
    };

    const onBeforeUnmount = (el, binding) => {
      console.log("beforeUnmount", el, binding);
    };

    const onUnmounted = (el, binding) => {
      console.log("unmounted", el, binding);
    };

    return {
      codeHtml,
      codeJs,
      onBeforeMount,
      onBeforeUnmount,
      onCreated,
      onMounted,
      onUnmounted,
    };
  },
};
