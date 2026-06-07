export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";

import {
  ADropdown,
} from "aloha-vue";
import AOneCheckbox from "../../../../../../src/ui/AOneCheckbox/AOneCheckbox";

export default {
  name: "PageDropdownGroupHideEmpty",
  components: {
    ADropdown,
    AOneCheckbox,
  },
  setup() {
    const isDevelopmentVisible = ref(true);
    const isSettingsVisible = ref(true);

    const dropdownActions = computed(() => {
      return [
        {
          text: "_A_DROPDOWN_ACTION_INVOICES_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_BUSINESS_",
          section: "_A_DROPDOWN_GROUP_FINANCE_",
          callback: () => {},
        },
        {
          text: "_A_DROPDOWN_ACTION_MESSAGES_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
          section: "_A_DROPDOWN_GROUP_INBOX_",
          callback: () => {},
        },
        {
          text: "_A_DROPDOWN_ACTION_FRONTEND_BOARD_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
          section: "_A_DROPDOWN_GROUP_PROJECTS_",
          callback: () => {},
          isHidden: !isDevelopmentVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_DEPLOYMENTS_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
          section: "_A_DROPDOWN_GROUP_RELEASE_",
          callback: () => {},
          isHidden: !isDevelopmentVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_USERS_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_SETTINGS_",
          section: "_A_DROPDOWN_GROUP_ACCESS_",
          callback: () => {},
          isHidden: !isSettingsVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_SECURITY_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_SETTINGS_",
          section: "_A_DROPDOWN_GROUP_WORKSPACE_",
          callback: () => {},
          isHidden: !isSettingsVisible.value,
        },
      ];
    });

    return {
      dropdownActions,
      isDevelopmentVisible,
      isSettingsVisible,
    };
  },
};`;

  return {
    codeJs,
  };
}
