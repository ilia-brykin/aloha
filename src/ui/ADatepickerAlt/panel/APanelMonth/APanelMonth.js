import {
  h,
} from "vue";

import PanelMixin from "../../mixins/PanelMixin";

import AKeysCode from "../../../../const/AKeysCode";
import {
  isUndefined,
} from "lodash-es";

// @vue/component
export default {
  name: "APanelMonth",
  mixins: [
    PanelMixin,
  ],
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    calendarYear: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: new Date().getFullYear(),
      required: false,
    },
    disabledMonth: {
      type: Function,
      required: false,
      default: undefined,
    },
    currentLanguage: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "handleIconYear",
    "select",
  ],
  data() {
    return {
      monthIndexForFocus: undefined,
    };
  },
  computed: {
    currentYear() {
      return this.value && new Date(this.value).getFullYear();
    },

    currentMonth() {
      return this.value && new Date(this.value).getMonth();
    },

    monthsTranslate() {
      return this.currentLanguage.months;
    },

    months() {
      const MONTHS = [];
      this.monthsTranslate.forEach((month, index) => {
        MONTHS.push({
          isActive: this.currentYear === this.calendarYear && this.currentMonth === index,
          isDisabled: this.isDisabled(index),
          label: month,
          id: this.getIdForMonth(index),
        });
      });
      return MONTHS;
    },

    idForFocus() {
      if (!isUndefined(this.monthIndexForFocus)) {
        return this.getIdForMonth(this.monthIndexForFocus);
      }
      return "";
    },

    monthFromValueOrToday() {
      return this.monthFromValue || new Date().getMonth();
    },

    monthFromValue() {
      if (this.value) {
        return new Date(this.value).getMonth();
      }
      return "";
    },
  },
  methods: {
    isDisabled(month) {
      return !!(typeof this.disabledMonth === "function" && this.disabledMonth(month));
    },

    selectMonth(month, isButtonClick) {
      if (this.isDisabled(month)) {
        return;
      }
      this.$emit("select", { month, isButtonClick });
    },

    getIdForMonth(monthIndex) {
      return `${ this.id }_month_${ monthIndex }`;
    },

    setFocusToActiveMonth() {
      setTimeout(() => {
        this.setDefaultMonthForFocus();
        document.getElementById(this.idForFocus).focus();
        this.setListenerForPressButtons();
      });
    },

    setDefaultMonthForFocus() {
      this.monthIndexForFocus = this.monthFromValueOrToday;
    },

    pressButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === AKeysCode.arrowUp || KEY_CODE === AKeysCode.arrowLeft) {
        this.setFocusToLastMonth();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowDown || KEY_CODE === AKeysCode.arrowRight) {
        this.setFocusToNextMonth();
        this.stopCurrentEvent($event);
      }
    },

    setFocusToLastMonth() {
      const NEW_MONTH_FOR_FOCUS = this.monthIndexForFocus - 1;
      if (NEW_MONTH_FOR_FOCUS >= 0) {
        this.monthIndexForFocus = NEW_MONTH_FOR_FOCUS;
      } else {
        this.$emit("handleIconYear", -1);
        this.monthIndexForFocus = 11;
      }
      this.setFocusToElementWithTimeout(this.idForFocus);
    },

    setFocusToNextMonth() {
      const NEW_MONTH_FOR_FOCUS = this.monthIndexForFocus + 1;
      if (NEW_MONTH_FOR_FOCUS <= 11) {
        this.monthIndexForFocus = NEW_MONTH_FOR_FOCUS;
      } else {
        this.$emit("handleIconYear", 1);
        this.monthIndexForFocus = 0;
      }
      this.setFocusToElementWithTimeout(this.idForFocus);
    },

    keypress($event, monthIndex) {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        this.selectMonth(monthIndex);
        $event.stopPropagation();
        $event.preventDefault();
      }
    },
  },
  render() {
    return h("ul", {
      class: "pux_datepicker__panel pux_datepicker__panel_month pux_datepicker__panel__list",
      role: "listbox",
      ariaLabelledby: this.idForHeader,
      ...this.attributesForMainElement,
    }, [
      this.months.map((month, monthIndex) => {
        return h("li", {
          id: month.id,
          key: month.id,
          class: ["cell", {
            actived: month.isActive,
            disabled: month.isDisabled,
            pux_datepicker__panel__cell_focus: monthIndex === this.monthIndexForFocus,
          }],
          role: "option",
          ariaSelected: !!month.isActive,
          tabindex: -1,
          onClick: () => this.selectMonth(monthIndex),
          onKeypress: $event => this.keypress($event, monthIndex),
        }, month.label);
      }),
    ]);
  },
};
