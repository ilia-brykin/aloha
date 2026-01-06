import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import ASelect from "../../ui/ASelect/ASelect";
import ATranslation from "../../ATranslation/ATranslation";

import LimitAPI from "./compositionAPI/LimitAPI";
import MainAPI from "./compositionAPI/MainAPI";
import TextsAPI from "./compositionAPI/TextsAPI";

export default {
  name: "APaginationCountPerPage",
  props: {
    totalCount: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    limit: {
      type: Number,
      required: true,
    },
    limitsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    mode: {
      type: String,
      required: false,
      default: "group",
      validator: value => ["inline", "group", "select"].indexOf(value) !== -1,
    },
    offset: {
      type: Number,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
    showTextCountFromTo: {
      type: Boolean,
      required: false,
      default: true,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({
        countFromTo: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
        countPerPage: "_A_COUNT_PER_PAGE_",
        countPerPageItem: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
      }),
    },
  },
  emits: [
    "update:limit",
  ],
  setup(props, context) {
    const {
      changeLimit,
      changeLimitFromSelect,
      keyDownChangeLimit,
      limitString,
    } = LimitAPI(props, context);

    const {
      extraForTranslate,
    } = MainAPI(props);

    const {
      getTextCountPerPageItem,
      isTextCountPerPageItemFunction,
      textCountFromTo,
      textCountPerPage,
      textCountPerPageItem,
    } = TextsAPI(props, {
      extraForTranslate,
    });

    return {
      changeLimit,
      changeLimitFromSelect,
      extraForTranslate,
      getTextCountPerPageItem,
      isTextCountPerPageItemFunction,
      keyDownChangeLimit,
      limitString,
      textCountFromTo,
      textCountPerPage,
      textCountPerPageItem,
    };
  },
  render() {
    return h("div", {
      class: "a_pagination__counts a_pagination_vars",
    }, (this.mode === "inline" || this.mode === "group") ?
      [
        this.showTextCountFromTo ?
          h(ATranslation, {
            class: "a_pagination__count_from_to",
            html: this.textCountFromTo,
            extra: this.extraForTranslate,
          }) :
          "",
        h(ATranslation, {
          tag: "span",
          class: "a_pagination__count__text",
          html: this.textCountPerPage,
        }),
        this.mode === "inline" ?
          h("div", {
            class: "a_pagination__count",
          }, [
            this.limitsPerPage.map(count => {
              const IS_ACTIVE = +count === this.limit;
              const TITLE = this.isTextCountPerPageItemFunction ?
                this.getTextCountPerPageItem({ count }) :
                this.textCountPerPageItem;

              return h("div", {
                class: "a_pagination__count__item",
              }, [
                h(AElement, {
                  "aria-current": IS_ACTIVE ? true : undefined,
                  class: "a_btn a_btn_link a_pagination__count__button",
                  disabled: IS_ACTIVE || this.disabled,
                  extra: {
                    count,
                  },
                  text: count,
                  textAriaHidden: true,
                  textScreenReader: TITLE,
                  title: TITLE,
                  type: "button",
                  onClick: () => this.changeLimit(count),
                }),
              ]);
            }),
          ]) :
          h("ul", {
            class: "a_pagination a_pagination_group",
          }, [
            this.limitsPerPage.map(count => {
              const IS_ACTIVE = +count === this.limit;
              const TITLE = this.isTextCountPerPageItemFunction ?
                this.getTextCountPerPageItem({ count }) :
                this.textCountPerPageItem;

              return h("li", {
                class: [
                  "a_pagination__item",
                  {
                    active: IS_ACTIVE,
                    disabled: this.disabled,
                  },
                ],
              }, [
                h(AElement, {
                  "aria-current": IS_ACTIVE ? true : undefined,
                  class: "a_pagination__item__link",
                  disabled: this.disabled,
                  extra: {
                    count,
                  },
                  role: "button",
                  tabindex: IS_ACTIVE || this.disabled ? -1 : 0,
                  tag: "a",
                  text: count,
                  textAriaHidden: true,
                  textScreenReader: TITLE,
                  title: TITLE,
                  type: "button",
                  onClick: () => this.changeLimit(count),
                  onKeydown: $event => this.keyDownChangeLimit($event, count),
                }),
              ]);
            }),
          ]),
      ] :
      [
        this.showTextCountFromTo ?
          h(ATranslation, {
            class: "a_pagination__count_from_to",
            html: this.textCountFromTo,
            extra: this.extraForTranslate,
          }) :
          "",
        h(ASelect, {
          label: this.textCountPerPage,
          labelClass: "a_sr_only",
          data: this.limitsPerPage,
          isDataSimpleArray: true,
          isLabelFloat: false,
          deselectable: false,
          menuWidthType: "by_content",
          modelValue: this.limitString,
          disabled: this.disabled,
          change: this.changeLimitFromSelect,
        }),
      ]);
  },
};
