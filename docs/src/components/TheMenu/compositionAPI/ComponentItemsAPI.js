export default function ComponentItemsAPI() {
  const componentItems = {
    id: "components",
    label: "Components",
    icon: "Boxes",
    children: [
      {
        id: "accordion",
        label: "Accordion",
        to: {
          name: "PageAccordion",
        },
      },
      {
        id: "alert",
        label: "Alert",
        to: {
          name: "PageAlert",
        },
      },
      {
        id: "Button",
        label: "Button",
        to: {
          name: "PageButton",
        },
      },
      {
        id: "cloak",
        label: "Cloak",
        to: {
          name: "PageCloak",
        },
      },
      {
        id: "confirm",
        label: "Confirm",
        to: {
          name: "PageConfirm",
        },
      },
      {
        id: "disclosure",
        label: "Disclosure",
        to: {
          name: "PageDisclosure",
        },
      },
      {
        id: "filters",
        label: "filters",
        to: {
          name: "PageFilters",
        },
      },
      {
        id: "filtersRight",
        label: "filtersRight",
        to: {
          name: "PageFiltersRight",
        },
      },
      {
        id: "dropdown",
        label: "Dropdown",
        to: {
          name: "PageDropdown",
        },
      },
      {
        id: "form_parent",
        label: "Form",
        children: [
          {
            id: "checkbox",
            label: "Checkbox",
            to: {
              name: "PageCheckbox",
            }
          },
          {
            id: "datepicker",
            label: "Datepicker",
            to: {
              name: "PageDatepicker",
            }
          },
          {
            id: "datepicker-range",
            label: "DatepickerRange",
            to: {
              name: "PageDatepickerRange",
            }
          },
          {
            id: "fieldset",
            label: "Fieldset",
            children: [
              {
                id: "fieldsetBasic",
                label: "Fieldset",
                to: {
                  name: "PageFieldset",
                },
              },
              {
                id: "fieldsetChildren",
                label: "Fieldset (children)",
                to: {
                  name: "PageFieldsetChildren",
                },
              },
            ],
          },
          {
            id: "form",
            label: "Form",
            to: {
              name: "PageForm",
            }
          },
          {
            id: "PageGroup",
            to: {
              name: "PageGroup",
            },
            label: "Group",
          },
          {
            id: "input",
            to: {
              name: "PageInput",
            },
            label: "Input",
          },
          {
            id: "input-currency",
            to: {
              name: "PageInputCurrency",
            },
            label: "Input currency",
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
              name: "PageJson",
            },
          },
          {
            id: "PageOneCheckbox",
            label: "One checkbox",
            to: {
              name: "PageOneCheckbox",
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
          {
            id: "PageSwitch",
            label: "Switch",
            to: {
              name: "PageSwitch",
            },
          },
          {
            id: "PageTextarea",
            label: "Textarea",
            to: {
              name: "PageTextarea",
            },
          },
          {
            id: "PageTemplate",
            label: "Template",
            to: {
              name: "PageTemplate",
            },
          },
          {
            id: "tinyMce",
            label: "TinyMce",
            to: {
              name: "PageTinyMce",
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
      },
      {
        id: "Link",
        label: "Link",
        to: {
          name: "PageLink",
        },
      },
      {
        id: "LinkCopy",
        label: "Link copy",
        to: {
          name: "PageLinkCopy",
        },
      },
      {
        id: "list",
        label: "List",
        to: {
          name: "PageList",
        },
      },
      {
        id: "loading",
        label: "Loading",
        to: {
          name: "PageLoading",
        },
      },
      {
        id: "menu",
        label: "Menu",
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
      },
      {
        id: "notification",
        label: "Notification",
        to: {
          name: "PageNotification",
        },
      },
      {
        id: "progress",
        label: "Progress",
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
        id: "ShowMore",
        label: "Show more",
        to: {
          name: "PageShowMore",
        },
      },
      {
        id: "spinner",
        label: "Spinner",
        to: {
          name: "PageSpinner",
        },
      },
      {
        id: "Table",
        label: "Tables",
        children: [
          {
            id: "PageTableComplex",
            label: "Table complex",
            to: {
              name: "PageTableComplex",
            }
          },
          {
            id: "PageTablePagination",
            label: "Table pagination",
            to: {
              name: "PageTablePagination",
            }
          },
          {
            id: "PageTableSimple",
            label: "Table simple",
            to: {
              name: "PageTableSimple",
            }
          },
          {
            id: "PageTableSort",
            label: "Table sort",
            to: {
              name: "PageTableSort",
            }
          },
          {
            id: "PageTablePreview",
            label: "Table preview",
            to: {
              name: "PageTablePreview",
            }
          },
          {
            id: "PageTablePreviewDown",
            label: "Table preview down",
            to: {
              name: "PageTablePreviewDown",
            }
          },
          {
            id: "PageTableTree",
            label: "Table tree",
            to: {
              name: "PageTableTree",
            }
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
