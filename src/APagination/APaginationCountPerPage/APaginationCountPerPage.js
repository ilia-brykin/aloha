import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ASelect from "../../ui/ASelect/ASelect";
import ATranslation from "../../ATranslation/ATranslation";

import LimitAPI from "./compositionAPI/LimitAPI";
import MainAPI from "./compositionAPI/MainAPI";

export default {
  name: "APaginationCountPerPage",
  props: {
    countAllRows: {
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
      default: "inline",
      validator: value => ["inline", "select"].indexOf(value) !== -1,
    },
    offset: {
      type: Number,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "update:limit",
  ],
  setup(props, context) {
    const {
      changeLimit,
      changeLimitFromSelect,
      limitString,
    } = LimitAPI(props, context);

    const {
      extraForTranslate,
    } = MainAPI(props);

    return {
      changeLimit,
      changeLimitFromSelect,
      extraForTranslate,
      limitString,
    };
  },
  render() {
    return h("div", {
      class: "a_pagination__counts",
    }, this.mode === "inline" ?
      [
        h(ATranslation, {
          class: "a_pagination__count_from_to",
          html: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
          extra: this.extraForTranslate,
        }),
        h(ATranslation, {
          tag: "span",
          class: "a_pagination__count__text",
          html: "_A_COUNT_PER_PAGE_",
        }),
        h("div", {
          class: "a_pagination__count",
        }, [
          this.limitsPerPage.map(count => {
            return h("div", {
              class: "a_pagination__count__item",
            }, [
              h(AButton, {
                type: "button",
                class: "a_btn a_btn_link a_pagination__count__button",
                disabled: +count === this.limit || this.disabled,
                text: count,
                textAriaHidden: true,
                textScreenReader: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
                extra: {
                  count,
                },
                onClick: () => this.changeLimit(count),
              }),
            ]);
          }),
        ]),
      ] :
      [
        h(ATranslation, {
          class: "a_pagination__count_from_to",
          html: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
          extra: this.extraForTranslate,
        }),
        h(ASelect, {
          label: "_A_COUNT_PER_PAGE_",
          data: this.limitsPerPage,
          isDataSimpleArray: true,
          deselectable: false,
          modelValue: this.limitString,
          disabled: this.disabled,
          change: this.changeLimitFromSelect,
        }),
      ]);
  },
};
