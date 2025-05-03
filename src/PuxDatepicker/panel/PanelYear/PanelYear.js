import PanelYearItem from "../PanelYearItem/PanelYearItem.vue";

import PanelMixin from "../../mixins/PanelMixin";

import keysCode from "../../utils/keysCode";
import {
  isUndefined,
} from "lodash-es";

// @vue/component
export default {
  name: "PanelYear",
  components: {
    PanelYearItem,
  },
  mixins: [
    PanelMixin,
  ],
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    firstYear: {
      type: Number,
      required: true,
    },
    disabledYear: {
      type: Function,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "handleIconYear",
    "select",
  ],
  data() {
    return {
      yearIndexForFocus: undefined,
    };
  },
  computed: {
    firstYearLocal() {
      return Math.floor(this.firstYear / 10) * 10;
    },

    yearFromValue() {
      return this.value && new Date(this.value).getFullYear();
    },

    idForFocus() {
      if (!isUndefined(this.yearIndexForFocus)) {
        return this.getIdForYear(this.yearIndexForFocus);
      }
      return "";
    },

    yearIndexFromValueOrToday() {
      const DIFF_FIRST_AND_VALUE_YEAR = this.yearFromValueOrToday - this.firstYearLocal;
      if (DIFF_FIRST_AND_VALUE_YEAR <= 9 && DIFF_FIRST_AND_VALUE_YEAR >= 0) {
        return DIFF_FIRST_AND_VALUE_YEAR;
      }
      return 0;
    },

    yearFromValueOrToday() {
      return this.yearFromValue || new Date().getFullYear();
    },

    prefixForId() {
      return `${ this.id }_year_`;
    },
  },
  methods: {
    isDisabled(year) {
      return !!(typeof this.disabledYear === "function" && this.disabledYear(year));
    },

    selectYear({ year, isButtonClick }) {
      if (this.isDisabled(year)) {
        return;
      }
      this.$emit("select", ({ year, isButtonClick }));
    },

    getIdForYear(yearIndex) {
      return `${ this.prefixForId }${ yearIndex }`;
    },

    setFocusToActiveYear() {
      setTimeout(() => {
        this.setDefaultYearForFocus();
        document.getElementById(this.idForFocus).focus();
        this.setListenerForPressButtons();
      });
    },

    setDefaultYearForFocus() {
      this.yearIndexForFocus = this.yearIndexFromValueOrToday;
    },

    pressButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === keysCode.arrowUp || KEY_CODE === keysCode.arrowLeft) {
        this.setFocusToLastYear();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === keysCode.arrowDown || KEY_CODE === keysCode.arrowRight) {
        this.setFocusToNextYear();
        this.stopCurrentEvent($event);
      }
    },

    setFocusToLastYear() {
      const NEW_YEAR_FOR_FOCUS = this.yearIndexForFocus - 1;
      if (NEW_YEAR_FOR_FOCUS >= 0 && NEW_YEAR_FOR_FOCUS <= 9) {
        this.yearIndexForFocus = NEW_YEAR_FOR_FOCUS;
      } else {
        this.$emit("handleIconYear", -1);
        this.yearIndexForFocus = 9;
      }
      this.setFocusToElementWithTimeout(this.idForFocus);
    },

    setFocusToNextYear() {
      const NEW_YEAR_FOR_FOCUS = this.yearIndexForFocus + 1;
      if (NEW_YEAR_FOR_FOCUS <= 9 && NEW_YEAR_FOR_FOCUS >= 0) {
        this.yearIndexForFocus = NEW_YEAR_FOR_FOCUS;
      } else {
        this.$emit("handleIconYear", 1);
        this.yearIndexForFocus = 0;
      }
      this.setFocusToElementWithTimeout(this.idForFocus);
    },
  },
};
