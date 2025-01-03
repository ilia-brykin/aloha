import {
  h,
} from "vue";

import AMenuPanelLink from "../AMenuPanelLink/AMenuPanelLink";

import GroupItemsAPI from "./compositionAPI/GroupItemsAPI";
import LabelIdAPI from "./compositionAPI/LabelIdAPI";

export default {
  name: "AMenuPanelGroup",
  props: {
    dataProParentChildren: {
      type: Object,
      required: true,
    },
    groupIndex: {
      type: [Number, String],
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
    menuId: {
      type: String,
      required: true,
    },
    paneIndex: {
      type: [Number, String],
      required: true,
    },
  },
  setup(props) {
    const {
      hasItems,
    } = GroupItemsAPI(props);

    const {
      ariaLabelledbyObj,
      labelId,
    } = LabelIdAPI(props);

    return {
      ariaLabelledbyObj,
      hasItems,
      labelId,
    };
  },
  render() {
    if (!this.hasItems) {
      return null;
    }

    if (this.groupLabel) {
      return h("li", {
        ...this.ariaLabelledbyObj,
      }, [
        h("div", {
          id: this.labelId,
          class: "a_menu__list_header",
        }, this.groupLabel),
        h("ul", {
          class: "a_menu__listview",
        }, [
          this.groupItems.map((item, itemIndex) => {
            return h(AMenuPanelLink, {
              key: itemIndex,
              item,
              dataProParentChildren: this.dataProParentChildren,
              isPanelOpen: this.isPanelOpen,
              keyIcon: this.keyIcon,
              menuId: this.menuId,
            }, this.$slots);
          }),
        ]),
      ]);
    }

    return this.groupItems.map((item, itemIndex) => {
      return h(AMenuPanelLink, {
        key: itemIndex,
        item,
        dataProParentChildren: this.dataProParentChildren,
        isPanelOpen: this.isPanelOpen,
        keyIcon: this.keyIcon,
        menuId: this.menuId,
      }, this.$slots);
    });
  },
};
