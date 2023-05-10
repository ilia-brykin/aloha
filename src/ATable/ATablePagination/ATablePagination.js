import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import {
  ceil,
} from "lodash-es";

export default {
  name: "ATablePagination",
  props: {
    disabledPagination: {
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
    totalRowsCount: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "update:offset",
  ],
  data() {
    return {
      countMaxItems: 5, // should odd be
      maxItem: undefined,
    };
  },
  computed: {
    paginationItems() {
      const PAGINATION_ITEMS = [];
      let currentItemIndex = -1;
      for (let i = this.countMaxItems - 1; i > -this.countMaxItems; i--) {
        const NUMBER = this.currentItem - i;
        if (NUMBER > 0 && NUMBER <= this.maxItems) {
          PAGINATION_ITEMS.push(NUMBER);
        }
        if (i === 0) {
          currentItemIndex = PAGINATION_ITEMS.length - 1;
        }
      }

      const {
        indexStart,
        indexEnd,
      } = this.getIndexStartAndEndForPagination({
        currentItemIndex,
        paginationLength: PAGINATION_ITEMS.length
      });
      return PAGINATION_ITEMS.slice(indexStart, indexEnd);
    },

    currentItem() {
      return (this.offset / this.limit >> 0) + 1;
    },

    maxItems() {
      return ceil(this.totalRowsCount / this.limit);
    },

    disabledButtonFirstPage() {
      return this.disabledPagination || this.currentItem === 1;
    },

    disabledButtonLastPage() {
      return this.disabledPagination || this.currentItem === this.maxItems;
    },
  },
  methods: {
    getIndexStartAndEndForPagination({ currentItemIndex, paginationLength }) {
      let indexStart = -1;
      let indexEnd = paginationLength + 1;
      const MIN_INDEX = Math.floor(this.countMaxItems / 2);
      const MAX_INDEX = (this.countMaxItems * 2 - 1);
      if (currentItemIndex <= MIN_INDEX) {
        indexStart = 0;
        indexEnd = this.countMaxItems;
      } else if (currentItemIndex >= (MAX_INDEX - (MIN_INDEX + 1))) {
        indexStart = MAX_INDEX - this.countMaxItems;
        indexEnd = MAX_INDEX;
      } else {
        indexStart = currentItemIndex - MIN_INDEX;
        indexEnd = currentItemIndex + MIN_INDEX + 1;
      }

      if (indexEnd > paginationLength) {
        const DIFF = indexEnd - paginationLength;
        indexEnd = paginationLength + 1;
        indexStart = indexStart - DIFF;
        if (indexStart < 0) {
          indexStart = 0;
        }
      }

      return {
        indexStart,
        indexEnd,
      };
    },

    updateOffset(item) {
      if (this.disabledPagination || item === this.currentItem) {
        return;
      }
      const OFFSET = (item - 1) * this.limit;
      this.$emit("update:offset", OFFSET);
    },

    updateOffsetFirst() {
      if (this.disabledButtonFirstPage) {
        return;
      }
      this.$emit("update:offset", 0);
    },

    updateOffsetPrevious() {
      if (this.disabledButtonFirstPage) {
        return;
      }
      this.$emit("update:offset", this.offset - this.limit);
    },

    updateOffsetLast() {
      if (this.disabledButtonLastPage) {
        return;
      }
      this.$emit("update:offset", (this.maxItems - 1) * this.limit);
    },

    updateOffsetNext() {
      if (this.disabledButtonLastPage) {
        return;
      }
      this.$emit("update:offset", this.offset + this.limit);
    },
  },
  render() {
    if (this.hasRows) {
      return h(ATranslation, {
        tag: "nav",
        role: "navigation",
        class: "a_pagination__nav",
        "aria-label": "_PAGINATION_NAVIGATION_",
      }, {
        default: () => {
          return [
            h("ul", {
              class: "a_pagination",
            }, [
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonFirstPage }]
              }, [
                h(ATranslation, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: 0,
                  "aria-label": "_FIRST_PAGE_",
                  onClick: this.updateOffsetFirst,
                }, {
                  default: () => [
                    h(AIcon, {
                      icon: "DoubleAngleLeft",
                      width: 12,
                      height: 12,
                    }),
                  ],
                }),
              ]),
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonFirstPage }]
              }, [
                h(ATranslation, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: 0,
                  "aria-label": "_PREVIOUS_PAGE_",
                  onClick: this.updateOffsetPrevious,
                }, {
                  default: () => [
                    h(AIcon, {
                      icon: "AngleLeft",
                      width: 12,
                      height: 12,
                    }),
                  ],
                }),
              ]),
              this.isMobile ?
                h("li", {
                  class: "a_pagination__item",
                }, [
                  h(ATranslation, {
                    class: "a_pagination__item__link disabled",
                    html: "_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
                    extra: {
                      currentPage: this.currentItem,
                      allPages: this.maxItems,
                    },
                  }),
                ]) :
                this.paginationItems.map(item => {
                  return h("li", {
                    class: ["a_pagination__item", { active: item === this.currentItem }],
                  }, [
                    h("a", {
                      class: "a_pagination__item__link",
                      role: "button",
                      tabindex: 0,
                      onClick: () => this.updateOffset(item),
                    }, [
                      item,
                    ]),
                  ]);
                }),
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonLastPage }]
              }, [
                h(ATranslation, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: 0,
                  "aria-label": "_NEXT_PAGE_",
                  onClick: this.updateOffsetNext,
                }, {
                  default: () => [
                    h(AIcon, {
                      icon: "AngleRight",
                      width: 12,
                      height: 12,
                    }),
                  ],
                }),
              ]),
              h("li", {
                class: ["a_pagination__item", { disabled: this.disabledButtonLastPage }]
              }, [
                h(ATranslation, {
                  tag: "a",
                  class: "a_pagination__item__link",
                  role: "button",
                  tabindex: 0,
                  "aria-label": "_LAST_PAGE_",
                  onClick: this.updateOffsetLast,
                }, {
                  default: () => [
                    h(AIcon, {
                      icon: "DoubleAngleRight",
                      width: 12,
                      height: 12,
                    }),
                  ],
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
