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
          icon: "HourglassSplit",
        },
        {
          group: "Aloha",
          id: "table",
          label: "Table",
          to: {
            name: "PageTable",
          },
          icon: "Table",
        },
        {
          group: "Hola",
          id: "collapse",
          label: "Collapse",
          to: {
            name: "PageCollapse",
          },
          icon: "ArrowsCollapse",
        },
        {
          group: "Hola",
          id: "cloak",
          label: "Cloak",
          to: {
            name: "PageCloak",
          },
          icon: "HourglassSplit",
        },
        {
          group: "Hola",
          id: "cloak2",
          label: "Cloak disabled",
          to: {
            name: "PageCloak",
          },
          icon: "HourglassSplit",
          disabled: true,
        },
        {
          group: "Hola",
          id: "loading",
          label: "Loading",
          to: {
            name: "PageLoading",
          },
          icon: "HourglassSplit",
        },
        {
          id: "ui",
          label: "ui",
          icon: "InputCursor",
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
              id: "input-number",
              to: {
                name: "PageInputNumber",
              },
              label: "Input number",
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
          icon: "ListNested",
        },
        {
          id: "accordion2",
          label: "Accordion seeeeeehr lange name",
          icon: "ListNested",
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
          icon: "ExclamationTriangle",
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
          icon: "CheckLg",
        },
        {
          id: "notification",
          label: "Notification",
          to: {
            name: "PageNotification",
          },
          icon: "Bell",
        },
        {
          id: "dropdown",
          label: "Dropdown",
          to: {
            name: "PageDropdown",
          },
          icon: "MenuDown",
        },
        {
          id: "GroupButtonDropdown",
          label: "GroupButtonDropdown",
          to: {
            name: "PageGroupButtonDropdown",
          },
          icon: "MenuDown",
        },
        {
          id: "tabs",
          label: "Tabs",
          to: {
            name: "PageTabs",
          },
          icon: "SegmentedNav",
        },
        {
          id: "progress",
          label: "Progress",
          to: {
            name: "PageProgress",
          },
          icon: "Reception2",
        },
        {
          id: "list",
          label: "List",
          to: {
            name: "PageList",
          },
          icon: "ListUl",
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
          titleHtml: "PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle",
        },
        {
          id: "svg",
          label: "Svg",
          to: {
            name: "PageSvg",
          },
          icon: "FiletypeSvg",
        },
        {
          id: "wizard",
          label: "Wizard",
          to: {
            name: "PageWizard",
          },
          icon: "Dnd",
        },
        {
          id: "ShowMore",
          label: "Show more",
          to: {
            name: "PageShowMore",
          },
          icon: "Dnd",
        },
      ],
    };
  },
};
