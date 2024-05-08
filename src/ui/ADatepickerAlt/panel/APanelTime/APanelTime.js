import {
  h,
} from "vue";

import PanelMixin from "../../mixins/PanelMixin";

import AKeysCode from "../../../../const/AKeysCode";

// @vue/component
export default {
  name: "APanelTime",
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
        (_, i) => i * this.minuteStepLocal
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
      if (KEY_CODE === AKeysCode.arrowUp) {
        this.setFocusToLastTime();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowDown) {
        this.setFocusToNextTime();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowLeft) {
        this.setFocusToLastTimeColumn();
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowRight) {
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

    keypress($event, time, statusClose) {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        this.selectTime(time, statusClose);
        $event.stopPropagation();
        $event.preventDefault();
      }
    },
  },
  render() {
    return h("div", {
      class: "pux_datepicker__panel pux_datepicker__panel_time",
    }, [
      this.timesFiltered.map((timeList, timeListIndex) => {
        return h("ul", {
          key: timeListIndex,
          class: "pux_datepicker__time_list",
          role: "listbox",
          "aria-labelledby": this.idForHeader,
          style: { width: `${ 100 / this.timesFiltered.length }%` },
        }, [
          timeList.map((time, timeIndex) => {
            return h("li", {
              id: time.id,
              key: timeIndex,
              class: ["cell", {
                actived: time.isActive,
                disabled: time.isDisabled,
                pux_datepicker__panel__cell_focus: timeListIndex + "_" + timeIndex === this.fullIndexForFocus
              }],
              tabindex: -1,
              role: "option",
              ariaSelected: !!time.isActive,
              ariaLabel: time.ariaLabel,
              onClick: () => this.selectTime(time.time),
              onKeypress: $event => this.keypress($event, time.time, timeListIndex === this.timesFiltered.length - 1),
            }, time.label);
          }),
        ]);
      }),
    ]);
  },
};
