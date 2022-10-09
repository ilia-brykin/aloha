import {
  computed,
  h,
  provide,
  Teleport,
  toRef, watch,
} from "vue";

import AInput from "../ui/AInput/AInput";
import AMenuBreadcrumbs from "./AMenuBreadcrumbs";
import AMenuButtonToggle from "./AMenuButtonToggle";
import AMenuPanel from "./AMenuPanel";
import AMenuSearchPanel from "./AMenuSearchPanel";

import AMenuBlockerClickAPI from "./compositionAPI/AMenuBlockerClickAPI";
import AMenuDataAPI from "./compositionAPI/AMenuDataAPI";
import AMenuPanelsAPI from "./compositionAPI/AMenuPanelsAPI";
import AMenuResizeAPI from "./compositionAPI/AMenuResizeAPI";
import AMenuSearchAPI from "./compositionAPI/AMenuSearchAPI";
import AMenuToggleAPI from "./compositionAPI/AMenuToggleAPI";

export default {
  name: "AMenu",
  props: {
    breakpointMobile: {
      type: Number,
      required: false,
      default: 991,
    },
    buttonToggleVisible: {
      type: String,
      required: false,
      default: "always",
      validator: value => ["always", "mobile", "desktop"].indexOf(value) !== -1,
    },
    buttonToggleClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    isBackdrop: {
      type: Boolean,
      required: false,
      default: true,
    },
    isBlockerClickable: {
      type: Boolean,
      required: false,
    },
    isBreadcrumbsAll: {
      type: Boolean,
      required: false,
      default: true,
    },
    isOpenDefault: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSearch: {
      type: Boolean,
      required: false,
      default: true,
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
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyParent: {
      type: String,
      required: false,
      default: "parent",
    },
  },
  setup(props) {
    const {
      dataKeyById,
      dataProParent,
    } = AMenuDataAPI(props);

    const buttonToggleVisible = toRef(props, "buttonToggleVisible");
    const isButtonToggleVisible = computed(() => {
      return !!buttonToggleVisible.value;
    });

    const {
      idsSearchVisible,
      isSearchActive,
      dataProParentList,
      modelSearch,
      resetSearch,
      updateModelSearch,
    } = AMenuSearchAPI(props, {
      dataProParent,
    });

    const {
      isMenuOpen,
      toggleMenu,
    } = AMenuToggleAPI();

    const {
      clickMenuLink,
      closeAllPanels,
      panelParentsOpen,
      togglePanel,
    } = AMenuPanelsAPI(props, {
      dataProParent,
      dataKeyById,
      resetSearch,
    });

    const {
      initMenuOpenOrClose,
    } = AMenuResizeAPI(props, {
      toggleMenu,
    });

    const {
      attributesBlockerClick,
    } = AMenuBlockerClickAPI(props, {
      closeAllPanels,
    });

    watch(isMenuOpen, (newValue, altValue) => {
      if (!newValue && altValue) {
        resetSearch();
      }
    });

    provide("clickMenuLink", clickMenuLink);
    provide("togglePanel", togglePanel);

    initMenuOpenOrClose();

    return {
      attributesBlockerClick,
      idsSearchVisible,
      isButtonToggleVisible,
      isMenuOpen,
      isSearchActive,
      dataKeyById,
      dataProParent,
      dataProParentList,
      modelSearch,
      panelParentsOpen,
      updateModelSearch,
    };
  },
  render() {
    return [
      h("nav", {
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
            label: "Menüsuche",
            "onUpdate:modelValue": this.updateModelSearch,
          }),
          h(AMenuBreadcrumbs, {
            dataKeyById: this.dataKeyById,
            isBreadcrumbsAll: this.isBreadcrumbsAll,
            panelParentsOpen: this.panelParentsOpen,
            isSearchActive: this.isSearchActive,
          }),
        ]),
        h("div", {
          class: "a_menu__panels",
        }, [
          h(AMenuPanel, {
            attributesBlockerClick: this.attributesBlockerClick,
            dataProParentChildren: this.dataProParent.children,
            isFirst: true,
            isSearchActive: this.isSearchActive,
            keyGroup: this.keyGroup,
            keyIcon: this.keyIcon,
            panelItems: this.dataProParent.main,
            panelParentsOpen: this.panelParentsOpen,
          }),
          Object.keys(this.dataProParent.children).map(key => {
            return h(AMenuPanel, {
              key,
              attributesBlockerClick: {},
              dataProParentChildren: this.dataProParent.children,
              isSearchActive: this.isSearchActive,
              keyGroup: this.keyGroup,
              keyIcon: this.keyIcon,
              panelItems: this.dataProParent.children[key],
              panelParentsOpen: this.panelParentsOpen,
              parentId: key,
            });
          }),
          h(AMenuSearchPanel, {
            dataKeyById: this.dataKeyById,
            dataProParentChildren: this.dataProParent.children,
            dataProParentList: this.dataProParentList,
            idsSearchVisible: this.idsSearchVisible,
            isSearchActive: this.isSearchActive,
            modelSearch: this.modelSearch,
          }),
        ]),
        this.isBackdrop && h(Teleport, {
          to: "body",
        }, [
          h("div", {
            class: "a_menu__backdrop a_backdrop a_backdrop_fade",
          }),
        ]),
      ]),
      this.isButtonToggleVisible && h(AMenuButtonToggle, {
        buttonToggleVisible: this.buttonToggleVisible,
        class: this.buttonToggleClass,
      }),
    ];
  },
};
