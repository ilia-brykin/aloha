/* eslint vue/component-api-style: off */
import {
  h,
} from "vue";

import PanelMixin from "../../mixins/PanelMixin";

import AKeysCode from "../../../../const/AKeysCode";
import moment from "moment";
import {
  formatDate,
} from "../../utils";

// @vue/component
export default {
  name: "PanelDate",
  mixins: [
    PanelMixin,
  ],
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
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
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD",
    },
    calendarMonth: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: new Date().getMonth(),
    },
    calendarYear: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: new Date().getFullYear(),
    },
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: val => val >= 1 && val <= 7,
    },
    disabledDate: {
      type: Function,
      default: () => {
        return false;
      },
    },
    currentLanguage: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "handleIconMonth",
    "select",
  ],
  data() {
    return {
      dayForFocusButton: undefined,
    };
  },
  computed: {
    ths() {
      return this.getDays(this.firstDayOfWeek);
    },

    dates() {
      return this.getDates(this.calendarYear, this.calendarMonth, this.firstDayOfWeek);
    },

    trsWithTds() {
      const TRS_WITH_TDS = [];
      for (let i = 0; i < 6; i++) {
        const TDS = [];
        this.dates.slice(7 * i, 7 * i + 7).forEach(date => {
          const IS_TODAY = this.isCurrentDayToday(date);
          const CELL_TIME = this.getCellTime(date);
          const IS_DISABLED = this.disabledDate(CELL_TIME);
          TDS.push({
            class: this.getCellClasses({
              cellTime: CELL_TIME,
              isToday: IS_TODAY,
              month: date.month,
            }),
            id: this.getId({
              month: date.month,
              day: date.day,
            }),
            year: date.year,
            month: date.month,
            fullDate: this.getCellTitle(date),
            date: date,
            label: date.day,
            isToday: IS_TODAY,
            isDisabled: IS_DISABLED,
            isCurrentMonth: date.month === this.calendarMonth,
          });
        });
        TRS_WITH_TDS.push(TDS);
      }
      return TRS_WITH_TDS;
    },

    dayFromValueOrToday() {
      return this.dayFromValue || new Date().getDate();
    },

    dayFromValue() {
      if (this.value) {
        return new Date(this.value).getDate();
      }
      return "";
    },

    idForFocus() {
      if (this.dayForFocusButton) {
        return `${ this.id }_${ this.dayForFocusButton }`;
      }
      return "";
    },

    daysInMonth() {
      return moment(`${ this.calendarYear }_${ this.calendarMonth + 1 }`, "YYYY-MM").daysInMonth();
    },

    todayTranslate() {
      return this.currentLanguage.today;
    },
  },
  methods: {
    selectDate({ year, month, day }) {
      const date = new Date(year, month, day);
      if (this.disabledDate(date)) {
        return;
      }
      this.$emit("select", date);
    },

    getDays(firstDayOfWeek) {
      const days = this.currentLanguage.days;
      const firstday = parseInt(firstDayOfWeek, 10);
      return days.concat(days).slice(firstday, firstday + 7);
    },

    getDates(year, month, firstDayOfWeek) {
      const arr = [];
      const time = new Date(year, month);

      time.setDate(0);
      const lastMonthLength = (time.getDay() + 7 - firstDayOfWeek) % 7 + 1;
      const lastMonthfirst = time.getDate() - (lastMonthLength - 1);
      for (let i = 0; i < lastMonthLength; i++) {
        arr.push({ year, month: month - 1, day: lastMonthfirst + i });
      }

      time.setMonth(time.getMonth() + 2, 0);
      const curMonthLength = time.getDate();
      for (let i = 0; i < curMonthLength; i++) {
        arr.push({ year, month, day: 1 + i });
      }

      time.setMonth(time.getMonth() + 1, 1);
      const nextMonthLength = 42 - (lastMonthLength + curMonthLength);
      for (let i = 0; i < nextMonthLength; i++) {
        arr.push({ year, month: month + 1, day: 1 + i });
      }

      return arr;
    },

    isCurrentDayToday({ year, month, day }) {
      const CELL_TIME = this.getCellTime({ year, month, day });
      const TODAY = new Date().setHours(0, 0, 0, 0);
      return CELL_TIME === TODAY;
    },

    getCellClasses({ cellTime, isToday, month }) {
      const CLASSES = [];
      const CURRENT_TIME = this.value && new Date(this.value).setHours(0, 0, 0, 0);
      const START_TIME = this.startAt && new Date(this.startAt).setHours(0, 0, 0, 0);
      const END_TIME = this.endAt && new Date(this.endAt).setHours(0, 0, 0, 0);

      if (month < this.calendarMonth) {
        CLASSES.push("last-month");
      } else if (month > this.calendarMonth) {
        CLASSES.push("next-month");
      } else {
        CLASSES.push("cur-month");
      }

      if (isToday) {
        CLASSES.push("today");
      }

      if (this.disabledDate(cellTime)) {
        CLASSES.push("disabled");
      }

      if (CURRENT_TIME) {
        if (cellTime === CURRENT_TIME) {
          CLASSES.push("actived");
        } else if (START_TIME && cellTime <= CURRENT_TIME) {
          CLASSES.push("inrange");
        } else if (END_TIME && cellTime >= CURRENT_TIME) {
          CLASSES.push("inrange");
        }
      }
      return CLASSES.join(" ");
    },

    getCellTime({ year, month, day }) {
      return new Date(year, month, day).getTime();
    },

    getCellTitle({ year, month, day }) {
      return formatDate(new Date(year, month, day), this.dateFormat);
    },

    getId({ month, day }) {
      let id = `${ this.id }_${ day }`;
      if (month < this.calendarMonth) {
        id += "_last_month";
      } else if (month > this.calendarMonth) {
        id += "_next_month";
      }
      return id;
    },

    setFocusToActiveDay() {
      setTimeout(() => {
        this.setDefaultDayForFocusButton();
        document.getElementById(this.idForFocus).focus();
        this.setListenerForPressButtons();
      });
    },

    setDefaultDayForFocusButton() {
      this.dayForFocusButton = this.dayFromValueOrToday;
    },

    pressButton($event) {
      const KEY_CODE = $event.keyCode;
      if (KEY_CODE === AKeysCode.arrowUp) {
        this.setFocusToPast(7);
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowDown) {
        this.setFocusToFuture(7);
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowLeft) {
        this.setFocusToPast(1);
        this.stopCurrentEvent($event);
      } else if (KEY_CODE === AKeysCode.arrowRight) {
        this.setFocusToFuture(1);
        this.stopCurrentEvent($event);
      }
    },

    setFocusToPast(minusDays) {
      const NEW_DAY_FOR_BUTTON = this.dayForFocusButton - minusDays;
      if (NEW_DAY_FOR_BUTTON > 0) {
        this.dayForFocusButton = NEW_DAY_FOR_BUTTON;
      } else {
        this.$emit("handleIconMonth", -1);
        setTimeout(() => {
          this.dayForFocusButton = this.daysInMonth - Math.abs(NEW_DAY_FOR_BUTTON);
        });
      }
      this.setFocusToElementWithTimeout(this.idForFocus);
    },

    setFocusToFuture(plusDays) {
      const NEW_DAY_FOR_BUTTON = this.dayForFocusButton + plusDays;
      if (NEW_DAY_FOR_BUTTON <= this.daysInMonth) {
        this.dayForFocusButton = NEW_DAY_FOR_BUTTON;
      } else {
        const ALT_DAY_IN_MONTH = this.daysInMonth;
        this.$emit("handleIconMonth", 1);
        this.dayForFocusButton = NEW_DAY_FOR_BUTTON - ALT_DAY_IN_MONTH;
      }
      this.setFocusToElementWithTimeout(this.idForFocus);
    },

    destroyListenerForPressButtonsCallback() {
      this.dayForFocusButton = undefined;
    },
  },
  render() {
    return h("table", {
      class: "pux_datepicker__panel pux_datepicker__panel_date",
      role: "grid",
      ariaReadonly: true,
      "aria-labelledby": this.idForHeader,
      ...this.attributesForMainElement,
    }, [
      h("thead", null, [
        h("tr", null, [
          this.ths.map((thData, thIndex) => {
            return h("th", {
              key: thIndex,
              ariaLabel: thData.longName,
            }, thData.shortName);
          }),
        ]),
      ]),
      h("tbody", null, [
        this.trsWithTds.map((tdList, tdListIndex) => {
          return h("tr", {
            key: tdListIndex,
          }, [
            tdList.map((tdData, tdDataIndex) => {
              return h("td", {
                key: tdDataIndex,
                class: ["cell", tdData.class, {
                  pux_datepicker__panel__cell_focus: tdData.id === this.idForFocus,
                }],
              }, [
                h("button", {
                  id: tdData.id,
                  class: "pux_datepicker__panel__button",
                  type: "button",
                  tabindex: -1,
                  ariaHidden: true,
                  ariaSelected: !!(tdData.isCurrentMonth && tdData.label === this.dayFromValue),
                  onClick: () => this.selectDate(tdData.date),
                }, [
                  h("span", {
                    ariaHidden: true,
                  }, tdData.label),
                  h("span", {
                    class: "a_sr_only",
                  }, tdData.fullDate),
                  tdData.isToday && h("span", {
                    class: "a_sr_only",
                  }, this.todayTranslate),
                ]),
              ]);
            }),
          ]);
        }),
      ]),
    ]);
  },
};
