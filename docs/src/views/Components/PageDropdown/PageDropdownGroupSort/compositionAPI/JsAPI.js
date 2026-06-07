export default function JsAPI() {
  const codeJs = `import {
  ADropdown,
} from "aloha-vue";

export default {
  name: "PageDropdownGroupSort",
  components: {
    ADropdown,
  },
  setup() {
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
      dropdownActions,
      groupLabelCallback,
    };
  },
};`;

  return {
    codeJs,
  };
}
