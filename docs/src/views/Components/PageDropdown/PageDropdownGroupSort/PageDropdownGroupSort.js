import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADropdown,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDropdownGroupSort",
  components: {
    ADropdown,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_DEPLOY_NOW_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_RESTART_WORKER_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_ARCHIVE_REPORT_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_LOW_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_SYNC_CONTACTS_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_NORMAL_",
        callback: () => {},
      },
    ];

    const groupLabelCallback = ({ group }) => {
      const labels = {
        _A_DROPDOWN_GROUP_PRIORITY_CRITICAL_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_",
        _A_DROPDOWN_GROUP_PRIORITY_LOW_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_",
        _A_DROPDOWN_GROUP_PRIORITY_MEDIUM_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_",
        _A_DROPDOWN_GROUP_PRIORITY_NORMAL_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_",
      };

      return labels[group] || group;
    };

    return {
      codeHtml,
      codeJs,
      dropdownActions,
      groupLabelCallback,
    };
  },
};
