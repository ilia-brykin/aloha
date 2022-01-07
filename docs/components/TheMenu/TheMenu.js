export default {
  name: "TheMenu",
  data() {
    return {
      menuItems: [
        {
          name: "PageSpinner",
          label: "Spinner",
        },
        {
          name: "PageTable",
          label: "Table",
        },
        {
          name: "PageCollapse",
          label: "Collapse",
        },
        {
          name: "PageCloak",
          label: "Cloak",
        },
        {
          name: "PageInput",
          label: "Input",
        },
        {
          name: "PageAccordion",
          label: "Accordion Bootstrap",
          params: {
            framework: "bootstrap",
          },
        },
        {
          name: "PageAccordion",
          label: "Accordion Foundation",
          params: {
            framework: "foundation",
          },
        },
        {
          name: "PageAccordion",
          label: "Accordion Uikit",
          params: {
            framework: "uikit",
          },
        },
      ],
    };
  },
};
