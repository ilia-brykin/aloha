import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import ATranslation from "../../ATranslation/ATranslation";

import DisabledAPI from "./compositionAPI/DisabledAPI";
import PaginationItemsAPI from "./compositionAPI/PaginationItemsAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import UpdateOffsetAPI from "./compositionAPI/UpdateOffsetAPI";

import ChevronDoubleLeft from "aloha-svg/dist/js/bootstrap/ChevronDoubleLeft";
import ChevronDoubleRight from "aloha-svg/dist/js/bootstrap/ChevronDoubleRight";
import ChevronLeft from "aloha-svg/dist/js/bootstrap/ChevronLeft";
import ChevronRight from "aloha-svg/dist/js/bootstrap/ChevronRight";
import {
  isInteger,
} from "lodash-es";

export default {
  name: "APaginationPages",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    limit: {
      type: Number,
      required: true,
      validator: value => isInteger(value) && value > 0,
    },
    maxPages: {
      type: Number,
      required: false,
      default: 5,
      validator: value => isInteger(value) && value > 0,
    },
    mode: {
      type: String,
      required: false,
      default: "normal",
      validator: value => ["normal", "short", "loadMore"].indexOf(value) !== -1,
    },
    offset: {
      type: Number,
      required: true,
      validator: value => isInteger(value) && value >= 0,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({
        pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
        pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
        pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
        pagesNavigation: "_A_PAGINATION_NAVIGATION_",
        pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
        pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
        pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
      }),
    },
    totalCount: {
      type: Number,
      required: true,
      validator: value => isInteger(value) && value >= 0,
    },
  },
  emits: [
    "update:offset",
  ],
  setup(props, context) {
    const {
      currentItem,
      maxItems,
      paginationItems,
    } = PaginationItemsAPI(props);

    const {
      disabledButtonFirstPage,
      disabledButtonLastPage,
    } = DisabledAPI(props, {
      currentItem,
      maxItems,
    });

    const {
      keyDownUpdateOffset,
      keyDownUpdateOffsetFirst,
      keyDownUpdateOffsetLast,
      keyDownUpdateOffsetNext,
      keyDownUpdateOffsetPrevious,
      updateOffset,
      updateOffsetFirst,
      updateOffsetLast,
      updateOffsetNext,
      updateOffsetPrevious,
    } = UpdateOffsetAPI(props, context, {
      currentItem,
      disabledButtonFirstPage,
      disabledButtonLastPage,
      maxItems,
    });

    const {
      getTextToPage,
      isTextToPageFunction,
      textFirstPage,
      textLastPage,
      textMobile,
      textNavigation,
      textNextPage,
      textPreviousPage,
      textToPage,
    } = TextsAPI(props, {
      currentItem,
      maxItems,
    });

    return {
      currentItem,
      disabledButtonFirstPage,
      disabledButtonLastPage,
      getTextToPage,
      isTextToPageFunction,
      keyDownUpdateOffset,
      keyDownUpdateOffsetFirst,
      keyDownUpdateOffsetLast,
      keyDownUpdateOffsetNext,
      keyDownUpdateOffsetPrevious,
      maxItems,
      paginationItems,
      textFirstPage,
      textLastPage,
      textMobile,
      textNavigation,
      textNextPage,
      textPreviousPage,
      textToPage,
      updateOffset,
      updateOffsetFirst,
      updateOffsetLast,
      updateOffsetNext,
      updateOffsetPrevious,
    };
  },
  render() {
    return h(ATranslation, {
      tag: "nav",
      class: "a_pagination__nav",
      "aria-label": this.textNavigation,
    }, {
      default: () => {
        if (this.mode === "loadMore") {
          return h(AElement, {
            class: "a_btn a_btn_primary",
            text: "Load more", // TODO:
            type: "button",
          });
        }
        return [
          h("ul", {
            class: "a_pagination",
          }, [
            this.mode !== "short" ?
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonFirstPage }],
              }, [
                h(AElement, {
                  class: "a_pagination__item__link",
                  iconLeft: ChevronDoubleLeft,
                  role: "button",
                  tabindex: this.disabledButtonFirstPage ? -1 : 0,
                  tag: "a",
                  textScreenReader: this.textFirstPage,
                  title: this.textFirstPage,
                  type: "button",
                  onClick: this.updateOffsetFirst,
                  onKeydown: this.keyDownUpdateOffsetFirst,
                }),
              ]) :
              "",
            h("li", {
              class: ["a_pagination__item", { disabled: this.disabledButtonFirstPage }],
            }, [
              h(AElement, {
                class: "a_pagination__item__link",
                iconLeft: ChevronLeft,
                role: "button",
                tabindex: this.disabledButtonFirstPage ? -1 : 0,
                tag: "a",
                textScreenReader: this.textPreviousPage,
                title: this.textPreviousPage,
                type: "button",
                onClick: this.updateOffsetPrevious,
                onKeydown: this.keyDownUpdateOffsetPrevious,
              }),
            ]),
              this.mode === "short" ?
                h("li", {
                  class: "a_pagination__item",
                }, [
                  h(ATranslation, {
                    class: "a_pagination__item__text",
                    html: this.textMobile,
                    extra: {
                      currentPage: this.currentItem,
                      allPages: this.maxItems,
                    },
                  }),
                ]) :
                this.paginationItems.map(item => {
                  const IS_ACTIVE = item === this.currentItem;
                  const TITLE = this.isTextToPageFunction ?
                    this.getTextToPage({ page: item }) :
                    this.textToPage;

                  return h("li", {
                    class: ["a_pagination__item", {
                      active: IS_ACTIVE,
                      disabled: this.disabled,
                    }],
                  }, [
                    h(AElement, {
                      "aria-current": IS_ACTIVE ? true : undefined,
                      class: "a_pagination__item__link",
                      extra: {
                        page: item,
                      },
                      role: "button",
                      tabindex: IS_ACTIVE || this.disabled ? -1 : 0,
                      tag: "a",
                      text: item,
                      textAriaHidden: true,
                      textScreenReader: TITLE,
                      title: TITLE,
                      type: "button",
                      onClick: () => this.updateOffset(item),
                      onKeydown: $event => this.keyDownUpdateOffset($event, item),
                    }),
                  ]);
                }),
            h("li", {
              class: ["a_pagination__item", { disabled: this.disabledButtonLastPage }],
            }, [
              h(AElement, {
                class: "a_pagination__item__link",
                iconLeft: ChevronRight,
                role: "button",
                tabindex: this.disabledButtonLastPage ? -1 : 0,
                tag: "a",
                textScreenReader: this.textNextPage,
                title: this.textNextPage,
                type: "button",
                onClick: this.updateOffsetNext,
                onKeydown: this.keyDownUpdateOffsetNext,
              }),
            ]),
            this.mode !== "short" ?
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonLastPage }],
              }, [
                h(AElement, {
                  class: "a_pagination__item__link",
                  iconLeft: ChevronDoubleRight,
                  role: "button",
                  tabindex: this.disabledButtonLastPage ? -1 : 0,
                  tag: "a",
                  textScreenReader: this.textLastPage,
                  title: this.textLastPage,
                  type: "button",
                  onClick: this.updateOffsetLast,
                  onKeydown: this.keyDownUpdateOffsetLast,
                }),
              ]) :
              "",
          ]),
        ];
      },
    });
  },
};
