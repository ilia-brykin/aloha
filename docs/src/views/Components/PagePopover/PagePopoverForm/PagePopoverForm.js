import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AInput,
  APopover,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePopoverForm",
  components: {
    AButton,
    AInput,
    APopover,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const name = ref("Report 2026");
    const saved = ref("");
    // close() of the slot: the popover closes and the focus goes back to the button
    const save = close => {
      saved.value = name.value;
      close();
    };

    return {
      codeHtml,
      codeJs,
      name,
      save,
      saved,
    };
  },
};
