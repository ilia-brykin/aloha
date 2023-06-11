import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import DisabledAPI from "./compositionAPI/DisabledAPI";
import PaginationItemsAPI from "./compositionAPI/PaginationItemsAPI";
import UpdateOffsetAPI from "./compositionAPI/UpdateOffsetAPI";

import {
  isInteger,
} from "lodash-es";

export default {
  name: "ATablePagination",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    hasRows: {
      type: Boolean,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: false,
    },
    limit: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    paginationMaxItems: {
      type: Number,
      required: false,
      default: 5,
      validator: value => isInteger(value) && value > 0,
    },
    totalRowsCount: {
      type: Number,
      required: true,
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

    return {
      currentItem,
      disabledButtonFirstPage,
      disabledButtonLastPage,
      maxItems,
      paginationItems,
      updateOffset,
      updateOffsetFirst,
      updateOffsetLast,
      updateOffsetNext,
      updateOffsetPrevious,
    };
  },
  methods: {
  },
  render() {
    if (this.hasRows) {
      return h(ATranslation, {
        tag: "nav",
        role: "navigation",
        class: "a_pagination__nav",
        "aria-label": "_A_PAGINATION_NAVIGATION_",
      }, {
        default: () => {
          return [
            h("ul", {
              class: "a_pagination",
            }, [
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonFirstPage }]
              }, [
                h(AButton, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: this.disabledButtonFirstPage ? -1 : 0,
                  textScreenReader: "_A_PAGINATION_FIRST_PAGE_",
                  iconLeft: "DoubleAngleLeft",
                  onClick: this.updateOffsetFirst,
                }),
              ]),
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonFirstPage }]
              }, [
                h(AButton, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: this.disabledButtonFirstPage ? -1 : 0,
                  textScreenReader: "_A_PAGINATION_PREVIOUS_PAGE_",
                  iconLeft: "AngleLeft",
                  onClick: this.updateOffsetPrevious,
                }),
              ]),
              this.isMobile ?
                h("li", {
                  class: "a_pagination__item",
                }, [
                  h(ATranslation, {
                    class: "a_pagination__item__link disabled",
                    html: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
                    extra: {
                      currentPage: this.currentItem,
                      allPages: this.maxItems,
                    },
                  }),
                ]) :
                this.paginationItems.map(item => {
                  return h("li", {
                    class: ["a_pagination__item", {
                      active: item === this.currentItem,
                      disabled: this.disabled,
                    }],
                  }, [
                    h(AButton, {
                      tag: "a",
                      class: "a_pagination__item__link",
                      role: "button",
                      tabindex: item === this.currentItem || this.disabled ? -1 : 0,
                      textScreenReader: "_A_PAGINATION_TO_PAGE_{{page}}_",
                      text: item,
                      textAriaHidden: true,
                      extra: {
                        page: item,
                      },
                      onClick: () => this.updateOffset(item),
                    }),
                  ]);
                }),
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonLastPage }]
              }, [
                h(AButton, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: this.disabledButtonLastPage ? -1 : 0,
                  textScreenReader: "_A_PAGINATION_NEXT_PAGE_",
                  iconLeft: "AngleRight",
                  onClick: this.updateOffsetNext,
                }),
              ]),
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonLastPage }]
              }, [
                h(AButton, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: this.disabledButtonLastPage ? -1 : 0,
                  textScreenReader: "_A_PAGINATION_LAST_PAGE_",
                  iconLeft: "DoubleAngleRight",
                  onClick: this.updateOffsetLast,
                }),
              ]),
            ]),
          ];
        },
      });
    }
    return "";
  },
};
