import {
  h,
} from "vue";

import AMenuPanelLink from "./AMenuPanelLink";

export default {
  name: "AMenuPanelGroup",
  props: {
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
    keyId: {
      type: String,
      required: true,
    },
    keyLabel: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
      required: false,
      default: undefined,
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
          isPanelOpen: this.isPanelOpen,
          keyIcon: this.keyIcon,
          keyId: this.keyId,
          keyLabel: this.keyLabel,
          parentId: this.parentId,
        });
      }),
    ];
  },
};
