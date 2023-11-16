import {
  h,
  withDirectives,
} from "vue";

import AButton from "../../AButton/AButton";
import ADropdown from "../../ADropdown/ADropdown";
import ATranslation from "../../ATranslation/ATranslation";

import AOnHooks from "../../directives/AOnHooks";

import EventsAPI from "./compositionAPI/EventsAPI";
import ItemsAPI from "./compositionAPI/ItemsAPI";
import RenderTruncatedAPI from "./compositionAPI/RenderTruncatedAPI";

export default {
  name: "AMenuBreadcrumbs",
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
    isBreadcrumbsTruncated: {
      type: Boolean,
      required: true,
    },
    isSearchActive: {
      type: Boolean,
      required: true,
    },
    isPanelMain: {
      type: Boolean,
      required: false,
    },
    dataKeyById: {
      type: Object,
      required: true,
    },
    panelParentsOpen: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const {
      breadcrumbsItems,
    } = ItemsAPI(props);

    const {
      goBack,
      goBackKeydown,
    } = EventsAPI();

    const {
      breadcrumbsItemsDropdown,
      breadcrumbsItemsTruncated,
      isRenderedAll,
      renderItem,
      renderParent,
    } = RenderTruncatedAPI({
      breadcrumbsItems,
    });

    return {
      breadcrumbsItems,
      breadcrumbsItemsDropdown,
      breadcrumbsItemsTruncated,
      goBack,
      goBackKeydown,
      isRenderedAll,
      renderItem,
      renderParent,
    };
  },
  render() {
    if (this.isSearchActive || this.isPanelMain) {
      return "";
    }

    if (this.isBreadcrumbsTruncated) {
      return h(ATranslation, {
        ariaLabel: "_A_MENU_2_BREADCRUMB_",
        class: "a_menu_2__breadcrumb a_menu_2__breadcrumb_secondary",
        tag: "nav",
      }, () => [
        withDirectives(h("ul", {
          class: [
            "a_menu_2__breadcrumb__ul a_menu_2__breadcrumb__ul_truncated",
          ],
        }, [
          this.breadcrumbsItemsDropdown.length > 0 && h(ADropdown, {
            buttonClass: "a_btn a_btn_secondary a_btn_small a_menu_2__breadcrumb__ul_truncated__btn",
            buttonIconLeft: "ThreeDots",
            buttonTextScreenReader: "_A_MENU_2_BREADCRUMB_SHOW_BTN_",
            buttonTitle: "_A_MENU_2_BREADCRUMB_SHOW_BTN_",
            dropdownClass: "a_menu_2__breadcrumb__ul_truncated__dropdown",
            hasCaret: false,
            inBody: true,
            ...this.breadcrumbsTruncatedDropdownProps,
          }, {
            dropdown: () => [
              this.breadcrumbsItemsDropdown.map(breadcrumbsItem => {
                const ATTR = breadcrumbsItem.panelParentId ?
                  {
                    tag: "a",
                    class: [
                      "a_menu_2__breadcrumbs__link",
                      this.breadcrumbsLinkClass,
                    ],
                    role: "button",
                    tabindex: 0,
                    onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                    onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
                  } :
                  {
                    class: "a_menu_2__breadcrumbs__link",
                    tag: "strong",
                  };
                return h("li", {
                  key: breadcrumbsItem.panelParentId,
                  class: "a_menu_2__breadcrumbs__item",
                }, [
                  h(AButton, {
                    text: breadcrumbsItem.label,
                    title: breadcrumbsItem.label,
                    ...ATTR,
                  }),
                  h("span", {
                    class: "a_menu_2__breadcrumbs__item__divider",
                  }, "/"),
                ]);
              }),
            ],
          }),
          this.breadcrumbsItemsTruncated.map(breadcrumbsItem => {
            const ATTR = breadcrumbsItem.panelParentId ?
              {
                tag: "a",
                class: [
                  "a_menu_2__breadcrumbs__link",
                  this.breadcrumbsLinkClass,
                ],
                role: "button",
                tabindex: 0,
                onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
              } :
              {
                class: "a_menu_2__breadcrumbs__link",
                tag: "strong",
              };
            return withDirectives(h("li", {
              key: breadcrumbsItem.panelParentId,
              class: "a_menu_2__breadcrumbs__item",
            }, [
              !breadcrumbsItem.isFirst && h("span", {
                class: "a_menu_2__breadcrumbs__item__divider",
              }, "/"),
              h(AButton, {
                text: breadcrumbsItem.label,
                title: breadcrumbsItem.label,
                ...ATTR,
              }),
            ]), [
              [AOnHooks, { mounted: this.renderItem }],
            ]);
          }),
        ]), [
          [AOnHooks, { mounted: this.renderParent }],
        ]),
      ]);
    }

    if (!this.isBreadcrumbsTruncated) {
      return h(ATranslation, {
        ariaLabel: "_A_MENU_2_BREADCRUMB_",
        class: "a_menu_2__breadcrumb a_menu_2__breadcrumb_secondary",
        tag: "nav",
      }, () => [
        h("ul", {
          class: [
            "a_menu_2__breadcrumb__ul",
          ],
        }, [
          this.breadcrumbsItems.map(breadcrumbsItem => {
            const ATTR = breadcrumbsItem.panelParentId ?
              {
                tag: "a",
                class: [
                  "a_menu_2__breadcrumbs__link",
                  this.breadcrumbsLinkClass,
                ],
                role: "button",
                tabindex: 0,
                onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
              } :
              {
                class: "a_menu_2__breadcrumbs__link",
                tag: "strong",
              };
            return h("li", {
              key: breadcrumbsItem.panelParentId,
              class: "a_menu_2__breadcrumbs__item",
            }, [
              !breadcrumbsItem.isFirst && h("span", {
                class: "a_menu_2__breadcrumbs__item__divider",
              }, "/"),
              h(AButton, {
                text: breadcrumbsItem.label,
                title: breadcrumbsItem.label,
                ...ATTR,
              }),
            ]);
          }),
        ]),
      ]);
    }
  },
};
