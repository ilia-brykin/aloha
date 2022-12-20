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
          id: "cloak2",
          label: "Cloak disabled",
          to: {
            name: "PageCloak",
          },
          icon: "EyeOpen",
          disabled: true,
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
          children: [
            {
              id: "ui-child",
              label: "Child",
              children: [
                {
                  id: "input",
                  to: {
                    name: "PageInput",
                  },
                  label: "Input",
                },
              ],
            },
            {
              id: "input",
              to: {
                name: "PageInput",
              },
              label: "Input",
            },
            {
              id: "json",
              label: "JSON",
              to: {
                name: "PageAJson",
              },
            },
            {
              id: "tinyMce",
              label: "TinyMce",
              to: {
                name: "PageTinyMce",
              },
            },
            {
              id: "checkbox",
              label: "Checkbox",
              to: {
                name: "PageCheckbox",
              },
            },
            {
              id: "slotItem",
              label: "Slot",
              slot: "slotItem",
              to: {
                name: "PageRadio",
              },
            },
            {
              id: "radio",
              label: "Radio",
              to: {
                name: "PageRadio",
              },
            },
            {
              id: "datepicker",
              label: "Datepicker",
              to: {
                name: "PageDatepicker",
              },
            },
            {
              id: "select",
              label: "Select",
              to: {
                name: "PageSelect",
              },
            },
            {
              id: "form",
              label: "Form",
              to: {
                name: "PageForm",
              },
            },
          ],
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
          id: "accordion2",
          label: "Accordion seeeeeehr lange name",
          icon: "Duplicate",
          children: [
            {
              id: "accordion3",
              label: "Accordion seeeeeehr lange name",
              to: {
                name: "PageAccordion",
              },
            },
          ],
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
        {
          id: "scale",
          label: "Scale",
          to: {
            name: "PageScale",
          },
          icon: "Dnd",
        },
        {
          id: "title",
          label: "Title",
          to: {
            name: "PageTitle",
          },
          icon: "Dnd",
          titleHtml: "PageTitle",
        },
      ],
    };
  },
};
