import {
  computed,
  h,
  toRef,
} from "vue";

import AMenuPanelGroup from "./AMenuPanelGroup";

import {
  forEach,
  get,
  isNil,
} from "lodash-es";

export default {
  name: "AMenuPanel",
  props: {
    attributesBlockerClick: {
      type: Object,
      required: true,
    },
    isFirst: {
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
    keyId: {
      type: String,
      required: true,
    },
    keyLabel: {
      type: String,
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
    const panelItems = toRef(props, "panelItems");
    const keyGroup = toRef(props, "keyGroup");
    const isFirst = toRef(props, "isFirst");
    const panelParentsOpen = toRef(props, "panelParentsOpen");
    const parentId = toRef(props, "parentId");

    const panelId = computed(() => {
      return `a_menu_panel_${ parentId.value || "" }`;
    });

    const isPanelOpen = computed(() => {
      if (isFirst.value) {
        return panelParentsOpen.value.length === 0;
      }
      if (panelParentsOpen.value.length) {
        return panelParentsOpen.value.indexOf(parentId.value) === panelParentsOpen.value.length - 1;
      }
      return false;
    });

    const itemsGroup = computed(() => {
      const WITHOUT_GROUP = [];
      const WITH_GROUP = {};
      forEach(panelItems.value, item => {
        const GROUP = get(item, keyGroup.value);
        if (isNil(GROUP)) {
          WITHOUT_GROUP.push(item);
        } else {
          WITH_GROUP[GROUP] = WITH_GROUP[GROUP] || [];
          WITH_GROUP[GROUP].push(item);
        }
      });

      return {
        withoutGroup: WITHOUT_GROUP,
        withGroup: WITH_GROUP,
      };
    });

    const isItemsWithoutGroup = computed(() => {
      return itemsGroup.value.withoutGroup.length > 0;
    });

    const isChildPanelOpen = computed(() => {
      if (isFirst.value) {
        return panelParentsOpen.value.length > 0;
      }
      const INDEX = panelParentsOpen.value.indexOf(parentId.value);

      return INDEX !== -1 && INDEX !== panelParentsOpen.value.length - 1;
    });

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
      class: ["a_menu__panel", {
        a_menu__panel_first: !this.isSearchActive && this.isFirst,
        a_menu__panel_opened: !this.isSearchActive && this.isPanelOpen,
        a_menu__panel_parent: !this.isSearchActive && this.isChildPanelOpen,
      }],
    }, [
      h("div", {
        class: "a_menu__blocker",
        ariaHidden: true,
        ...this.attributesBlockerClick,
      }),
      h("dl", {
        class: "a_menu__listview",
      }, [
        this.isItemsWithoutGroup && h(AMenuPanelGroup, {
          groupItems: this.itemsGroup.withoutGroup,
          isPanelOpen: this.isPanelOpen,
          keyIcon: this.keyIcon,
          keyId: this.keyId,
          keyLabel: this.keyLabel,
          parentId: this.parentId,
        }),
        Object.keys(this.itemsGroup.withGroup).map(key => {
          return h(AMenuPanelGroup, {
            key,
            groupItems: this.itemsGroup.withGroup[key],
            groupLabel: key,
            isPanelOpen: this.isPanelOpen,
            keyIcon: this.keyIcon,
            keyId: this.keyId,
            keyLabel: this.keyLabel,
            parentId: this.parentId,
          });
        }),
      ]),
    ]);
  },
};
