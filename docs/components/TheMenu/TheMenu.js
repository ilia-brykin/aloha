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
      ],
    };
  },
};
