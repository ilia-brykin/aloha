import {
  computed,
  h, onBeforeUnmount,
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
import DestroyAPI from "./compositionAPI/DestroyAPI";
import MenuAttributesAPI from "./compositionAPI/MenuAttributesAPI";

export default {
  name: "AMenu",
  provide() {
    return {
      keySlot: computed(() => this.keySlot),
    };
  },
  props: {
    breakpointMobile: {
      type: Number,
      required: false,
      default: 991,
    },
    buttonToggleClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    buttonToggleVisible: {
      type: String,
      required: false,
      default: "always",
      validator: value => ["always", "mobile", "desktop"].indexOf(value) !== -1,
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
    isBreadcrumbsLinkTruncated: {
      type: Boolean,
      required: false,
      default: true,
    },
    isLinkTruncated: {
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
    isSearchBreadcrumbsAll: {
      type: Boolean,
      required: false,
      default: false,
    },
    keyChildren: {
      type: String,
      required: false,
      default: undefined,
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
    keySlot: {
      type: String,
      required: false,
      default: undefined,
    },
    isBodyFocusAfterClick: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const isLinkTruncated = toRef(props, "isLinkTruncated");

    const {
      removeBodyClasses,
    } = DestroyAPI();

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
      attributesMenuClick,
    } = MenuAttributesAPI(props, {
      isMenuOpen,
      toggleMenu,
    });

    const {
      initMenuOpenOrClose,
      isMenuMobile,
    } = AMenuResizeAPI(props, {
      toggleMenu,
    });

    const {
      clickMenuLink,
      closeAllPanels,
      panelParentsOpen,
      setDefaultMenu,
      togglePanel,
    } = AMenuPanelsAPI(props, {
      dataProParent,
      dataKeyById,
      resetSearch,
      isMenuMobile,
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

    provide("isLinkTruncated", computed(() => isLinkTruncated.value));
    provide("isMenuOpen", computed(() => isMenuOpen.value));
    provide("clickMenuLink", clickMenuLink);
    provide("togglePanel", togglePanel);

    initMenuOpenOrClose();

    onBeforeUnmount(() => {
      removeBodyClasses();
    });

    return {
      attributesBlockerClick,
      attributesMenuClick,
      dataKeyById,
      dataProParent,
      dataProParentList,
      idsSearchVisible,
      isButtonToggleVisible,
      isMenuOpen,
      isMenuMobile,
      isSearchActive,
      modelSearch,
      panelParentsOpen,
      removeBodyClasses,
      setDefaultMenu,
      toggleMenu,
      togglePanel,
      updateModelSearch,
    };
  },
  render() {
    return [
      h("nav", {
        class: "a_menu",
        ...this.attributesMenuClick,
      }, [
        h("div", {
          class: "a_menu__blocker",
          ariaHidden: true,
        }),
        h("div", {
          class: "a_menu__navbar_top",
        }, [
          this.$slots.aMenuHeader && this.$slots.aMenuHeader(),
          this.isSearch && h(AInput, {
            id: "a_menu_search",
            class: "a_menu__navbar_top__search",
            modelValue: this.modelSearch,
            label: "_MENUESUCHE_",
            "onUpdate:modelValue": this.updateModelSearch,
          }),
          h(AMenuBreadcrumbs, {
            dataKeyById: this.dataKeyById,
            isBreadcrumbsAll: this.isBreadcrumbsAll,
            panelParentsOpen: this.panelParentsOpen,
            isSearchActive: this.isSearchActive,
            isBreadcrumbsLinkTruncated: this.isBreadcrumbsLinkTruncated,
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
          }, this.$slots),
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
            }, this.$slots);
          }),
          h(AMenuSearchPanel, {
            dataKeyById: this.dataKeyById,
            dataProParentChildren: this.dataProParent.children,
            dataProParentList: this.dataProParentList,
            idsSearchVisible: this.idsSearchVisible,
            isSearchActive: this.isSearchActive,
            isSearchBreadcrumbsAll: this.isSearchBreadcrumbsAll,
            modelSearch: this.modelSearch,
          }, this.$slots),
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
