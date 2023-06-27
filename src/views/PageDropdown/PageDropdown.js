import ADropdown from "../../../../src/ADropdown/ADropdown";

export default {
  name: "PageDropdown",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
        isHidden: true,
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
        disabled: true,
      },
      {
        type: "divider",
      },
      {
        type: "divider",
      },
      {
        text: "Actions 2",
        type: "button",
        callback: () => {},
      },
      {
        type: "link",
        text: "Link 1",
        href: "#",
      },
      {
        type: "divider",
      },
    ];

    return {
      dropdownActions,
    };
  },
};
