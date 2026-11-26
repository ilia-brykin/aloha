import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import ATranslation from "../../ATranslation/ATranslation";

import DisabledAPI from "./compositionAPI/DisabledAPI";
import JumperAPI from "./compositionAPI/JumperAPI";
import LoadMoreAPI from "./compositionAPI/LoadMoreAPI";
import PaginationItemsAPI from "./compositionAPI/PaginationItemsAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import UpdateOffsetAPI from "./compositionAPI/UpdateOffsetAPI";

import {
  isFunction,
  isInteger,
  uniqueId,
} from "lodash-es";

const ChevronDoubleLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>`;
const ChevronDoubleRight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`;
const ChevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>`;
const ChevronRight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`;

const SIZE_CLASSES = {
  large: "a_pagination__parent_large",
  small: "a_pagination__parent_small",
};

export default {
  name: "APaginationPages",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    hideOnSinglePage: {
      type: Boolean,
      required: false,
    },
    iconFirst: {
      type: [String, Object],
      required: false,
      default: ChevronDoubleLeft,
    },
    iconLast: {
      type: [String, Object],
      required: false,
      default: ChevronDoubleRight,
    },
    iconNext: {
      type: [String, Object],
      required: false,
      default: ChevronRight,
    },
    iconPrevious: {
      type: [String, Object],
      required: false,
      default: ChevronLeft,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_pagination_pages_"),
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
      validator: value => ["normal", "short", "loadMore", "infinite"].indexOf(value) !== -1,
    },
    offset: {
      type: Number,
      required: false,
      default: 0,
      validator: value => isInteger(value) && value >= 0,
    },
    page: {
      type: Number,
      required: false,
      default: undefined,
      validator: value => isInteger(value) && value > 0,
    },
    showEdges: {
      type: Boolean,
      required: false,
    },
    showJumper: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "medium",
      validator: value => ["small", "medium", "large"].indexOf(value) !== -1,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({
        pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
        pagesJumperButton: "_A_PAGINATION_JUMPER_BUTTON_",
        pagesJumperError: "_A_PAGINATION_JUMPER_ERROR_{{allPages}}_",
        pagesJumperLabel: "_A_PAGINATION_JUMPER_LABEL_",
        pagesJumperOf: "_A_PAGINATION_JUMPER_OF_{{allPages}}_",
        pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
        pagesLoadMore: "_A_PAGINATION_LOAD_MORE_",
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
    "change",
    "update:limit",
    "update:offset",
    "update:page",
  ],
  setup(props, context) {
    const {
      currentItem,
      maxItems,
      offsetLocal,
      paginationEntries,
    } = PaginationItemsAPI(props);

    const {
      disabledButtonFirstPage,
      disabledButtonLastPage,
    } = DisabledAPI(props, {
      currentItem,
      maxItems,
    });

    const {
      goToPage,
      navRef,
      updateOffset,
      updateOffsetFirst,
      updateOffsetLast,
      updateOffsetNext,
      updateOffsetPrevious,
    } = UpdateOffsetAPI(props, context, {
      currentItem,
      maxItems,
    });

    const {
      isJumperError,
      jumperValue,
      onJumperInput,
      onJumperSubmit,
    } = JumperAPI({
      goToPage,
      maxItems,
    });

    const {
      countShown,
      countShownStart,
      isAllShown,
      loadMore,
      loadMoreButtonRef,
      loadMoreStatusRef,
    } = LoadMoreAPI(props, context, {
      offsetLocal,
    });

    const {
      getTextToPage,
      isTextToPageFunction,
      textCountFromTo,
      textFirstPage,
      textJumperButton,
      textJumperError,
      textJumperLabel,
      textJumperOf,
      textLastPage,
      textLoadMore,
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
      countShown,
      countShownStart,
      currentItem,
      disabledButtonFirstPage,
      disabledButtonLastPage,
      getTextToPage,
      isAllShown,
      isJumperError,
      isTextToPageFunction,
      jumperValue,
      loadMore,
      loadMoreButtonRef,
      loadMoreStatusRef,
      maxItems,
      navRef,
      onJumperInput,
      onJumperSubmit,
      paginationEntries,
      textCountFromTo,
      textFirstPage,
      textJumperButton,
      textJumperError,
      textJumperLabel,
      textJumperOf,
      textLastPage,
      textLoadMore,
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
  methods: {
    // the content of a slot is only for the eyes: the name of the button comes from the texts
    renderSlot(name, slotProps) {
      return this.$slots[name] ?
        { default: () => h("span", { "aria-hidden": true, class: "a_pagination__item__slot" }, this.$slots[name](slotProps)) } :
        undefined;
    },

    renderArrow({ slot, icon, text, isDisabled, onClick }) {
      const SLOT = this.renderSlot(slot, { disabled: isDisabled });

      return h("li", {
        class: ["a_pagination__item", { disabled: isDisabled }],
      }, [
        h(AElement, {
          class: "a_pagination__item__link a_pagination__item__link_arrow",
          disabled: isDisabled,
          iconLeft: SLOT ? undefined : icon,
          textScreenReader: text,
          title: text,
          type: "button",
          onClick,
        }, SLOT),
      ]);
    },

    renderPage(page) {
      const IS_ACTIVE = page === this.currentItem;
      const TITLE = this.isTextToPageFunction ?
        this.getTextToPage({ page }) :
        this.textToPage;
      const SLOT = this.renderSlot("page", { page, isActive: IS_ACTIVE });

      return h("li", {
        key: page,
        class: ["a_pagination__item", {
          active: IS_ACTIVE,
          disabled: this.disabled,
        }],
      }, [
        h(AElement, {
          "aria-current": IS_ACTIVE ? "page" : undefined,
          class: ["a_pagination__item__link", { active: IS_ACTIVE }],
          disabled: this.disabled,
          extra: {
            page,
          },
          text: SLOT ? undefined : page,
          textAriaHidden: true,
          textScreenReader: TITLE,
          title: TITLE,
          type: "button",
          onClick: () => this.updateOffset(page),
        }, SLOT),
      ]);
    },

    renderJumper() {
      const ID = `${ this.id }_jumper`;
      const ERROR_ID = `${ ID }_error`;
      const EXTRA = { allPages: this.maxItems };

      return h("form", {
        class: "a_pagination__jumper",
        novalidate: true,
        onSubmit: this.onJumperSubmit,
      }, [
        h(ATranslation, {
          class: "a_pagination__jumper__label",
          for: ID,
          tag: "label",
          text: this.textJumperLabel,
        }),
        h("input", {
          id: ID,
          "aria-describedby": `${ ID }_of${ this.isJumperError ? ` ${ ERROR_ID }` : "" }`,
          "aria-invalid": this.isJumperError,
          autocomplete: "off",
          class: "a_form_control a_pagination__jumper__input",
          disabled: this.disabled,
          inputmode: "numeric",
          type: "text",
          value: this.jumperValue,
          onInput: this.onJumperInput,
        }),
        h(ATranslation, {
          id: `${ ID }_of`,
          class: "a_pagination__jumper__of",
          extra: EXTRA,
          tag: "span",
          text: this.textJumperOf,
        }),
        h(AElement, {
          class: "a_btn a_btn_outline_primary a_pagination__jumper__button",
          disabled: this.disabled,
          text: this.textJumperButton,
          type: "submit",
        }),
        this.isJumperError ?
          h(ATranslation, {
            id: ERROR_ID,
            class: "a_pagination__jumper__error",
            extra: EXTRA,
            role: "alert",
            tag: "span",
            text: this.textJumperError,
          }) :
          "",
      ]);
    },

    renderLoadMore() {
      const EXTRA = {
        count: this.totalCount,
        current: this.countShown,
        start: this.countShownStart,
      };

      return h("div", {
        class: "a_pagination__load_more",
      }, [
        // the new count is read out after every click
        h("p", {
          ref: "loadMoreStatusRef",
          class: "a_pagination__load_more__status",
          role: "status",
          tabindex: -1,
        }, [
          h(ATranslation, {
            tag: "span",
            html: isFunction(this.textCountFromTo) ? this.textCountFromTo(EXTRA) : this.textCountFromTo,
            extra: EXTRA,
          }),
        ]),
        this.isAllShown ?
          "" :
          h(AElement, {
            ref: "loadMoreButtonRef",
            class: "a_btn a_btn_primary a_pagination__load_more__btn",
            disabled: this.disabled,
            text: this.textLoadMore,
            type: "button",
            onClick: this.loadMore,
          }),
      ]);
    },

    renderPages() {
      const IS_SHORT = this.mode === "short";

      return h("ul", {
        class: "a_pagination",
      }, [
        IS_SHORT ?
          "" :
          this.renderArrow({
            slot: "first",
            icon: this.iconFirst,
            text: this.textFirstPage,
            isDisabled: this.disabledButtonFirstPage,
            onClick: this.updateOffsetFirst,
          }),
        this.renderArrow({
          slot: "previous",
          icon: this.iconPrevious,
          text: this.textPreviousPage,
          isDisabled: this.disabledButtonFirstPage,
          onClick: this.updateOffsetPrevious,
        }),
        IS_SHORT ?
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
          this.paginationEntries.map(entry => {
            if (entry.isEllipsis) {
              // only for the eyes: the pages are reachable with "first", "last" and the jumper
              return h("li", {
                key: `ellipsis_${ entry.key }`,
                "aria-hidden": true,
                class: "a_pagination__item a_pagination__item_ellipsis",
              }, [
                h("span", {
                  class: "a_pagination__item__text",
                }, "…"),
              ]);
            }
            return this.renderPage(entry.page);
          }),
        this.renderArrow({
          slot: "next",
          icon: this.iconNext,
          text: this.textNextPage,
          isDisabled: this.disabledButtonLastPage,
          onClick: this.updateOffsetNext,
        }),
        IS_SHORT ?
          "" :
          this.renderArrow({
            slot: "last",
            icon: this.iconLast,
            text: this.textLastPage,
            isDisabled: this.disabledButtonLastPage,
            onClick: this.updateOffsetLast,
          }),
      ]);
    },
  },
  render() {
    if (this.hideOnSinglePage && this.maxItems <= 1) {
      return null;
    }
    const IS_LOAD_MORE = this.mode === "loadMore" || this.mode === "infinite";

    return h(ATranslation, {
      id: this.id,
      ref: "navRef",
      tag: "nav",
      class: [
        "a_pagination_vars a_pagination__nav",
        SIZE_CLASSES[this.size],
      ],
      "aria-label": this.textNavigation,
    }, {
      default: () => {
        if (IS_LOAD_MORE) {
          return this.renderLoadMore();
        }
        return [
          this.renderPages(),
          this.showJumper ? this.renderJumper() : "",
        ];
      },
    });
  },
};
