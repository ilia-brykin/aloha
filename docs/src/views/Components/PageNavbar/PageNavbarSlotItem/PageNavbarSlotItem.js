import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ANavbar,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNavbarSlotItem",
  components: {
    AlohaExample,
    ANavbar,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const data = [
      { id: "inbox", label: "Inbox", href: "#navbar_inbox", count: 12 },
      { id: "tasks",
        label: "Tasks",
        children: [
          { id: "open", label: "Open", href: "#navbar_open", count: 3 },
          { id: "done", label: "Done", href: "#navbar_done" },
        ] },
      { id: "settings", label: "Settings", href: "#navbar_settings" },
    ];

    return {
      codeHtml,
      codeJs,
      data,
    };
  },
};
