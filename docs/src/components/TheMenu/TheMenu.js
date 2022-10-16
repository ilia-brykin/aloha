import AMenu from "../../../../src/AMenu/AMenu";

import TheMenuItem from "../TheMenuItem/TheMenuItem.vue";

export default {
  name: "TheMenu",
  components: {
    AMenu,
    TheMenuItem,
  },
  data() {
    return {
      menuItems: [
        {
          group: "Aloha",
          id: "spinner",
          label: "Spinner",
          to: {
            name: "PageSpinner",
          },
          icon: "Duplicate",
        },
        {
          group: "Aloha",
          id: "table",
          label: "Table",
          to: {
            name: "PageTable",
          },
          icon: "Envelope",
        },
        {
          group: "Hola",
          id: "collapse",
          label: "Collapse",
          to: {
            name: "PageCollapse",
          },
          icon: "Export",
        },
        {
          group: "Hola",
          id: "cloak",
          label: "Cloak",
          to: {
            name: "PageCloak",
          },
          icon: "EyeOpen",
        },
        {
          group: "Hola",
          id: "loading",
          label: "Loading",
          to: {
            name: "PageLoading",
          },
          icon: "EyeOpen",
        },
        {
          id: "ui",
          label: "ui",
          icon: "Export",
        },
        {
          id: "ui-child",
          label: "Child",
          parent: "ui",
        },
        {
          id: "input",
          to: {
            name: "PageInput",
          },
          label: "Input",
          parent: "ui-child",
        },
        {
          id: "input",
          to: {
            name: "PageInput",
          },
          label: "Input",
          parent: "ui",
        },
        {
          id: "json",
          label: "JSON",
          to: {
            name: "PageAJson",
          },
          parent: "ui",
        },
        {
          id: "tinyMce",
          label: "TinyMce",
          to: {
            name: "PageTinyMce",
          },
          parent: "ui",
        },
        {
          id: "accordion",
          label: "Accordion",
          to: {
            name: "PageAccordion",
          },
          icon: "Duplicate",
        },
        {
          id: "alert",
          label: "Alert",
          to: {
            name: "PageAlert",
          },
          icon: "Home",
        },
        {
          id: "modal",
          label: "Modal",
          to: {
            name: "PageModal",
          },
          icon: "Lock",
        },
        {
          id: "confirm",
          label: "Confirm",
          to: {
            name: "PageConfirm",
          },
          icon: "Minus",
        },
        {
          id: "notification",
          label: "Notification",
          to: {
            name: "PageNotification",
          },
          icon: "Duplicate",
        },
        {
          id: "checkbox",
          label: "Checkbox",
          to: {
            name: "PageCheckbox",
          },
          parent: "ui",
        },
        {
          id: "radio",
          label: "Radio",
          to: {
            name: "PageRadio",
          },
          parent: "ui",
        },
        {
          id: "datepicker",
          label: "Datepicker",
          to: {
            name: "PageDatepicker",
          },
          parent: "ui",
        },
        {
          id: "select",
          label: "Select",
          to: {
            name: "PageSelect",
          },
          parent: "ui",
        },
        {
          id: "form",
          label: "Form",
          to: {
            name: "PageForm",
          },
          parent: "ui",
        },
        {
          id: "dropdown",
          label: "Dropdown",
          to: {
            name: "PageDropdown",
          },
          icon: "Cog",
        },
        {
          id: "tabs",
          label: "Tabs",
          to: {
            name: "PageTabs",
          },
          icon: "Cross",
        },
        {
          id: "progress",
          label: "Progress",
          to: {
            name: "PageProgress",
          },
          icon: "Dnd",
        },
        {
          id: "list",
          label: "List",
          to: {
            name: "PageList",
          },
          icon: "Bla",
        },
      ],
    };
  },
};
