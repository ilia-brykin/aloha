import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ASelect from "../../ui/ASelect/ASelect";
import ATranslation from "../../ATranslation/ATranslation";

import LimitAPI from "./compositionAPI/LimitAPI";
import MainAPI from "./compositionAPI/MainAPI";
import ViewAPI from "./compositionAPI/ViewAPI";

export default {
  name: "ATableCountProPage",
  props: {
    countAllRows: {
      type: Number,
      required: true,
    },
    hasRows: {
      type: Boolean,
      required: true,
    },
    isLoadingTable: {
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
    limitsPerPage: {
      type: Array,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    perPageView: {
      type: Object,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:limit"],
  setup(props, context) {
    const {
      changeLimit,
      changeLimitFromSelect,
      limitString,
    } = LimitAPI(props, context);

    const {
      extraForTranslate,
    } = MainAPI(props);

    const {
      currentView,
    } = ViewAPI(props);

    return {
      changeLimit,
      changeLimitFromSelect,
      currentView,
      extraForTranslate,
      limitString,
    };
  },
  render() {
    if (this.hasRows) {
      return h("div", {
        class: "a_pagination__counts",
      }, this.currentView === "inline" ?
        [
          h(ATranslation, {
            class: "a_pagination__count_from_to",
            html: "_TABLE_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
            extra: this.extraForTranslate,
          }),
          h(ATranslation, {
            tag: "span",
            class: "a_pagination__count__text",
            html: "_TABLE_PER_PAGE_",
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
                  disabled: +count === this.limit || this.isLoadingTable,
                  text: count,
                  onClick: () => this.changeLimit(count),
                }),
              ]);
            }),
          ]),
        ] :
        [
          h(ATranslation, {
            class: "a_pagination__count_from_to",
            html: "_TABLE_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
            extra: this.extraForTranslate,
          }),
          h(ASelect, {
            label: "_TABLE_PER_PAGE_",
            data: this.limitsPerPage,
            isDataSimpleArray: true,
            isDeselect: false,
            modelValue: this.limitString,
            change: this.changeLimitFromSelect
          }),
        ]);
    }
    return "";
  },
};
