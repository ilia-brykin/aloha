import {
  AMenu,
} from "aloha-vue";
import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMenuBasicExample",
  components: {
    AlohaExample,
    AMenu,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const menuItems = [
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
        id: "Button",
        label: "Button",
        to: {
          name: "PageButton",
        },
        icon: "EjectFill",
      },
      {
        id: "css",
        label: "CSS",
        icon: "FiletypeCss",
        children: [
          {
            id: "columns",
            label: "Columns",
            to: {
              name: "PageColumns",
            },
          },
        ],
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
        id: "collapse",
        label: "Collapse",
        to: {
          name: "PageCollapse",
        },
        icon: "ArrowsCollapse",
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
        id: "directives",
        label: "Directives",
        icon: "CodeSquare",
        children: [
          {
            id: "OnHooks",
            label: "OnHooks",
            to: {
              name: "PageOnHooks",
            },
          },
        ],
      },
      {
        id: "disclosure",
        label: "Disclosure",
        to: {
          name: "PageDisclosure",
        },
        icon: "ChevronBarExpand",
      },
      {
        id: "filters",
        label: "filters",
        to: {
          name: "PageFilters",
        },
        icon: "FilterCircleFill",
      },
      {
        id: "filtersRight",
        label: "filtersRight",
        to: {
          name: "PageFiltersRight",
        },
        icon: "FilterCircleFill",
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
        id: "form",
        label: "Form",
        icon: "FileEarmarkText",
        children: [
          {
            id: "checkbox",
            label: "Checkbox",
            to: {
              name: "PageCheckbox",
            },
          },
          {
            id: "fieldset",
            label: "Fieldset",
            to: {
              name: "PageFieldset",
            },
          },
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
            id: "datepicker",
            label: "Datepicker",
            to: {
              name: "PageDatepicker",
            },
          },
          {
            id: "datepicker-range",
            label: "DatepickerRange",
            to: {
              name: "PageDatepickerRange",
            },
          },
          {
            id: "form",
            label: "Form",
            to: {
              name: "PageForm",
            },
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
            id: "input-number-range",
            to: {
              name: "PageInputNumberRange",
            },
            label: "Input number range",
          },
          {
            id: "json",
            label: "JSON",
            to: {
              name: "PageAJson",
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
            id: "rate",
            label: "Rate",
            to: {
              name: "PageRate",
            },
          },
          {
            id: "select",
            label: "Select",
            to: {
              name: "PageSelect",
            },
          },
        ],
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
        id: "Link",
        label: "Link",
        to: {
          name: "PageLink",
        },
        icon: "BoxArrowUpRight",
      },
      {
        id: "LinkCopy",
        label: "Link copy",
        to: {
          name: "PageLinkCopy",
        },
        icon: "Files",
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
        group: "Hola",
        id: "loading",
        label: "Loading",
        to: {
          name: "PageLoading",
        },
        icon: "HourglassSplit",
      },
      {
        id: "menu",
        label: "Menu",
        icon: "MenuAppFill",
        children: [
          {
            id: "PageMenuBasic",
            label: "Menu basic",
            to: {
              name: "PageMenuBasic",
            },
          },
        ],
      },
      {
        id: "modal",
        label: "Modal",
        to: {
          name: "PageModal",
        },
        icon: "Window",
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
        id: "progress",
        label: "Progress",
        icon: "Reception2",
        children: [
          {
            id: "progressBar",
            label: "Progress bar",
            to: {
              name: "PageProgress",
            },
          },
          {
            id: "progressCircle",
            label: "Progress circle",
            to: {
              name: "PageProgressCircle",
            },
          },
        ],
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
        id: "ShowMore",
        label: "Show more",
        to: {
          name: "PageShowMore",
        },
        icon: "ChevronBarExpand",
      },
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
        id: "svg",
        label: "Svg",
        to: {
          name: "PageSvg",
        },
        icon: "FiletypeSvg",
      },
      {
        id: "Table",
        label: "Tables",
        icon: "Table",
        children: [
          {
            id: "PageTableComplex",
            label: "Table complex",
            to: {
              name: "PageTableComplex",
            },
          },
          {
            id: "PageTablePagination",
            label: "Table pagination",
            to: {
              name: "PageTablePagination",
            },
          },
          {
            id: "PageTableSimple",
            label: "Table simple",
            to: {
              name: "PageTableSimple",
            },
          },
          {
            id: "PageTableSort",
            label: "Table sort",
            to: {
              name: "PageTableSort",
            },
          },
          {
            id: "PageTablePreview",
            label: "Table preview",
            to: {
              name: "PageTablePreview",
            },
          },
          {
            id: "PageTablePreviewDown",
            label: "Table preview down",
            to: {
              name: "PageTablePreviewDown",
            },
          },
        ],
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
        id: "tooltip",
        label: "Tooltip",
        to: {
          name: "PageTitle",
        },
        icon: "ChatSquareTextFill",
        titleHtml: "PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle",
      },
      {
        id: "Translation",
        label: "Translation",
        to: {
          name: "PageTranslation",
        },
        icon: "Translate",
      },
      {
        id: "wizard",
        label: "Wizard",
        icon: "ArrowRightCircleFill",
        children: [
          {
            id: "PageWizard",
            label: "Normal",
            to: {
              name: "PageWizard",
            },
          },
          {
            id: "PageModalWizard",
            label: "Modal Wizard",
            to: {
              name: "PageModalWizard",
            },
          },
        ],
      },
    ];

    return {
      codeHtml,
      codeJs,
      menuItems,
    };
  },
};
