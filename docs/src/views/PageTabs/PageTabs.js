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
          title: "ALoha sdfdsfds sdfsdfdsf",
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
      dataTabs2: [
        {
          id: "tab_1",
        },
        {
          id: "tab_2",
        },
        {
          id: "tab_3",
        },
      ],
      dataTabs3: [
        {
          id: "tab_1",
          slotContent: "content1",
          slotTab: "tab1",
        },
        {
          id: "tab_2",
          slotContent: "content2",
          slotTab: "tab2",
        },
        {
          id: "tab_3",
          slotContent: "content3",
          slotTab: "tab3",
        },
      ],
    };
  },
};
