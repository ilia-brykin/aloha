import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  APlacements,
  APopover,
  ASelect,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePopoverPlacement",
  components: {
    APopover,
    ASelect,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const placement = ref("top");
    // "auto…": the side with the most space
    const placements = APlacements.map(id => ({ id }));

    return {
      codeHtml,
      codeJs,
      placement,
      placements,
    };
  },
};
