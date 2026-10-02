import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ADropdown from "../../ADropdown/ADropdown";
import AMenuPanelLink from "../AMenuPanelLink/AMenuPanelLink";

import BreadcrumbsItemsAPI from "./compositionAPI/BreadcrumbsItemsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";

const ThreeDots = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>`;


export default {
  name: "AMenuSearchPanelBreadcrumbs",
  props: {
    breadcrumbsLinkClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    breadcrumbsTruncatedDropdownProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    dataProParentChildren: {
      type: Object,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    isSearchBreadcrumbsTruncated: {
      type: Boolean,
      required: false,
      default: false,
    },
    menuId: {
      type: String,
      required: true,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      breadcrumbsItems,
    } = BreadcrumbsItemsAPI(props);

    const {
      goTo,
      goToKeydown,
    } = EventsAPI();

    return {
      breadcrumbsItems,
      goTo,
      goToKeydown,
    };
  },
  render() {
    return h("li", {}, [
      h("ul", {
        class: "a_menu__breadcrumb__ul a_menu__breadcrumb__ul_search",
      }, [
        h("li", {}, [
          h(ADropdown, {
            buttonClass: "a_btn a_btn_secondary a_btn_small a_menu__breadcrumb__ul_truncated__btn",
            buttonIconLeft: ThreeDots,
            buttonTextScreenReader: "_A_MENU_2_BREADCRUMB_SHOW_BTN_",
            buttonTitle: "_A_MENU_2_BREADCRUMB_SHOW_BTN_",
            dropdownClass: "a_menu__breadcrumb__ul_truncated__dropdown",
            hasCaret: false,
            inBody: true,
            ...this.breadcrumbsTruncatedDropdownProps,
          }, {
            dropdown: () => [
              this.breadcrumbsItems.map(breadcrumbsItem => {
                return h("li", {
                  key: breadcrumbsItem.parentId,
                  class: "a_menu__breadcrumbs__item",
                }, [
                  h(AButton, {
                    text: breadcrumbsItem.label,
                    title: breadcrumbsItem.label,
                    tag: "a",
                    class: [
                      "a_menu__breadcrumbs__link",
                      this.breadcrumbsLinkClass,
                    ],
                    role: "button",
                    tabindex: 0,
                    onClick: () => this.goTo({ parentIds: breadcrumbsItem.parentIds }),
                    onKeydown: $event => this.goToKeydown({ $event, parentIds: breadcrumbsItem.parentIds }),
                  }),
                  h("span", {
                    class: "a_menu__breadcrumbs__item__divider",
                  }, "/"),
                ]);
              }),
            ],
          }),
        ]),
        h(AMenuPanelLink, {
          item: this.item,
          dataProParentChildren: this.dataProParentChildren,
          isLinkInSearchPanel: true,
          modelSearch: this.modelSearch,
          menuId: this.menuId,
        }, this.$slots),
      ]),
    ]);
  },
};
