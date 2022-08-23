import ATabs from "../../../../src/ATabs/ATabs";

export default {
  name: "PageTabs",
  components: {
    ATabs,
  },
  data() {
    return {
      dataTabs1: [
        {
          label: "Tab 1",
          id: "tab_1",
          content: "CONTENT 1",
        },
        {
          label: "Tab 2",
          id: "tab_2",
          content: "CONTENT 2",
        },
        {
          label: "Tab 3",
          id: "tab_3",
          content: "CONTENT 3",
          disabled: true,
        },
      ],
    };
  },
};
