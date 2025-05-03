import PanelMixin from "../../mixins/PanelMixin";

import keysCode from "../../utils/keysCode";
import {
  isUndefined,
} from "lodash-es";

// @vue/component
export default {
  name: "PanelMonth",
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
      if (KEY_CODE === keysCode.arrowUp || KEY_CODE === keysCode.arrowLeft) {
        this.setFocusToLastMonth();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === keysCode.arrowDown || KEY_CODE === keysCode.arrowRight) {
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
  },
};
