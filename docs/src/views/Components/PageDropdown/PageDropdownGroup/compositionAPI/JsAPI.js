export default function JsAPI() {
  const codeJs = `import {
  ADropdown,
} from "aloha-vue";

export default {
  name: "PageDropdownGroup",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_OVERVIEW_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_RECENT_ACTIVITY_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_CREATE_INVOICE_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_FINANCE_",
        subsection: "_A_DROPDOWN_GROUP_INVOICES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_EXPENSE_REPORT_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_FINANCE_",
        subsection: "_A_DROPDOWN_GROUP_REPORTS_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_MARKETING_",
        subsection: "_A_DROPDOWN_GROUP_CAMPAIGNS_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_INBOX_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
        section: "_A_DROPDOWN_GROUP_EMAIL_",
        subsection: "_A_DROPDOWN_GROUP_MESSAGES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_MEETING_NOTES_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
        section: "_A_DROPDOWN_GROUP_MEETINGS_",
        subsection: "_A_DROPDOWN_GROUP_NOTES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_FRONTEND_BOARD_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_PROJECTS_",
        subsection: "_A_DROPDOWN_GROUP_FRONTEND_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_BACKEND_BOARD_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_PROJECTS_",
        subsection: "_A_DROPDOWN_GROUP_BACKEND_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_DEPLOYMENTS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_RELEASE_",
        subsection: "_A_DROPDOWN_GROUP_PRODUCTION_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_USERS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_ACCESS_",
        subsection: "_A_DROPDOWN_GROUP_TEAM_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_API_TOKENS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_ACCESS_",
        subsection: "_A_DROPDOWN_GROUP_SECURITY_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_APPEARANCE_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_WORKSPACE_",
        subsection: "_A_DROPDOWN_GROUP_THEME_",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`;

  return {
    codeJs,
  };
}
