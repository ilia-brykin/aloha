import {
  h,
  inject,
  withDirectives,
} from "vue";

import AButton from "../../AButton/AButton";
import ADropdown from "../../ADropdown/ADropdown";
import ATranslation from "../../ATranslation/ATranslation";

import EventsAPI from "./compositionAPI/EventsAPI";
import ItemsAPI from "./compositionAPI/ItemsAPI";
import RenderTruncatedAPI from "./compositionAPI/RenderTruncatedAPI";

import AOnHooks from "../../directives/AOnHooks";

const ThreeDots = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>`;

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
    const breadcrumbsTruncatedOffset = inject("breadcrumbsTruncatedOffset");

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
      breadcrumbsTruncatedOffset,
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
      return null;
    }

    if (this.isBreadcrumbsTruncated) {
      return h(ATranslation, {
        ariaLabel: "_A_MENU_2_BREADCRUMB_",
        class: "a_menu__breadcrumb a_menu__breadcrumb_secondary",
        tag: "nav",
      }, () => [
        withDirectives(h("ul", {
          class: [
            "a_menu__breadcrumb__ul a_menu__breadcrumb__ul_truncated",
          ],
        }, [
          this.breadcrumbsItemsDropdown.length > 0 ?
            h("li", {
              class: "a_menu__breadcrumbs__item",
            }, [
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
                  this.breadcrumbsItemsDropdown.map(breadcrumbsItem => {
                    const ATTR = breadcrumbsItem.panelParentId ?
                      {
                        tag: "a",
                        class: [
                          "a_menu__breadcrumbs__link",
                          this.breadcrumbsLinkClass,
                        ],
                        role: "button",
                        tabindex: 0,
                        onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                        onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
                      } :
                      {
                        class: "a_menu__breadcrumbs__link",
                        tag: "strong",
                      };
                    return h("li", {
                      key: breadcrumbsItem.panelParentId,
                      class: "a_menu__breadcrumbs__item",
                    }, [
                      h(AButton, {
                        text: breadcrumbsItem.label,
                        title: breadcrumbsItem.label,
                        ...ATTR,
                      }),
                      h("span", {
                        class: "a_menu__breadcrumbs__item__divider",
                      }, "/"),
                    ]);
                  }),
                ],
              }),
            ]) :
            "",
          this.breadcrumbsItemsTruncated.map(breadcrumbsItem => {
            const ATTR = breadcrumbsItem.panelParentId ?
              {
                tag: "a",
                class: [
                  "a_menu__breadcrumbs__link",
                  this.breadcrumbsLinkClass,
                ],
                role: "button",
                tabindex: 0,
                onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
              } :
              {
                class: "a_menu__breadcrumbs__link",
                tag: "strong",
              };
            return withDirectives(h("li", {
              key: breadcrumbsItem.panelParentId,
              class: "a_menu__breadcrumbs__item",
            }, [
              !breadcrumbsItem.isFirst && h("span", {
                class: "a_menu__breadcrumbs__item__divider",
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
        class: "a_menu__breadcrumb a_menu__breadcrumb_secondary",
        tag: "nav",
      }, () => [
        h("ul", {
          class: [
            "a_menu__breadcrumb__ul",
          ],
        }, [
          this.breadcrumbsItems.map(breadcrumbsItem => {
            const ATTR = breadcrumbsItem.panelParentId ?
              {
                tag: "a",
                class: [
                  "a_menu__breadcrumbs__link",
                  this.breadcrumbsLinkClass,
                ],
                role: "button",
                tabindex: 0,
                onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
              } :
              {
                class: "a_menu__breadcrumbs__link",
                tag: "strong",
              };
            return h("li", {
              key: breadcrumbsItem.panelParentId,
              class: "a_menu__breadcrumbs__item",
            }, [
              !breadcrumbsItem.isFirst && h("span", {
                class: "a_menu__breadcrumbs__item__divider",
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
