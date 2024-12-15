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
import AMenuSearchPanel from "./AMenuSearchPanel/AMenuSearchPanel";
import ATranslation from "../ATranslation/ATranslation";
import AVerticalScroll from "../AVerticalScroll/AVerticalScroll";

import AMenuBlockerClickAPI from "./compositionAPI/AMenuBlockerClickAPI";
import BackdropAPI from "./compositionAPI/BackdropAPI";
import CheckRoutesAPI from "./compositionAPI/CheckRoutesAPI";
import DataAPI from "./compositionAPI/DataAPI";
import KeydownAPI from "./compositionAPI/KeydownAPI";
import LinkClickAPI from "./compositionAPI/LinkClickAPI";
import MenuAttributesAPI from "./compositionAPI/MenuAttributesAPI";
import PanelMainAPI from "./compositionAPI/PanelMainAPI";
import PanelsAPI from "./compositionAPI/PanelsAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import ResizeAPI from "./compositionAPI/ResizeAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import SearchBtnAPI from "./compositionAPI/SearchBtnAPI";
import ToggleAPI from "./AMenuButtonToggle/compositionAPI/ToggleAPI";

import Search from "aloha-svg/dist/js/bootstrap/Search";
import {
  uniqueId,
} from "lodash-es";

const DROPDOWN_BUTTON_WIDTH = 34;
const BREADCRUMBS_PADDINGS = 20;

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
    breadcrumbsTruncatedDropdownProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    breadcrumbsTruncatedOffset: {
      type: Number,
      required: false,
      default: () => DROPDOWN_BUTTON_WIDTH + BREADCRUMBS_PADDINGS,
    },
    buttonToggleClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_transparent_secondary a_btn_small",
    },
    buttonToggleProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    canChangeBodyClass: {
      type: Boolean,
      required: false,
      default: true,
    },
    compareUrlCallback: {
      type: Function,
      required: false,
      default: undefined,
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
    isBackdropMobileClickable: {
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
    isSearchBreadcrumbsTruncated: {
      type: Boolean,
      required: false,
      default: true,
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
    useBackdropMobile: {
      type: Boolean,
      required: false,
      default: true,
    },
    useEscapeForMobile: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const isLinkTruncated = toRef(props, "isLinkTruncated");
    const showCountChildren = toRef(props, "showCountChildren");
    const breadcrumbsTruncatedOffset = toRef(props, "breadcrumbsTruncatedOffset");

    const {
      dataKeyById,
      dataProParent,
    } = DataAPI(props);

    const {
      isSearchActive,
      itemsWithSearch,
      modelSearch,
      resetSearch,
      searchInputId,
      styleSearchPanelMain,
      updateModelSearch,
    } = SearchAPI(props, {
      dataKeyById,
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
      closeMenu,
      isMenuOpen,
      removeBodyClasses,
      toggleMenu,
    } = ToggleAPI(props);

    const {
      menuRef,
      removeListenerForKeydown,
      setListenerForKeydown,
    } = KeydownAPI(props, {
      closeMenu,
    });

    const {
      clickOnSearchBtn,
      keydownOnSearchBtn,
    } = SearchBtnAPI({
      searchInputId,
      toggleMenu,
    });

    const {
      attributesMenuClick,
      attributesMobile,
      headerId,
    } = MenuAttributesAPI(props, {
      isMenuOpen,
      toggleMenu,
    });

    const {
      destroyEventBusUpdateViewOnResize,
      initEventBusUpdateViewOnResize,
      initMenuOpenOrClose,
      isMenuInitialized,
      isMobileWidth,
    } = ResizeAPI(props, {
      removeListenerForKeydown,
      toggleMenu,
    });

    const {
      clickMenuLink,
      isMenuLinkClicked,
    } = LinkClickAPI(props, {
      closeAllPanels,
      isMenuOpen,
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
      activeRoutesIds,
      checkAllRoutes,
      currentRoute,
    } = CheckRoutesAPI(props, {
      dataKeyById,
      dataProParent,
      isMenuLinkClicked,
      isMenuOpen,
      panelParentsOpen,
    });

    const {
      destroyPopover,
      startPopper,
    } = PopoverAPI(props, {
      menuRef,
      isMenuOpen,
      panelParentsOpen,
    });

    const {
      isLeastOnePanelOpenAndMenuClosed,
    } = PanelMainAPI({
      isMenuOpen,
      panelParentsOpen,
    });

    const {
      clickAttributesBackdrop,
      isBackdropVisible,
    } = BackdropAPI(props, {
      isMenuOpen,
      isMobileWidth,
      toggleMenu,
    });

    watch(currentRoute, () => {
      checkAllRoutes();
    }, {
      immediate: true,
      deep: true,
    });

    watch(isMenuOpen, newValue => {
      if (!isMenuInitialized.value) {
        return;
      }
      resetSearch();
      closeAllPanels();
      if (newValue) {
        destroyPopover();
        setListenerForKeydown();
      } else {
        removeListenerForKeydown();
      }
    });

    watch(panelParentsOpen, () => {
      startPopper();
    }, {
      deep: true,
    });

    provide("activeRoutesIds", computed(() => activeRoutesIds.value));
    provide("clickMenuLink", clickMenuLink);
    provide("isLinkTruncated", computed(() => isLinkTruncated.value));
    provide("isMenuOpen", computed(() => isMenuOpen.value));
    provide("panelParentsOpen", panelParentsOpen);
    provide("showCountChildren", computed(() => showCountChildren.value));
    provide("togglePanel", togglePanel);
    provide("breadcrumbsTruncatedOffset", computed(() => breadcrumbsTruncatedOffset.value));

    initMenuOpenOrClose();
    initEventBusUpdateViewOnResize();

    onBeforeUnmount(() => {
      removeBodyClasses();
      destroyEventBusUpdateViewOnResize();
      destroyPopover();
      removeListenerForKeydown();
    });

    return {
      activeRoutesIds,
      attributesBlockerClick,
      attributesMenuClick,
      attributesMobile,
      checkAllRoutes,
      clickAttributesBackdrop,
      clickOnSearchBtn,
      dataKeyById,
      dataProParent,
      headerId,
      isBackdropVisible,
      isLeastOnePanelOpenAndMenuClosed,
      isMenuOpen,
      isMobileWidth,
      isSearchActive,
      isSubMenuOpen,
      itemsWithSearch,
      keydownOnSearchBtn,
      menuRef,
      modelSearch,
      panelParentsOpen,
      removeBodyClasses,
      searchInputId,
      setDefaultMenu,
      styleSearchPanelMain,
      toggleMenu,
      togglePanel,
      updateModelSearch,
    };
  },
  render() {
    return h("nav", {
      ref: "menuRef",
      id: this.menuId,
      "aria-labelledby": this.headerId,
      class: [
        "a_menu_2",
        {
          a_menu_2_sub_open: this.isSubMenuOpen,
          a_menu_2_open: this.isMenuOpen,
          a_menu_2_close: !this.isMenuOpen,
          a_menu_2_mobile: this.isMobileWidth,
        },
      ],
      ...this.attributesMobile,
      ...this.attributesMenuClick,
    }, [
      h("div", {
        class: "a_menu_2__navbar_top",
      }, [
        h(AMenuButtonToggle, {
          buttonToggleProps: this.buttonToggleProps,
          canChangeBodyClass: this.canChangeBodyClass,
          class: this.buttonToggleClass,
          insideMenu: true,
          menuId: this.menuId,
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
        class: "a_menu_2__panels__main",
        style: this.styleSearchPanelMain,
      }, [
        h("div", {
          class: "a_menu_2__navbar_top_sub",
        }, [
          h(ATranslation, {
            id: this.headerId,
            class: "a_menu_2__navbar_top_sub__text",
            tag: "strong",
            text: "_A_MENU_2_MAIN_MENU_",
          }),
          this.hasSearch && h(AButton, {
            role: "button",
            tabindex: 0,
            tag: "a",
            class: "a_menu_2__navbar_top_sub__search a_menu_2__link a_menu_2__link_btn",
            iconLeft: Search,
            iconClass: "a_menu_2__link__icon",
            title: "_A_MENU_2_OPEN_SEARCH_",
            textScreenReader: "_A_MENU_2_OPEN_SEARCH_",
            onClick: this.clickOnSearchBtn,
            onKeydown: this.keydownOnSearchBtn,
          }),
        ]),
        h(AVerticalScroll, {
          class: {
            a_menu_2__vertical_scroll_hidden: this.isLeastOnePanelOpenAndMenuClosed
          },
          disabled: this.isMenuOpen || this.isLeastOnePanelOpenAndMenuClosed,
        }, () => [
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
        h("div", {
          class: "a_menu_2__panels",
        }, [
          Object.keys(this.dataProParent.children).map((key, paneIndex) => {
            return h(AMenuPanel, {
              key,
              attributesBlockerClick: {},
              breadcrumbsLinkClass: this.breadcrumbsLinkClass,
              breadcrumbsTruncatedDropdownProps: this.breadcrumbsTruncatedDropdownProps,
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
        ]),
      ]),
      h(AMenuSearchPanel, {
        breadcrumbsLinkClass: this.breadcrumbsLinkClass,
        breadcrumbsTruncatedDropdownProps: this.breadcrumbsTruncatedDropdownProps,
        dataProParentChildren: this.dataProParent.children,
        isSearchActive: this.isSearchActive,
        isSearchBreadcrumbsTruncated: this.isSearchBreadcrumbsTruncated,
        itemsWithSearch: this.itemsWithSearch,
        menuId: this.menuId,
        modelSearch: this.modelSearch,
      }, this.$slots),

      this.isBackdropVisible ? h(Teleport, {
        to: "body",
      }, [
        h("div", {
          class: "a_menu_2__backdrop a_backdrop a_backdrop_fade",
          "aria-hidden": true,
          ...this.clickAttributesBackdrop,
        }),
      ]) : "",
    ]);
  },
};
