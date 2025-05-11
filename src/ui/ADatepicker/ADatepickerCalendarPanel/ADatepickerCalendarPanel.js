/* eslint vue/component-api-style: off */
import {
  h,
} from "vue";

import APanelDate from "../panel/APanelDate/APanelDate";
import APanelMonth from "../panel/APanelMonth/APanelMonth";
import APanelTime from "../panel/APanelTime/APanelTime";
import APanelYear from "../panel/APanelYear/APanelYear";

import AKeysCode from "../../../const/AKeysCode";
import PanelMixin from "../mixins/PanelMixin";
import scrollIntoView from "../utils/scroll-into-view";
import {
  formatDate,
  isDateObject,
  isValidDate,
} from "../utils";
import {
  forEach,
} from "lodash-es";

// @vue/component
export default {
  name: "ADatepickerCalendarPanel",
  components: {
    APanelDate,
    APanelMonth,
    APanelTime,
    APanelYear,
  },
  mixins: [
    PanelMixin,
  ],
  props: {
    currentLanguage: {
      type: Object,
      required: true,
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD",
    },
    defaultValue: {
      validator: function(val) {
        return isValidDate(val);
      },
      default: undefined,
    },
    disabledDays: {
      type: [Array, Function],
      default: function() {
        return [];
      },
    },
    endAt: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    firstDayOfWeek: {
      default: 1,
      type: Number,
      validator: val => val >= 1 && val <= 7,
    },
    id: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      default: undefined,
    },
    minuteStep: {
      type: Number,
      default: 0,
      validator: val => val >= 0 && val <= 60,
    },
    notAfter: {
      default: null,
      validator: function(val) {
        return !val || isValidDate(val);
      },
    },
    notBefore: {
      default: null,
      validator: function(val) {
        return !val || isValidDate(val);
      },
    },
    startAt: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      default: "date", // ["date", "datetime"]
    },
    value: {
      default: null,
      validator: function(val) {
        return val === null || isValidDate(val);
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "closePopup",
    "selectDate",
    "selectTime",
  ],
  data() {
    const now = this.getNow(this.value);
    const calendarYear = now.getFullYear();
    const calendarMonth = now.getMonth();
    const firstYear = Math.floor(calendarYear / 10) * 10;
    return {
      panel: "NONE",
      dates: [],
      calendarMonth,
      calendarYear,
      firstYear,
      isFocusPanelChild: false,
      isWorkWithKeyboard: false,
    };
  },
  computed: {
    now: {
      get() {
        return new Date(this.calendarYear, this.calendarMonth).getTime();
      },
      set(val) {
        const now = new Date(val);
        this.calendarYear = now.getFullYear();
        this.calendarMonth = now.getMonth();
      },
    },

    timeType() {
      const h = /h+/.test(this.$parent.format) ? "12" : "24";
      const a = /A/.test(this.$parent.format) ? "A" : "a";
      return [h, a];
    },

    timeHeader() {
      if (this.type === "time") {
        return this.$parent.format;
      }
      return this.value && formatDate(this.value, this.dateFormat);
    },

    yearHeader() {
      const LAST_YEAR = this.firstYear + 9;
      return this.currentLanguage.headerYears(this.firstYear, LAST_YEAR);
    },

    months() {
      return this.currentLanguage.months;
    },

    notBeforeTime() {
      return this.getCriticalTime(this.notBefore);
    },

    notAfterTime() {
      return this.getCriticalTime(this.notAfter);
    },

    suffixForHeader() {
      if (this.panel === "TIME") {
        return this.currentLanguage.placeholder.regionTime;
      }
      return this.currentLanguage.placeholder.regionDate;
    },

    idForHeaderParent() {
      return `${ this.idForHeader }_parent`;
    },

    ariaLabelForButtonLastYear() {
      if (this.panel === "YEAR") {
        return this.currentLanguage.buttons.lastYears;
      }
      return this.currentLanguage.buttons.lastYear;
    },

    ariaLabelForButtonLastMonth() {
      return this.currentLanguage.buttons.lastMonth;
    },

    ariaLabelForButtonNextMonth() {
      return this.currentLanguage.buttons.nextMonth;
    },

    ariaLabelForButtonNextYear() {
      if (this.panel === "YEAR") {
        return this.currentLanguage.buttons.nextYears;
      }
      return this.currentLanguage.buttons.nextYear;
    },

    ariaLabelForButtonCurrentMonth() {
      return this.currentLanguage.buttons.toMonthsView;
    },

    ariaLabelForButtonCurrentYear() {
      return this.currentLanguage.buttons.toYearsView;
    },

    ariaLabelForButtonToDays() {
      return this.currentLanguage.buttons.toDaysView;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler: "updateNow",
    },
    defaultValue: {
      handler: "updateNow",
    },
    visible: {
      immediate: true,
      handler: "init",
    },
    panel: {
      handler: "handelPanelChange",
    },
  },
  beforeUnmount() {
    this.destroyListenerForPressTabButton();
    this.destroyListenerForPressEscapeButton();
  },
  methods: {
    handelPanelChange(panel) {
      if (panel === "YEAR") {
        this.firstYear = Math.floor(this.calendarYear / 10) * 10;
      } else if (panel === "TIME") {
        this.$nextTick().then(() => {
          const list = this.$el.querySelectorAll(".pux_datepicker__panel_time .pux_datepicker__time_list");
          for (let i = 0, len = list.length; i < len; i++) {
            const el = list[i];
            scrollIntoView(el, el.querySelector(".actived"));
          }
        });
      }
    },

    init(val) {
      if (val) {
        const type = this.type;
        if (type === "month") {
          this.showPanelMonth();
        } else if (type === "year") {
          this.showPanelYear();
        } else if (type === "time") {
          this.showPanelTime();
        } else {
          this.showPanelDate();
        }
        this.setListenerForPressEscapeButton();
      } else {
        this.showPanelNone();
        this.updateNow(this.value);
        this.destroyListenerForPressEscapeButton();
      }
      this.emitEventBusDestroyAllListenerForPressButtonsForPanels();
    },

    getNow(value) {
      return value
        ? new Date(value)
        : this.defaultValue && isValidDate(this.defaultValue)
          ? new Date(this.defaultValue)
          : new Date();
    },

    updateNow(value) {
      this.now = this.getNow(value);
    },

    getCriticalTime(value) {
      if (!value) {
        return null;
      }
      const date = new Date(value);
      if (this.type === "year") {
        return new Date(date.getFullYear(), 0).getTime();
      } else if (this.type === "month") {
        return new Date(date.getFullYear(), date.getMonth()).getTime();
      } else if (this.type === "date") {
        return date.setHours(0, 0, 0, 0);
      }
      return date.getTime();
    },

    inBefore(time, startAt) {
      if (startAt === undefined) {
        startAt = this.startAt;
      }
      return (
        (this.notBeforeTime && time < this.notBeforeTime) ||
        (startAt && time < this.getCriticalTime(startAt))
      );
    },

    inAfter(time, endAt) {
      if (endAt === undefined) {
        endAt = this.endAt;
      }
      return (
        (this.notAfterTime && time > this.notAfterTime) ||
        (endAt && time > this.getCriticalTime(endAt))
      );
    },

    inDisabledDays(time) {
      if (Array.isArray(this.disabledDays)) {
        return this.disabledDays.some(v => this.getCriticalTime(v) === time);
      }
      if (typeof this.disabledDays === "function") {
        return this.disabledDays(new Date(time));
      }
      return false;
    },

    isDisabledYear(year) {
      const time = new Date(year, 0).getTime();
      const maxTime = new Date(year + 1, 0).getTime() - 1;
      return (
        this.inBefore(maxTime) ||
        this.inAfter(time) ||
        (this.type === "year" && this.inDisabledDays(time))
      );
    },

    isDisabledMonth(month) {
      const time = new Date(this.calendarYear, month).getTime();
      const maxTime = new Date(this.calendarYear, month + 1).getTime() - 1;
      return (
        this.inBefore(maxTime) ||
        this.inAfter(time) ||
        (this.type === "month" && this.inDisabledDays(time))
      );
    },

    isDisabledDate(date) {
      const time = new Date(date).getTime();
      const maxTime = new Date(date).setHours(23, 59, 59, 999);
      return (
        this.inBefore(maxTime) ||
        this.inAfter(time) ||
        this.inDisabledDays(time)
      );
    },

    isDisabledTime(date, startAt, endAt) {
      const time = new Date(date).getTime();
      return (
        this.inBefore(time, startAt) ||
        this.inAfter(time, endAt) ||
        this.inDisabledDays(time)
      );
    },

    selectDate(date) {
      if (this.type === "datetime") {
        let time = new Date(date);
        if (isDateObject(this.value)) {
          time.setHours(
            this.value.getHours(),
            this.value.getMinutes(),
            this.value.getSeconds(),
          );
        }
        if (this.isDisabledTime(time)) {
          time.setHours(0, 0, 0, 0);
          if (
            this.notBefore &&
            time.getTime() < new Date(this.notBefore).getTime()
          ) {
            time = new Date(this.notBefore);
          }
          if (
            this.startAt &&
            time.getTime() < new Date(this.startAt).getTime()
          ) {
            time = new Date(this.startAt);
          }
        }
        this.selectTime(time);
        this.showPanelTime();
        return;
      }
      this.$emit("selectDate", date);
    },

    selectYear({ year, isButtonClick }) {
      this.changeCalendarYear(year);
      if (this.type.toLowerCase() === "year") {
        return this.selectDate(new Date(this.now));
      }
      this.showPanelMonth();
      if (isButtonClick) {
        this.setFocusToActivePanel();
      }
    },

    selectMonth({ month, isButtonClick }) {
      this.changeCalendarMonth(month);
      if (this.type.toLowerCase() === "month") {
        return this.selectDate(new Date(this.now));
      }
      this.showPanelDate();
      if (isButtonClick) {
        this.setFocusToActivePanel();
      }
    },

    selectTime(time, statusClose = false) {
      this.$emit("selectTime", time, statusClose);
    },

    changeCalendarYear(year) {
      this.updateNow(new Date(year, this.calendarMonth));
    },

    changeCalendarMonth(month) {
      this.updateNow(new Date(this.calendarYear, month));
    },

    getSibling() {
      const PANELS = [
        this.$parent.$refs.calendarPanelRef,
      ];
      if (this.$parent.$refs.calendarPanel2Ref) {
        PANELS.push(this.$parent.$refs.calendarPanel2Ref);
      }
      const calendars = PANELS.filter(
        v => v.$options.name === this.$options.name,
      );
      const index = calendars.indexOf(this);
      /* eslint-disable-next-line no-bitwise */
      return calendars[index ^ 1];
    },

    handleIconMonth(flag) {
      const month = this.calendarMonth;
      this.changeCalendarMonth(month + flag);
      this.$parent.$emit("changeCalendarMonth", {
        month,
        flag,
        vm: this,
        sibling: this.getSibling(),
      });
    },

    handleIconYear(flag) {
      if (this.panel === "YEAR") {
        this.changePanelYears(flag);
      } else {
        const year = this.calendarYear;
        this.changeCalendarYear(year + flag);
        this.$parent.$emit("changeCalendarYear", {
          year,
          flag,
          vm: this,
          sibling: this.getSibling(),
        });
      }
    },

    handleBtnYear($event) {
      $event.stopPropagation();
      this.showPanelYear();
      if (this.isWorkWithKeyboard) {
        this.setFocusToActivePanel();
      }
    },

    handleBtnMonth($event) {
      $event.stopPropagation();
      this.showPanelMonth();
      if (this.isWorkWithKeyboard) {
        this.setFocusToActivePanel();
      }
    },

    handleTimeHeader($event) {
      $event.stopPropagation();
      if (this.type === "time") {
        return;
      }
      this.showPanelDate();
      if (this.isWorkWithKeyboard) {
        this.setFocusToActivePanel();
      }
    },

    changePanelYears(flag) {
      this.firstYear = this.firstYear + flag * 10;
    },

    showPanelNone() {
      this.panel = "NONE";
      this.isFocusPanelChild = false;
      this.destroyListenerForPressTabButton();
      this.emitEventBusDestroyAllListenerForPressButtonsForPanels();
      this.setWorkWithoutKeyboard();
    },

    showPanelTime() {
      this.panel = "TIME";
    },

    showPanelDate() {
      this.panel = "DATE";
    },

    showPanelYear() {
      this.panel = "YEAR";
    },

    showPanelMonth() {
      this.panel = "MONTH";
    },

    setFocusToActivePanelFromParent() {
      this.setWorkWithKeyboard();
      this.setFocusToActivePanel();
      this.setListenerForPressTabButton();
    },

    setFocusToActivePanel() {
      this.isFocusPanelChild = true;
      this.setFocusToActiveElementInChild();
    },

    removeFocusFromActivePanel() {
      if (this.isFocusPanelChild) {
        this.isFocusPanelChild = false;
        this.emitEventBusDestroyAllListenerForPressButtonsForPanels();
      }
    },

    setFocusToActiveElementInChild() {
      if (this.panel === "DATE") {
        this.$refs.panelDate.setFocusToActiveDay();
      } else if (this.panel === "TIME") {
        this.$refs.panelTime.setFocusToActiveTime();
      } else if (this.panel === "YEAR") {
        this.$refs.panelYear.setFocusToActiveYear();
      } else if (this.panel === "MONTH") {
        this.$refs.panelMonth.setFocusToActiveMonth();
      }
    },

    setListenerForPressTabButton() {
      document.addEventListener("keydown", this.pressTabButton);
    },

    destroyListenerForPressTabButton() {
      document.removeEventListener("keydown", this.pressTabButton);
    },

    pressTabButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === AKeysCode.tab) {
        this.trapFocus($event);
        this.stopCurrentEvent($event);
      }
    },

    trapFocus(EVENT) {
      const FOCUSABLE_ELEMENTS = this.$el.querySelectorAll(".pux_datepicker__calendar__tab");
      if (FOCUSABLE_ELEMENTS.length <= 1) {
        return;
      }
      let isFocused = false;
      let isFocusedPanel = false;
      forEach(FOCUSABLE_ELEMENTS, (element, elementIndex) => {
        if (document.activeElement === element) {
          if (EVENT.shiftKey) {
            if (elementIndex === 0) {
              FOCUSABLE_ELEMENTS[FOCUSABLE_ELEMENTS.length - 1].focus();
              isFocusedPanel = true;
            } else {
              FOCUSABLE_ELEMENTS[elementIndex - 1].focus();
            }
          } else {
            if (elementIndex === FOCUSABLE_ELEMENTS.length - 1) {
              FOCUSABLE_ELEMENTS[0].focus();
            } else {
              FOCUSABLE_ELEMENTS[elementIndex + 1].focus();
            }
            if (elementIndex === FOCUSABLE_ELEMENTS.length - 2) {
              isFocusedPanel = true;
            }
          }
          isFocused = true;
          return false;
        }
      });
      if (!isFocused) {
        if (EVENT.shiftKey) {
          FOCUSABLE_ELEMENTS[FOCUSABLE_ELEMENTS.length - 2].focus();
        } else {
          FOCUSABLE_ELEMENTS[0].focus();
        }
      }
      if (isFocusedPanel) {
        this.setFocusToActivePanel();
      } else {
        this.removeFocusFromActivePanel();
      }
    },

    setWorkWithKeyboard() {
      this.isWorkWithKeyboard = true;
    },

    setWorkWithoutKeyboard() {
      this.isWorkWithKeyboard = false;
    },

    setListenerForPressEscapeButton() {
      document.addEventListener("keydown", this.pressEscapeButton);
    },

    destroyListenerForPressEscapeButton() {
      document.removeEventListener("keydown", this.pressEscapeButton);
    },

    pressEscapeButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === AKeysCode.escape) {
        this.$emit("closePopup", true);
      }
    },
  },
  render() {
    return h("div", {
      class: ["pux_datepicker__calendar", `pux_datepicker__calendar_${ this.panel.toLowerCase() }`],
      role: "region",
      "aria-labelledby": this.idForHeaderParent,
      onClick: $event => $event.stopPropagation(),
    }, [
      h("div", {
        id: this.idForHeaderParent,
        class: "a_sr_only",
        role: "header",
      }, [
        h("div", {
          id: this.idForHeader,
          "aria-live": "polite",
        }, [
          this.panel === "DATE" && h("span", null, this.months[this.calendarMonth]),
          (this.panel === "DATE" || this.panel === "MONTH") && h("span", null, this.calendarYear),
          this.panel === "YEAR" && h("span", null, this.yearHeader),
          this.panel === "TIME" && h("span", null, this.timeHeader),
        ]),
        h("div", null, this.suffixForHeader),
      ]),
      h("div", {
        class: "pux_datepicker__calendar__header",
      }, [
        h("div", null, [
          this.panel !== "TIME" && h("button", {
            class: "pux_datepicker__icon_last_year pux_datepicker__calendar__tab",
            type: "button",
            ariaLabel: this.ariaLabelForButtonLastYear,
            innerHTML: "&laquo;",
            onClick: $event => {
              $event.stopPropagation();
              this.handleIconYear(-1);
            },
          }),
          this.panel === "DATE" && h("button", {
            class: "pux_datepicker__icon_last_month pux_datepicker__calendar__tab",
            type: "button",
            ariaLabel: this.ariaLabelForButtonLastMonth,
            innerHTML: "&lsaquo;",
            onClick: $event => {
              $event.stopPropagation();
              this.handleIconMonth(-1);
            },
          }),
        ]),
        h("div", null, [
          this.panel === "DATE" && h("button", {
            class: "pux_datepicker__current_month pux_datepicker__calendar__tab",
            type: "button",
            ariaLabel: this.ariaLabelForButtonCurrentMonth,
            onClick: this.handleBtnMonth,
          }, this.months[this.calendarMonth]),
          (this.panel === "DATE" || this.panel === "MONTH") && h("button", {
            class: "pux_datepicker__current_year pux_datepicker__calendar__tab",
            type: "button",
            ariaLabel: this.ariaLabelForButtonCurrentYear,
            onClick: this.handleBtnYear,
          }, this.calendarYear),
          this.panel === "YEAR" && h("span", {
            class: "pux_datepicker__current_year",
          }, this.yearHeader),
          this.panel === "TIME" && h("span", null, [
            this.type === "time" ?
              h("span", {
                class: "pux_datepicker__time_header",
              }, this.timeHeader) :
              h("button", {
                class: "pux_datepicker__time_header pux_datepicker__calendar__tab",
                type: "button",
                ariaLabel: this.ariaLabelForButtonToDays,
                onClick: this.handleTimeHeader,
              }, this.timeHeader),
          ]),
        ]),
        h("div", null, [
          this.panel === "DATE" && h("button", {
            class: "pux_datepicker__icon_next_month pux_datepicker__calendar__tab",
            type: "button",
            ariaLabel: this.ariaLabelForButtonNextMonth,
            innerHTML: "&rsaquo;",
            onClick: $event => {
              $event.stopPropagation();
              this.handleIconMonth(1);
            },
          }),
          this.panel !== "TIME" && h("button", {
            class: "pux_datepicker__icon_next_year pux_datepicker__calendar__tab",
            type: "button",
            ariaLabel: this.ariaLabelForButtonNextYear,
            innerHTML: "&raquo;",
            onClick: $event => {
              $event.stopPropagation();
              this.handleIconYear(1);
            },
          }),
        ]),
      ]),
      h("div", {
        class: "pux_datepicker__calendar__content",
        role: "application",
      }, [
        h(APanelDate, {
          ref: "panelDate",
          id: this.id,
          style: this.panel !== "DATE" ? "display: none;" : "",
          class: {
            pux_datepicker__panel_focus: this.isFocusPanelChild,
            pux_datepicker__calendar__tab: this.panel === "DATE",
          },
          tabindex: 0,
          value: this.value,
          dateFormat: this.dateFormat,
          calendarMonth: this.calendarMonth,
          calendarYear: this.calendarYear,
          startAt: this.startAt,
          endAt: this.endAt,
          firstDayOfWeek: this.firstDayOfWeek,
          disabledDate: this.isDisabledDate,
          currentLanguage: this.currentLanguage,
          onSelect: this.selectDate,
          onHandleIconMonth: this.handleIconMonth,
        }),
        h(APanelYear, {
          ref: "panelYear",
          id: this.id,
          style: this.panel !== "YEAR" ? "display: none;" : "",
          class: {
            pux_datepicker__panel_focus: this.isFocusPanelChild,
            pux_datepicker__calendar__tab: this.panel === "YEAR",
          },
          value: this.value,
          disabledYear: this.isDisabledYear,
          firstYear: this.firstYear,
          onSelect: this.selectYear,
          onHandleIconYear: this.handleIconYear,
        }),
        h(APanelMonth, {
          ref: "panelMonth",
          id: this.id,
          style: this.panel !== "MONTH" ? "display: none;" : "",
          class: {
            pux_datepicker__panel_focus: this.isFocusPanelChild,
            pux_datepicker__calendar__tab: this.panel === "MONTH",
          },
          value: this.value,
          disabledMonth: this.isDisabledMonth,
          calendarYear: this.calendarYear,
          currentLanguage: this.currentLanguage,
          onSelect: this.selectMonth,
          onHandleIconYear: this.handleIconYear,
        }),
        h(APanelTime, {
          ref: "panelTime",
          id: this.id,
          style: this.panel !== "TIME" ? "display: none;" : "",
          class: {
            pux_datepicker__panel_focus: this.isFocusPanelChild,
            pux_datepicker__calendar__tab: this.panel === "TIME",
          },
          minuteStep: this.minuteStep,
          value: this.value,
          disabledTime: this.isDisabledTime,
          timeType: this.timeType,
          currentLanguage: this.currentLanguage,
          onSelect: this.selectTime,
        }),
      ]),
    ]);
  },
};
