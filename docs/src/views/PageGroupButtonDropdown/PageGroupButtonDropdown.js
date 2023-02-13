import AGroupButtonDropdown from "../../../../src/AGroupButtonDropdown/AGroupButtonDropdown";

export default {
  name: "PageGroupButtonDropdown",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
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
        disabled: false,
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
        isHidden: true,
      },
      {
        type: "divider",
      },
      {
        type: "link",
        text: "Link 2",
        href: "#",
        isHidden: true,
      },
      {
        type: "divider",
      },
    ];

    return {
      actions,
    };
  },
};
