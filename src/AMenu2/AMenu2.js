import {
  computed,
  h,
  onBeforeUnmount,
  provide,
  Teleport,
  toRef,
  watch,
} from "vue";

import AInput from "../ui/AInput/AInput";
import AMenuButtonToggle from "./AMenuButtonToggle/AMenuButtonToggle";
import AMenuPanel from "./AMenuPanel/AMenuPanel";
import AMenuSearchPanel from "./AMenuSearchPanel";

import AMenuBlockerClickAPI from "./compositionAPI/AMenuBlockerClickAPI";
import AMenuSearchAPI from "./compositionAPI/AMenuSearchAPI";
import CheckRoutesAPI from "./compositionAPI/CheckRoutesAPI";
import DataAPI from "./compositionAPI/DataAPI";
import LinkClickAPI from "./compositionAPI/LinkClickAPI";
import MenuAttributesAPI from "./compositionAPI/MenuAttributesAPI";
import PanelsAPI from "./compositionAPI/PanelsAPI";
import ResizeAPI from "./compositionAPI/ResizeAPI";
import ToggleAPI from "./AMenuButtonToggle/compositionAPI/ToggleAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AMenu2",
  provide() {
    return {
      keySlot: computed(() => this.keySlot),
    };
  },
  props: {
    buttonToggleClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    buttonToggleProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    canChangeBodyClass: {
      type: Boolean,
      required: false,
      default: false,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    hasSearch: {
      type: Boolean,
      required: false,
      default: true,
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
    isBodyFocusAfterClick: {
      type: Boolean,
      required: false,
      default: true,
    },
    isBreadcrumbsTruncated: {
      type: Boolean,
      required: false,
      default: true,
    },
    isLinkTruncated: {
      type: Boolean,
      required: false,
      default: true,
    },
    isMenuOpenInitial: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSearchBreadcrumbsAll: {
      type: Boolean,
      required: false,
      default: false,
    },
    isTranslated: {
      type: Boolean,
      required: false,
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
    menuId: {
      type: String,
      required: false,
      default: () => uniqueId("a_menu_2_"),
    },
  },
  setup(props) {
    const isLinkTruncated = toRef(props, "isLinkTruncated");

    const {
      dataKeyById,
      dataProParent,
    } = DataAPI(props);

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
      closeAllPanels,
      isSubMenuOpen,
      panelParentsOpen,
      setDefaultMenu,
      togglePanel
    } = PanelsAPI(props, {
      dataKeyById,
      resetSearch,
    });

    const {
      isMenuOpen,
      removeBodyClasses,
      toggleMenu,
    } = ToggleAPI(props);

    const {
      attributesMenuClick,
    } = MenuAttributesAPI(props, {
      isMenuOpen,
      toggleMenu,
    });

    const {
      destroyEventBusUpdateViewOnResize,
      initEventBusUpdateViewOnResize,
      initMenuOpenOrClose,
      isMobileWidth,
    } = ResizeAPI(props, {
      toggleMenu,
    });

    const {
      clickMenuLink,
      isMenuLinkClicked,
    } = LinkClickAPI(props, {
      isMobileWidth,
      resetSearch,
      toggleMenu,
    });

    const {
      attributesBlockerClick,
    } = AMenuBlockerClickAPI(props, {
      closeAllPanels,
    });

    const {
      checkAllRoutes,
      currentRoute,
    } = CheckRoutesAPI({
      dataKeyById,
      dataProParent,
      isMenuLinkClicked,
      panelParentsOpen,
    });

    watch(currentRoute, () => {
      checkAllRoutes();
    }, {
      immediate: true,
    });

    watch(isMenuOpen, () => {
      resetSearch();
      closeAllPanels();
    });

    provide("isLinkTruncated", computed(() => isLinkTruncated.value));
    provide("isMenuOpen", computed(() => isMenuOpen.value));
    provide("clickMenuLink", clickMenuLink);
    provide("togglePanel", togglePanel);

    initMenuOpenOrClose();
    initEventBusUpdateViewOnResize();

    onBeforeUnmount(() => {
      removeBodyClasses();
      destroyEventBusUpdateViewOnResize();
    });

    return {
      attributesBlockerClick,
      attributesMenuClick,
      dataKeyById,
      dataProParent,
      dataProParentList,
      idsSearchVisible,
      isMobileWidth,
      isMenuOpen,
      isSearchActive,
      isSubMenuOpen,
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
        id: this.menuId,
        class: [
          "a_menu_2",
          {
            a_menu_2_sub_open: this.isSubMenuOpen,
            a_menu_2_open: this.isMenuOpen,
            a_menu_2_close: !this.isMenuOpen,
            a_menu_2_mobile: this.isMobileWidth,
          },
        ],
        ...this.attributesMenuClick,
      }, [
        h("div", {
          class: "a_menu_2__navbar_top",
        }, [
          h(AMenuButtonToggle, {
            menuId: this.menuId,
            class: this.buttonToggleClass,
            buttonToggleProps: this.buttonToggleProps,
          }),
          this.$slots.menuSearch && this.$slots.menuSearch(),
          this.hasSearch && h(AInput, {
            id: "a_menu_2_search",
            class: "a_menu_2__navbar_top__search",
            modelValue: this.modelSearch,
            label: "_SEARCH_MENU_",
            "onUpdate:modelValue": this.updateModelSearch,
          }),
        ]),
        h("div", {
          class: "a_menu_2__panels",
        }, [
          h(AMenuPanel, {
            attributesBlockerClick: this.attributesBlockerClick,
            dataKeyById: this.dataKeyById,
            dataProParentChildren: this.dataProParent.children,
            isBreadcrumbsTruncated: this.isBreadcrumbsTruncated,
            isPanelMain: true,
            isSearchActive: this.isSearchActive,
            keyGroup: this.keyGroup,
            keyIcon: this.keyIcon,
            menuId: this.menuId,
            paneIndex: "00",
            panelItems: this.dataProParent.main,
            panelParentsOpen: this.panelParentsOpen,
          }, this.$slots),
          Object.keys(this.dataProParent.children).map((key, paneIndex) => {
            return h(AMenuPanel, {
              key,
              attributesBlockerClick: {},
              dataKeyById: this.dataKeyById,
              dataProParentChildren: this.dataProParent.children,
              isBreadcrumbsTruncated: this.isBreadcrumbsTruncated,
              isSearchActive: this.isSearchActive,
              keyGroup: this.keyGroup,
              keyIcon: this.keyIcon,
              menuId: this.menuId,
              paneIndex,
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
            class: "a_menu_2__backdrop a_backdrop a_backdrop_fade",
          }),
        ]),
      ]),
    ];
  },
};
