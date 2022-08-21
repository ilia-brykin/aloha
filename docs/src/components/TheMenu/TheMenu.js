import TheMenuItem from "../TheMenuItem/TheMenuItem.vue";

export default {
  name: "TheMenu",
  components: {
    TheMenuItem,
  },
  data() {
    return {
      menuItems: [
        {
          id: "spinner",
          name: "PageSpinner",
          label: "Spinner",
        },
        {
          id: "table",
          name: "PageTable",
          label: "Table",
        },
        {
          id: "collapse",
          name: "PageCollapse",
          label: "Collapse",
        },
        {
          id: "cloak",
          name: "PageCloak",
          label: "Cloak",
        },
        {
          id: "input",
          name: "PageInput",
          label: "Input",
        },
        {
          id: "json",
          name: "PageAJson",
          label: "JSON",
        },
        {
          id: "accordion",
          name: "PageAccordion",
          label: "Accordion",
        },
        {
          id: "alert",
          name: "PageAlert",
          label: "Alert",
        },
        {
          id: "modal",
          name: "PageModal",
          label: "Modal",
        },
        {
          id: "confirm",
          name: "PageConfirm",
          label: "Confirm",
        },
        {
          id: "notification",
          name: "PageNotification",
          label: "Notification",
        },
        {
          id: "checkbox",
          name: "PageCheckbox",
          label: "Checkbox",
        },
        {
          id: "radio",
          name: "PageRadio",
          label: "Radio",
        },
        {
          id: "select",
          name: "PageSelect",
          label: "Select",
        },
        {
          id: "form",
          name: "PageForm",
          label: "Form",
        },
        {
          id: "dropdown",
          name: "PageDropdown",
          label: "Dropdown",
        },
      ],
    };
  },
};
