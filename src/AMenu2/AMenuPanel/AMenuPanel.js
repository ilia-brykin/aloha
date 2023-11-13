import {
  h, provide, toRef,
} from "vue";

import AMenuBreadcrumbs from "../AMenuBreadcrumbs";
import AMenuPanelGroup from "../AMenuPanelGroup/AMenuPanelGroup";

import GroupAPI from "./compositionAPI/GroupAPI";
import IdAPI from "./compositionAPI/IdAPI";
import PanelOpenAPI from "./compositionAPI/PanelOpenAPI";

export default {
  name: "AMenuPanel",
  props: {
    attributesBlockerClick: {
      type: Object,
      required: true,
    },
    dataKeyById: {
      type: Object,
      required: true,
    },
    dataProParentChildren: {
      type: Object,
      required: true,
    },
    isBreadcrumbsTruncated: {
      type: Boolean,
      required: false,
    },
    isPanelMain: {
      type: Boolean,
      required: false,
    },
    isSearchActive: {
      type: Boolean,
      required: true,
    },
    keyGroup: {
      type: String,
      required: true,
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
    panelItems: {
      type: Array,
      required: true,
    },
    panelParentsOpen: {
      type: Array,
      required: true,
    },
    parentId: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const isPanelMain = toRef(props, "isPanelMain");

    const {
      panelId,
    } = IdAPI(props);

    const {
      isItemsWithoutGroup,
      itemsGroup,
    } = GroupAPI(props);

    const {
      isChildPanelOpen,
      isPanelOpen,
    } = PanelOpenAPI(props);

    provide("isPanelMain", isPanelMain);

    return {
      isChildPanelOpen,
      isItemsWithoutGroup,
      isPanelOpen,
      itemsGroup,
      panelId,
    };
  },
  render() {
    return h("div", {
      id: this.panelId,
      class: ["a_menu_2__panel", {
        a_menu_2__panel_main: !this.isSearchActive && this.isPanelMain,
        a_menu_2__panel_secondary: !this.isPanelMain,
        a_menu_2__panel_opened: !this.isSearchActive && this.isPanelOpen,
        a_menu_2__panel_parent: !this.isSearchActive && this.isChildPanelOpen,
      }],
    }, [
      h(AMenuBreadcrumbs, {
        dataKeyById: this.dataKeyById,
        isBreadcrumbsTruncated: this.isBreadcrumbsTruncated,
        isPanelMain: this.isPanelMain,
        isSearchActive: this.isSearchActive,
        panelParentsOpen: this.panelParentsOpen,
      }),
      h("ul", {
        class: "a_menu_2__listview",
      }, [
        this.isItemsWithoutGroup && h(AMenuPanelGroup, {
          dataProParentChildren: this.dataProParentChildren,
          groupItems: this.itemsGroup.withoutGroup,
          isPanelOpen: this.isPanelOpen,
          keyIcon: this.keyIcon,
          menuId: this.menuId,
          paneIndex: this.paneIndex,
          groupIndex: "00",
        }, this.$slots),
        Object.keys(this.itemsGroup.withGroup).map((key, groupIndex) => {
          return h(AMenuPanelGroup, {
            key,
            dataProParentChildren: this.dataProParentChildren,
            groupIndex,
            groupItems: this.itemsGroup.withGroup[key],
            groupLabel: key,
            isPanelOpen: this.isPanelOpen,
            keyIcon: this.keyIcon,
            menuId: this.menuId,
            paneIndex: this.paneIndex,
          }, this.$slots);
        }),
      ]),
    ]);
  },
};
