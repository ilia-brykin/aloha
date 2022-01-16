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
          name: "PageInput",
          label: "Input",
        },
        {
          id: "accordion",
          name: "PageAccordion",
          label: "Accordion",
          children: [
            {
              id: "accordion_bootstrap",
              name: "PageAccordion",
              label: "Accordion Bootstrap",
              params: {
                framework: "bootstrap",
              },
            },
            {
              id: "accordion_foundation",
              name: "PageAccordion",
              label: "Accordion Foundation",
              params: {
                framework: "foundation",
              },
            },
            {
              id: "accordion_uikit",
              name: "PageAccordion",
              label: "Accordion Uikit",
              params: {
                framework: "uikit",
              },
            },
          ],
        },
      ],
    };
  },
};
