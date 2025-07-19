export default function ComponentItemsAPI() {
  const componentItems = {
    id: "components",
    label: "Components",
    icon: "Boxes",
    class: "test_menu_components",
    children: [
      {
        id: "accordion",
        label: "Accordion",
        class: "test_menu_accordion",
        to: {
          name: "PageAccordion",
        },
      },
      {
        id: "alert",
        label: "Alert",
        class: "test_menu_alert",
        to: {
          name: "PageAlert",
        },
      },
      {
        id: "Button",
        label: "Button",
        class: "test_menu_button",
        to: {
          name: "PageButton",
        },
      },
      {
        id: "PageCarousel",
        label: "Carousel",
        class: "test_menu_carousel",
        to: {
          name: "PageCarousel",
        },
      },
      {
        id: "cloak",
        label: "Cloak",
        class: "test_menu_cloak",
        to: {
          name: "PageCloak",
        },
      },
      {
        id: "confirm",
        label: "Confirm",
        class: "test_menu_confirm",
        to: {
          name: "PageConfirm",
        },
      },
      {
        id: "disclosure",
        label: "Disclosure",
        class: "test_menu_disclosure",
        to: {
          name: "PageDisclosure",
        },
      },
      {
        id: "filters",
        label: "filters",
        class: "test_menu_filters",
        to: {
          name: "PageFilters",
        },
      },
      {
        id: "filtersRight",
        label: "filtersRight",
        class: "test_menu_filters_right",
        to: {
          name: "PageFiltersRight",
        },
      },
      {
        id: "dropdown",
        label: "Dropdown",
        class: "test_menu_dropdown",
        to: {
          name: "PageDropdown",
        },
      },
      {
        id: "PageElement",
        label: "Element",
        class: "test_menu_element",
        to: {
          name: "PageElement",
        },
      },
      {
        id: "form_parent",
        label: "Form",
        class: "test_menu_form_parent",
        children: [
          {
            id: "checkbox",
            label: "Checkbox",
            class: "test_menu_checkbox",
            to: {
              name: "PageCheckbox",
            },
          },
          {
            id: "datepicker",
            label: "Datepicker",
            class: "test_menu_datepicker",
            to: {
              name: "PageDatepicker",
            },
          },
          {
            id: "datepicker-range",
            label: "DatepickerRange",
            class: "test_menu_datepicker_range",
            to: {
              name: "PageDatepickerRange",
            },
          },
          {
            id: "fieldset",
            label: "Fieldset",
            class: "test_menu_fieldset",
            children: [
              {
                id: "fieldsetBasic",
                label: "Fieldset",
                class: "test_menu_fieldset_basic",
                to: {
                  name: "PageFieldset",
                },
              },
              {
                id: "fieldsetChildren",
                label: "Fieldset (children)",
                class: "test_menu_fieldset_children",
                to: {
                  name: "PageFieldsetChildren",
                },
              },
            ],
          },
          {
            id: "form",
            label: "Form",
            class: "test_menu_form",
            to: {
              name: "PageForm",
            },
          },
          {
            id: "PageFormElement",
            label: "Form-Element",
            class: "test_menu_form_element",
            to: {
              name: "PageFormElement",
            },
          },
          {
            id: "PageGroup",
            to: {
              name: "PageGroup",
            },
            class: "test_menu_group",
            label: "Group",
          },
          {
            id: "input",
            to: {
              name: "PageInput",
            },
            class: "test_menu_input",
            label: "Input",
          },
          {
            id: "input-currency",
            to: {
              name: "PageInputCurrency",
            },
            class: "test_menu_input_currency",
            label: "Input currency",
          },
          {
            id: "input-number",
            to: {
              name: "PageInputNumber",
            },
            class: "test_menu_input_number",
            label: "Input number",
          },
          {
            id: "input-number-range",
            to: {
              name: "PageInputNumberRange",
            },
            class: "test_menu_input_number_range",
            label: "Input number range",
          },
          {
            id: "json",
            label: "JSON",
            class: "test_menu_json",
            to: {
              name: "PageJson",
            },
          },
          {
            id: "PageMultiselectOrdered",
            label: "Multiselect ordered",
            class: "test_menu_multiselect_ordered",
            to: {
              name: "PageMultiselectOrdered",
            },
          },
          {
            id: "PageOneCheckbox",
            label: "One checkbox",
            class: "test_menu_one_checkbox",
            to: {
              name: "PageOneCheckbox",
            },
          },
          {
            id: "radio",
            label: "Radio",
            class: "test_menu_radio",
            to: {
              name: "PageRadio",
            },
          },
          {
            id: "rate",
            label: "Rate",
            class: "test_menu_rate",
            to: {
              name: "PageRate",
            },
          },
          {
            id: "PageRouterLinkConfig",
            label: "RouterLinkConfig",
            class: "test_menu_router_link_config",
            to: {
              name: "PageRouterLinkConfig",
            },
          },
          {
            id: "select",
            label: "Select",
            class: "test_menu_select",
            to: {
              name: "PageSelect",
            },
          },
          {
            id: "PageSelectIcon",
            label: "Select icon",
            class: "test_menu_select_icon",
            to: {
              name: "PageSelectIcon",
            },
          },
          {
            id: "PageSelectStyle",
            label: "Select style",
            class: "test_menu_select_style",
            to: {
              name: "PageSelectStyle",
            },
          },
          {
            id: "slider",
            label: "Slider",
            class: "test_menu_slider",
            to: {
              name: "PageSlider",
            },
          },
          {
            id: "PageSwitch",
            label: "Switch",
            class: "test_menu_switch",
            to: {
              name: "PageSwitch",
            },
          },
          {
            id: "PageTemplate",
            label: "Template",
            class: "test_menu_template",
            to: {
              name: "PageTemplate",
            },
          },
          {
            id: "PageTextarea",
            label: "Textarea",
            class: "test_menu_textarea",
            to: {
              name: "PageTextarea",
            },
          },
          {
            id: "PageValidatedJson",
            label: "Validated JSON",
            class: "test_menu_validated_json",
            to: {
              name: "PageValidatedJson",
            },
          },
        ],
      },
      {
        id: "GroupButtonDropdown",
        label: "GroupButtonDropdown",
        class: "test_menu_group_button_dropdown",
        to: {
          name: "PageGroupButtonDropdown",
        },
      },
      {
        id: "Link",
        label: "Link",
        class: "test_menu_link",
        to: {
          name: "PageLink",
        },
      },
      {
        id: "LinkCopy",
        label: "Link copy",
        class: "test_menu_link_copy",
        to: {
          name: "PageLinkCopy",
        },
      },
      {
        id: "list",
        label: "List",
        class: "test_menu_list",
        to: {
          name: "PageList",
        },
      },
      {
        id: "loading",
        label: "Loading",
        class: "test_menu_loading",
        to: {
          name: "PageLoading",
        },
      },
      {
        id: "menu",
        label: "Menu",
        class: "test_menu_menu",
        children: [
          {
            id: "PageMenuBasic",
            label: "Menu basic",
            class: "test_menu_menu_basic",
            to: {
              name: "PageMenuBasic",
            },
          },
        ],
      },
      {
        id: "modal",
        label: "Modal",
        class: "test_menu_modal",
        to: {
          name: "PageModal",
        },
      },
      {
        id: "notification",
        label: "Notification",
        class: "test_menu_notification",
        to: {
          name: "PageNotification",
        },
      },
      {
        id: "progress",
        label: "Progress",
        class: "test_menu_progress",
        children: [
          {
            id: "progressBar",
            label: "Progress bar",
            class: "test_menu_progress_bar",
            to: {
              name: "PageProgress",
            },
          },
          {
            id: "progressCircle",
            label: "Progress circle",
            class: "test_menu_progress_circle",
            to: {
              name: "PageProgressCircle",
            },
          },
        ],
      },
      {
        id: "ShowMore",
        label: "Show more",
        class: "test_menu_show_more",
        to: {
          name: "PageShowMore",
        },
      },
      {
        id: "spinner",
        label: "Spinner",
        class: "test_menu_spinner",
        to: {
          name: "PageSpinner",
        },
      },
      {
        id: "Table",
        label: "Tables",
        class: "test_menu_tables",
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
          {
            id: "PageTableTree",
            label: "Table tree",
            to: {
              name: "PageTableTree",
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
      },
      {
        id: "tooltip",
        label: "Tooltip",
        to: {
          name: "PageTitle",
        },
        titleHtml: "PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle",
      },
      {
        id: "Translation",
        label: "Translation",
        to: {
          name: "PageTranslation",
        },
      },
      {
        id: "wizard",
        label: "Wizard",
        children: [
          {
            id: "PageWizard",
            label: "Wizard normal",
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
    ],
  };

  return {
    componentItems,
  };
}
