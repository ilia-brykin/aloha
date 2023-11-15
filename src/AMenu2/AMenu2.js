import {
  computed,
  h,
  onBeforeUnmount,
  provide,
  Teleport,
  toRef,
  watch,
} from "vue";

import AButton from "../AButton/AButton";
import AInput from "../ui/AInput/AInput";
import AMenuButtonToggle from "./AMenuButtonToggle/AMenuButtonToggle";
import AMenuPanel from "./AMenuPanel/AMenuPanel";
import AMenuSearchPanel from "./AMenuSearchPanel";
import ATranslation from "../ATranslation/ATranslation";

import AMenuBlockerClickAPI from "./compositionAPI/AMenuBlockerClickAPI";
import CheckRoutesAPI from "./compositionAPI/CheckRoutesAPI";
import DataAPI from "./compositionAPI/DataAPI";
import LinkClickAPI from "./compositionAPI/LinkClickAPI";
import MenuAttributesAPI from "./compositionAPI/MenuAttributesAPI";
import PanelsAPI from "./compositionAPI/PanelsAPI";
import ResizeAPI from "./compositionAPI/ResizeAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import SearchBtnAPI from "./compositionAPI/SearchBtnAPI";
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
    breadcrumbsLinkClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_link",
    },
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
      default: false,
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
    showCountChildren: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const isLinkTruncated = toRef(props, "isLinkTruncated");
    const showCountChildren = toRef(props, "showCountChildren");

    const {
      dataKeyById,
      dataProParent,
    } = DataAPI(props);

    const {
      dataProParentList,
      idsSearchVisible,
      isSearchActive,
      modelSearch,
      resetSearch,
      searchInputId,
      updateModelSearch,
    } = SearchAPI(props, {
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
      clickOnSearchBtn,
      keydownOnSearchBtn,
    } = SearchBtnAPI({
      searchInputId,
      toggleMenu,
    });

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

    provide("clickMenuLink", clickMenuLink);
    provide("isLinkTruncated", computed(() => isLinkTruncated.value));
    provide("isMenuOpen", computed(() => isMenuOpen.value));
    provide("panelParentsOpen", panelParentsOpen);
    provide("showCountChildren", computed(() => showCountChildren.value));
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
      clickOnSearchBtn,
      dataKeyById,
      dataProParent,
      dataProParentList,
      idsSearchVisible,
      isMenuOpen,
      isMobileWidth,
      isSearchActive,
      isSubMenuOpen,
      keydownOnSearchBtn,
      modelSearch,
      panelParentsOpen,
      removeBodyClasses,
      searchInputId,
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
            id: this.searchInputId,
            class: "a_menu_2__navbar_top__search",
            modelValue: this.modelSearch,
            label: "_A_MENU_2_SEARCH_",
            "onUpdate:modelValue": this.updateModelSearch,
          }),
        ]),
        h("div", {
          class: "a_menu_2__panels",
        }, [
          h("div", {
            class: "a_menu_2__navbar_top_sub",
          }, [
            h(ATranslation, {
              class: "a_menu_2__navbar_top_sub__text",
              tag: "strong",
              text: "_A_MENU_2_MAIN_MENU_",
            }),
            this.hasSearch && h(AButton, {
              role: "button",
              tabindex: 0,
              tag: "a",
              class: "a_menu_2__navbar_top_sub__search a_menu_2__link a_menu_2__link_btn",
              iconLeft: "Search",
              iconClass: "a_menu_2__link__icon",
              title: "_A_MENU_2_OPEN_SEARCH_",
              textScreenReader: "_A_MENU_2_OPEN_SEARCH_",
              onClick: this.clickOnSearchBtn,
              onKeydown: this.keydownOnSearchBtn,
            }),
          ]),
          h("div", {
            class: "a_menu_2__panels__main",
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
          ]),

          Object.keys(this.dataProParent.children).map((key, paneIndex) => {
            return h(AMenuPanel, {
              key,
              attributesBlockerClick: {},
              breadcrumbsLinkClass: this.breadcrumbsLinkClass,
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
