import {
  AButton,
} from "aloha-vue";

import PanelDate from "../panel/PanelDate/PanelDate.vue";
import PanelMonth from "../panel/PanelMonth/PanelMonth.vue";
import PanelTime from "../panel/PanelTime/PanelTime.vue";
import PanelYear from "../panel/PanelYear/PanelYear.vue";

import PanelMixin from "../mixins/PanelMixin";

import keysCode from "../utils/keysCode";
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
  name: "CalendarPanel",
  components: {
    AButton,
    PanelDate,
    PanelMonth,
    PanelTime,
    PanelYear,
  },
  mixins: [
    PanelMixin,
  ],
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      default: null,
      validator: function(val) {
        return val === null || isValidDate(val);
      },
    },
    startAt: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    endAt: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "date", // ["date", "datetime"]
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD",
    },
    index: {
      type: Number,
      default: undefined,
    },
    defaultValue: {
      validator: function(val) {
        return isValidDate(val);
      },
      default: undefined,
    },
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: val => val >= 1 && val <= 7,
    },
    notBefore: {
      default: null,
      validator: function(val) {
        return !val || isValidDate(val);
      },
    },
    notAfter: {
      default: null,
      validator: function(val) {
        return !val || isValidDate(val);
      },
    },
    disabledDays: {
      type: [Array, Function],
      default: function() {
        return [];
      },
    },
    minuteStep: {
      type: Number,
      default: 0,
      validator: val => val >= 0 && val <= 60,
    },
    currentLanguage: {
      type: Object,
      required: true,
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
        this.$parent.$refs.calendarPanel,
      ];
      if (this.$parent.$refs.calendarPanel2) {
        PANELS.push(this.$parent.$refs.calendarPanel2);
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

    handleBtnYear() {
      this.showPanelYear();
      if (this.isWorkWithKeyboard) {
        this.setFocusToActivePanel();
      }
    },

    handleBtnMonth() {
      this.showPanelMonth();
      if (this.isWorkWithKeyboard) {
        this.setFocusToActivePanel();
      }
    },

    handleTimeHeader() {
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
      if (KEY_CODE === keysCode.tab) {
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

    closePopup() {
      this.$emit("closePopup", true);
    },

    pressEscapeButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === keysCode.escape) {
        this.closePopup();
      }
    },
  },
};
