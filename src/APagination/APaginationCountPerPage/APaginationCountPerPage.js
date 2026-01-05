import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import ASelect from "../../ui/ASelect/ASelect";
import ATranslation from "../../ATranslation/ATranslation";

import LimitAPI from "./compositionAPI/LimitAPI";
import MainAPI from "./compositionAPI/MainAPI";

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

    return {
      changeLimit,
      changeLimitFromSelect,
      extraForTranslate,
      keyDownChangeLimit,
      limitString,
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
            html: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
            extra: this.extraForTranslate,
          }) :
          "",
        h(ATranslation, {
          tag: "span",
          class: "a_pagination__count__text",
          html: "_A_COUNT_PER_PAGE_",
        }),
        this.mode === "inline" ?
          h("div", {
            class: "a_pagination__count",
          }, [
            this.limitsPerPage.map(count => {
              const IS_ACTIVE = +count === this.limit;

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
                  textScreenReader: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
                  title: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
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
                  textScreenReader: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
                  title: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
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
            html: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
            extra: this.extraForTranslate,
          }) :
          "",
        h(ASelect, {
          label: "_A_COUNT_PER_PAGE_",
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
