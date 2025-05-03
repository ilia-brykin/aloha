import PanelMixin from "../../mixins/PanelMixin";

import keysCode from "../../utils/keysCode";

// @vue/component
export default {
  name: "PanelTime",
  mixins: [
    PanelMixin,
  ],
  props: {
    minuteStep: {
      type: Number,
      default: 0,
      validator: val => val >= 0 && val <= 60,
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
    timeType: {
      type: Array,
      default() {
        return ["24", "a"];
      },
    },
    disabledTime: {
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
    "select",
  ],
  data() {
    return {
      timeIndexForFocus: undefined,
      columnIndexForFocus: undefined,
    };
  },
  computed: {
    currentHours() {
      return this.value ? new Date(this.value).getHours() : 0;
    },

    currentMinutes() {
      return this.value ? new Date(this.value).getMinutes() : 0;
    },

    currentSeconds() {
      return this.value ? new Date(this.value).getSeconds() : 0;
    },

    date() {
      return this.value
        ? new Date(this.value)
        : new Date().setHours(0, 0, 0, 0);
    },

    isDisabledTimeFunction() {
      return typeof this.disabledTime === "function";
    },

    timesFiltered() {
      const TIMES_FILTERED = [];
      let columnIndex = 0;
      const HOURS_COLUMN = this.setColumn({
        times: this.hours,
        timeFunctionName: "setHours",
        currentTime: this.currentHours,
        ariaLabel: this.currentLanguage.hours,
        columnIndex,
      });
      if (HOURS_COLUMN.length) {
        TIMES_FILTERED.push(HOURS_COLUMN);
        columnIndex++;
      }
      const MINUTES_COLUMN = this.setColumn({
        times: this.minutes,
        timeFunctionName: "setMinutes",
        currentTime: this.currentMinutes,
        ariaLabel: this.currentLanguage.minutes,
        columnIndex,
      });
      if (MINUTES_COLUMN.length) {
        TIMES_FILTERED.push(MINUTES_COLUMN);
        columnIndex++;
      }
      const SECONDS_COLUMN = this.setColumn({
        times: this.seconds,
        timeFunctionName: "setSeconds",
        currentTime: this.currentSeconds,
        ariaLabel: this.currentLanguage.seconds,
        columnIndex,
      });
      if (SECONDS_COLUMN.length) {
        TIMES_FILTERED.push(SECONDS_COLUMN);
      }
      return TIMES_FILTERED;
    },

    minuteStepLocal() {
      return this.minuteStep || 1;
    },

    minuteLength() {
      return parseInt(60 / this.minuteStepLocal);
    },

    hours() {
      return Array.apply(null, { length: 24 }).map((_, i) => i);
    },

    minutes() {
      return Array.apply(null, { length: this.minuteLength }).map(
        (_, i) => i * this.minuteStepLocal,
      );
    },

    seconds() {
      return this.minuteStep === 0
        ? Array.apply(null, { length: 60 }).map((_, i) => i)
        : [];
    },

    idForFocus() {
      return this.getCurrentId({
        columnIndex: this.columnIndexForFocus,
        rowIndex: this.timeIndexForFocus,
      });
    },

    fullIndexForFocus() {
      return `${ this.columnIndexForFocus }_${ this.timeIndexForFocus }`;
    },
  },
  methods: {
    stringifyText(value) {
      return ("00" + value).slice(String(value).length);
    },

    selectTime(time, statusClose) {
      if (typeof this.disabledTime === "function" && this.disabledTime(time)) {
        return;
      }
      this.$emit("select", new Date(time), statusClose);
    },

    setColumn({ times, timeFunctionName, currentTime, ariaLabel, columnIndex }) {
      const TIMES_COLUMN = [];
      times.forEach((time, timeIndex) => {
        const CURRENT_TIME = new Date(this.date)[timeFunctionName](time);
        const IS_ACTIVE = time === currentTime;
        const IS_DISABLED = this.isDisabledTimeFunction && this.disabledTime(CURRENT_TIME);
        const LABEL = this.stringifyText(time);
        TIMES_COLUMN.push({
          label: LABEL,
          time: CURRENT_TIME,
          isActive: IS_ACTIVE,
          isDisabled: IS_DISABLED,
          ariaLabel: `${ ariaLabel }: ${ LABEL }`,
          id: this.getCurrentId({
            columnIndex,
            rowIndex: timeIndex,
          }),
        });
      });
      return TIMES_COLUMN;
    },

    getCurrentId({ columnIndex, rowIndex }) {
      return `${ this.id }_time_${ columnIndex }_${ rowIndex }`;
    },

    setFocusToActiveTime() {
      setTimeout(() => {
        this.setDefaultTimeForFocus();
        document.getElementById(this.idForFocus).focus();
        this.setListenerForPressButtons();
      });
    },

    setDefaultTimeForFocus() {
      this.timeIndexForFocus = 0;
      this.columnIndexForFocus = 0;
    },

    pressButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === keysCode.arrowUp) {
        this.setFocusToLastTime();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === keysCode.arrowDown) {
        this.setFocusToNextTime();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === keysCode.arrowLeft) {
        this.setFocusToLastTimeColumn();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === keysCode.arrowRight) {
        this.setFocusToNextTimeColumn();
        this.stopCurrentEvent($event);
      }
    },

    setFocusToLastTime() {
      const CURRENT_TIMES = this.timesFiltered[this.columnIndexForFocus];
      if (this.timeIndexForFocus > 0) {
        this.timeIndexForFocus--;
      } else {
        this.timeIndexForFocus = CURRENT_TIMES.length - 1;
      }
      this.setFocusToElement(this.idForFocus);
    },

    setFocusToNextTime() {
      const CURRENT_TIMES = this.timesFiltered[this.columnIndexForFocus];
      if (this.timeIndexForFocus < CURRENT_TIMES.length - 1) {
        this.timeIndexForFocus++;
      } else {
        this.timeIndexForFocus = 0;
      }
      this.setFocusToElement(this.idForFocus);
    },

    setFocusToLastTimeColumn() {
      if (this.columnIndexForFocus > 0) {
        this.columnIndexForFocus--;
      } else {
        this.columnIndexForFocus = this.timesFiltered.length - 1;
      }
      this.timeIndexForFocus = 0;
      this.setFocusToElement(this.idForFocus);
    },

    setFocusToNextTimeColumn() {
      if (this.columnIndexForFocus < this.timesFiltered.length - 1) {
        this.columnIndexForFocus++;
      } else {
        this.columnIndexForFocus = 0;
      }
      this.timeIndexForFocus = 0;
      this.setFocusToElement(this.idForFocus);
    },

    setFocusToElement(idForFocusElement) {
      const ELEMENT = document.getElementById(idForFocusElement);
      if (ELEMENT) {
        ELEMENT.focus();
      }
    },
  },
};
