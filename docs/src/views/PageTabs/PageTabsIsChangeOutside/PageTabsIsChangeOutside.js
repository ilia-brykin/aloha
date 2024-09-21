import {
  ref,
} from "vue";

import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ATabs from "../../../../../src/ATabs/ATabs";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTabsIsChangeOutside",
  components: {
    AlohaExample,
    ATabs,
  },
  setup() {
    const activeTabId = ref("1");
    const data = [
      {
        label: "Tab 1",
        content: "Content 1",
        id: "1",
      },
      {
        label: "Tab 2",
        content: "Content 2",
        id: "2",
      },
      {
        label: "Tab 3",
        content: "Content 3",
        id: "3",
      },
      {
        label: "Tab 4",
        content: "Content 4",
        id: "4",
      },
    ];

    const changeTab = ({ $event, tab, tabId, index }) => {
      console.log("$event, tab, tabId, index", $event, tab, tabId, index);
      activeTabId.value = tabId;
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      activeTabId,
      changeTab,
      codeHtml,
      codeJs,
      data,
    };
  },
};
