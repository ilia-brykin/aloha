import {
  computed,
  h,
  provide,
  toRef,
} from "vue";

import AInput from "../ui/AInput/AInput";
import AMenuBreadcrumbs from "./AMenuBreadcrumbs";
import AMenuPanel from "./AMenuPanel";

import AMenuPanelsAPI from "./compositionAPI/AMenuPanelsAPI";
import AMenuSearchAPI from "./compositionAPI/AMenuSearchAPI";
import AMenuToggleAPI from "./compositionAPI/AMenuToggleAPI";

import {
  forEach,
  get,
  isNil, keyBy,
} from "lodash-es";

export default {
  name: "AMenu",
  props: {
    isOpenDefault: {
      type: Boolean,
      required: false,
      default: true,
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    keyGroup: {
      type: String,
      required: false,
      default: "group",
    },
    keyIcon: {
      type: String,
      required: false,
      default: "icon",
    },
    keyId: {
      type: String,
      required: false,
      default: "id",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyParent: {
      type: String,
      required: false,
      default: "parent",
    },
    isBreadcrumbsAll: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSearch: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const items = toRef(props, "items");
    const keyParent = toRef(props, "keyParent");
    const keyId = toRef(props, "keyId");

    const itemsKeyById = computed(() => {
      return keyBy(items.value, keyId.value);
    });

    const itemsProParent = computed(() => {
      const MAIN = [];
      const ITEMS_PRO_PARENT = {};
      forEach(items.value, item => {
        const PARENT = get(item, keyParent.value);
        if (isNil(PARENT)) {
          MAIN.push(item);
        } else {
          ITEMS_PRO_PARENT[PARENT] = ITEMS_PRO_PARENT[PARENT] || [];
          ITEMS_PRO_PARENT[PARENT].push(item);
        }
      });

      return {
        main: MAIN,
        children: ITEMS_PRO_PARENT,
      };
    });

    const {
      initMenuOpenOrClose,
      isMenuOpen,
    } = AMenuToggleAPI();

    const {
      modelSearch,
      updateModelSearch,
    } = AMenuSearchAPI();

    const {
      clickMenuLink,
      panelParentsOpen,
      togglePanel,
    } = AMenuPanelsAPI(props, {
      itemsProParent,
      itemsKeyById,
    });

    provide("clickMenuLink", clickMenuLink);
    provide("togglePanel", togglePanel);

    const isOpenDefault = toRef(props, "isOpenDefault");

    initMenuOpenOrClose(isOpenDefault.value);

    return {
      itemsKeyById,
      itemsProParent,
      panelParentsOpen,

      isMenuOpen,

      modelSearch,
      updateModelSearch,
    };
  },
  render() {
    return h("nav", {
      class: "a_menu"
    }, [
      h("div", {
        class: "a_menu__blocker",
        ariaHidden: true,
      }),
      h("div", {
        class: "a_menu__navbar_top",
      }, [
        this.isSearch && h(AInput, {
          id: "a_menu_search",
          class: "a_menu__navbar_top__search",
          modelValue: this.modelSearch,
          label: "Suche",
          "onUpdate:modelValue": this.updateModelSearch,
        }),
        h(AMenuBreadcrumbs, {
          itemsKeyById: this.itemsKeyById,
          isBreadcrumbsAll: this.isBreadcrumbsAll,
          keyLabel: this.keyLabel,
          panelParentsOpen: this.panelParentsOpen,
        }),
      ]),
      h("div", {
        class: "a_menu__panels",
      }, [
        h(AMenuPanel, {
          isFirst: true,
          keyGroup: this.keyGroup,
          keyIcon: this.keyIcon,
          keyId: this.keyId,
          keyLabel: this.keyLabel,
          panelItems: this.itemsProParent.main,
          panelParentsOpen: this.panelParentsOpen,
        }),
        Object.keys(this.itemsProParent.children).map(key => {
          return h(AMenuPanel, {
            key,
            keyGroup: this.keyGroup,
            keyIcon: this.keyIcon,
            keyId: this.keyId,
            keyLabel: this.keyLabel,
            parentId: key,
            panelItems: this.itemsProParent.children[key],
            panelParentsOpen: this.panelParentsOpen,
          });
        }),
      ]),
    ]);
  },
};
