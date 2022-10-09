import {
  h,
} from "vue";

import AMenuPanelLink from "./AMenuPanelLink";

export default {
  name: "AMenuPanelGroup",
  props: {
    dataProParentChildren: {
      type: Object,
      required: true,
    },
    groupItems: {
      type: Array,
      required: true,
    },
    groupLabel: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    isPanelOpen: {
      type: Boolean,
      required: false,
    },
    keyIcon: {
      type: String,
      required: true,
    },
  },
  render() {
    return [
      h("dt", {
      }, [
        this.groupLabel && h("div", {
          class: "a_menu__list_header",
        }, this.groupLabel)
      ]),
      this.groupItems.map((item, itemIndex) => {
        return h(AMenuPanelLink, {
          key: itemIndex,
          item,
          dataProParentChildren: this.dataProParentChildren,
          isPanelOpen: this.isPanelOpen,
          keyIcon: this.keyIcon,
        });
      }),
    ];
  },
};
