import {
  h,
  onMounted,
  ref,
} from "vue";
import {
  AIcon,
} from "../../../index";

import FloatingAPI from "../compositionAPI/FloatingAPI";
import GridAPI from "./compositionAPI/GridAPI";
import LocaleAPI from "../compositionAPI/LocaleAPI";
import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import ChevronDown from "../../../AIcon/Icons/ChevronDown";
import {
  compareByUnit,
  isoWeek,
  isSameUnit,
  quarterOf,
  weekday,
} from "../utils/dateUtils";

const FOCUSABLE = "button:not([disabled]), [tabindex=\"0\"]";

// previous / next buttons of every view
const NAV = {
  day: [
    { direction: -1, isYear: true, text: "_A_DATE_INPUT_PREV_YEAR_", symbol: "«" },
    { direction: -1, text: "_A_DATE_INPUT_PREV_MONTH_", symbol: "‹" },
    { direction: 1, text: "_A_DATE_INPUT_NEXT_MONTH_", symbol: "›" },
    { direction: 1, isYear: true, text: "_A_DATE_INPUT_NEXT_YEAR_", symbol: "»" },
  ],
  month: [
    { direction: -1, text: "_A_DATE_INPUT_PREV_YEAR_", symbol: "‹" },
    { direction: 1, text: "_A_DATE_INPUT_NEXT_YEAR_", symbol: "›" },
  ],
  quarter: [
    { direction: -1, text: "_A_DATE_INPUT_PREV_YEAR_", symbol: "‹" },
    { direction: 1, text: "_A_DATE_INPUT_NEXT_YEAR_", symbol: "›" },
  ],
  year: [
    { direction: -1, text: "_A_DATE_INPUT_PREV_YEARS_", symbol: "‹" },
    { direction: 1, text: "_A_DATE_INPUT_NEXT_YEARS_", symbol: "›" },
  ],
};

/**
 * Date picker dialog (WAI-ARIA APG): a modal dialog with a grid of the days of one or two months,
 * the months of a year or 12 years.
 */
export default {
  name: "ADateInputDialog",
  props: {
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
    // the field for the position with in-body
    getReference: {
      type: Function,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    inBody: {
      type: Boolean,
      required: false,
    },
    isCloseByButtonInvisibleInViewport: {
      type: Boolean,
      required: false,
    },
    // always visible in the page: a group instead of a modal dialog, no focus trap, no close button
    inline: {
      type: Boolean,
      required: false,
    },
    isDateDisabled: {
      type: Function,
      required: false,
      default: undefined,
    },
    label: {
      type: String,
      required: true,
    },
    locale: {
      type: String,
      required: false,
      default: undefined,
    },
    max: {
      type: Object,
      required: false,
      default: undefined,
    },
    min: {
      type: Object,
      required: false,
      default: undefined,
    },
    // the id of the component, for the click outside
    ownerId: {
      type: String,
      required: false,
      default: undefined,
    },
    // 1 or 2 months side by side
    months: {
      type: Number,
      required: false,
      default: 1,
    },
    rangeEnd: {
      type: Object,
      required: false,
      default: undefined,
    },
    // range: 0 the start is chosen, 1 the end
    rangeIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
    rangeStart: {
      type: Object,
      required: false,
      default: undefined,
    },
    selected: {
      type: Object,
      required: false,
      default: undefined,
    },
    shortcuts: {
      type: Array,
      required: false,
      default: () => [],
    },
    showToday: {
      type: Boolean,
      required: false,
    },
    showWeekNumbers: {
      type: Boolean,
      required: false,
    },
    // "day", "week", "month" or "year": the unit of the value
    unit: {
      type: String,
      required: false,
      default: "day",
    },
  },
  emits: [
    "close",
    "select",
    "shortcut",
  ],
  setup(props, context) {
    const gridRef = ref(undefined);
    const rootRef = ref(undefined);

    const {
      formatDateLong,
      formatMonthName,
      formatMonthTitle,
      getWeekdayName,
    } = LocaleAPI(props);

    const {
      cellUnit,
      changePage,
      changeYear,
      focusCell,
      focusDate,
      getCellIso,
      hoverDate,
      isDisabled,
      isInPreview,
      isTodayDisabled,
      monthGrids,
      onGridKeydown,
      pageStartYear,
      rows,
      select,
      selectToday,
      showBiggerView,
      today,
      view,
    } = GridAPI(props, context, {
      gridRef,
    });

    FloatingAPI(props, {
      floatingRef: rootRef,
      onReferenceHidden: () => context.emit("close", { focusButton: true, preventScroll: true }),
    });

    const isInRange = date => {
      return !!props.rangeStart && !!props.rangeEnd &&
        compareByUnit(date, props.rangeStart, cellUnit.value) >= 0 &&
        compareByUnit(date, props.rangeEnd, cellUnit.value) <= 0;
    };

    const onKeydown = $event => {
      if (props.inline) {
        return;
      }
      if ($event.key === "Escape") {
        // the dialog closes, not the modal around it
        $event.preventDefault();
        $event.stopPropagation();
        context.emit("close");
        return;
      }
      if ($event.key === "Tab") {
        const ELEMENTS = Array.from(rootRef.value.querySelectorAll(FOCUSABLE));
        const FIRST = ELEMENTS[0];
        const LAST = ELEMENTS[ELEMENTS.length - 1];
        if ($event.shiftKey && document.activeElement === FIRST) {
          $event.preventDefault();
          LAST.focus();
        } else if (!$event.shiftKey && document.activeElement === LAST) {
          $event.preventDefault();
          FIRST.focus();
        }
      }
    };

    onMounted(() => {
      if (!props.inline) {
        focusCell();
      }
    });

    return {
      cellUnit,
      changePage,
      changeYear,
      focusDate,
      formatDateLong,
      formatMonthName,
      formatMonthTitle,
      getCellIso,
      getWeekdayName,
      gridRef,
      hoverDate,
      isDisabled,
      isInPreview,
      isInRange,
      isTodayDisabled,
      monthGrids,
      onGridKeydown,
      onKeydown,
      pageStartYear,
      rootRef,
      rows,
      select,
      selectToday,
      showBiggerView,
      today,
      view,
    };
  },
  render() {
    const TITLE_ID = `${ this.id }_title`;
    const HINT_ID = `${ this.id }_hint`;
    const TITLES = {
      day: () => this.monthGrids.map(grid => this.formatMonthTitle(grid.month)).join(" – "),
      month: () => `${ this.focusDate.year }`,
      quarter: () => `${ this.focusDate.year }`,
      year: () => `${ this.pageStartYear } – ${ this.pageStartYear + 11 }`,
    };
    const BIGGER_VIEW_TEXT = {
      day: "_A_DATE_INPUT_CHOOSE_MONTH_",
      month: "_A_DATE_INPUT_CHOOSE_YEAR_",
      quarter: "_A_DATE_INPUT_CHOOSE_YEAR_",
    };

    const navButton = ({ direction, isYear, text, symbol }) => {
      const LABEL = getTranslatedText({ placeholder: text });
      return h("button", {
        key: text,
        type: "button",
        class: "a_date_input__nav",
        "aria-label": LABEL,
        title: LABEL,
        onClick: () => (isYear ? this.changeYear(direction) : this.changePage(direction)),
      }, [
        h("span", { "aria-hidden": "true" }, symbol),
      ]);
    };
    const NAV_VIEW = NAV[this.view];
    const HALF = NAV_VIEW.length / 2;

    const renderCellContent = (date, month) => {
      if (this.view === "day") {
        return [
          h("span", { "aria-hidden": "true" }, date.day),
          h("span", { class: "a_sr_only" }, this.formatDateLong(date)),
          this.$slots.day && this.$slots.day({
            date: this.getCellIso(date),
            day: date.day,
            isDisabled: this.isDisabled(date),
            isOtherMonth: date.month !== month.month,
            isSelected: isSameUnit(date, this.selected, this.cellUnit),
            isToday: isSameUnit(date, this.today, "day"),
          }),
        ];
      }
      if (this.view === "month") {
        return [
          h("span", { "aria-hidden": "true" }, this.formatMonthName(date.month)),
          h("span", { class: "a_sr_only" }, this.formatMonthTitle(date)),
        ];
      }
      if (this.view === "quarter") {
        const QUARTER = quarterOf(date);
        return [
          h("span", { "aria-hidden": "true" }, `${ getTranslatedText({ placeholder: "_A_DATE_INPUT_QUARTER_SHORT_" }) }${ QUARTER }`),
          // "Quarter 1 2025: January – March"
          h("span", { class: "a_sr_only" }, `${ getTranslatedText({ placeholder: "_A_DATE_INPUT_QUARTER_" }) } ${ QUARTER } ${ date.year }: ${ this.formatMonthName(date.month, "long") } – ${ this.formatMonthName(date.month + 2, "long") }`),
        ];
      }
      return `${ date.year }`;
    };

    const renderCell = (date, month) => {
      if (!date) {
        return h("td", { class: "a_date_input__day_empty" });
      }
      const IS_SELECTED = isSameUnit(date, this.selected, this.cellUnit);
      const IS_TODAY = isSameUnit(date, this.today, this.view);
      return h("td", {
        key: this.getCellIso(date),
        class: ["a_date_input__day", {
          a_date_input__day_other_month: this.view === "day" && date.month !== month.month,
          a_date_input__day_selected: IS_SELECTED,
          a_date_input__day_in_range: this.isInRange(date),
          a_date_input__day_in_preview: this.isInPreview(date),
          a_date_input__day_today: IS_TODAY,
        }],
        tabindex: isSameUnit(date, this.focusDate, this.view) ? 0 : -1,
        "data-date": this.getCellIso(date),
        "aria-selected": IS_SELECTED ? "true" : "false",
        "aria-disabled": this.isDisabled(date) ? "true" : undefined,
        "aria-current": IS_TODAY ? "date" : undefined,
        onClick: () => this.select(date),
        onMouseenter: () => {
          this.hoverDate = date;
        },
      }, renderCellContent(date, month));
    };

    const WEEKDAYS = Array.from({ length: 7 }, (_, index) => (this.firstDayOfWeek + index) % 7);
    // the ISO week of a row is the week of its Thursday
    const getWeekOfRow = row => {
      const THURSDAY = row.find(date => date && weekday(date) === 4) || row.find(Boolean);
      return isoWeek(THURSDAY).week;
    };

    const renderDayTable = grid => {
      const LABEL = this.formatMonthTitle(grid.month);
      return h("table", {
        key: LABEL,
        class: "a_date_input__grid",
        role: "grid",
        "aria-labelledby": this.monthGrids.length === 1 ? TITLE_ID : undefined,
        "aria-label": this.monthGrids.length > 1 ? LABEL : undefined,
        onKeydown: this.onGridKeydown,
      }, [
        this.monthGrids.length > 1 && h("caption", {
          class: "a_date_input__caption",
          "aria-hidden": "true",
        }, LABEL),
        h("thead", [
          h("tr", [
            this.showWeekNumbers && h("th", {
              scope: "col",
              class: "a_date_input__week",
              abbr: getTranslatedText({ placeholder: "_A_DATE_INPUT_WEEK_" }),
            }, getTranslatedText({ placeholder: "_A_DATE_INPUT_WEEK_SHORT_" })),
            ...WEEKDAYS.map(day => h("th", {
              key: day,
              scope: "col",
              abbr: this.getWeekdayName(day, "long"),
            }, this.getWeekdayName(day, "short"))),
          ]),
        ]),
        h("tbody", grid.rows.map((row, index) => h("tr", {
          key: index,
        }, [
          this.showWeekNumbers && h("th", {
            scope: "row",
            class: "a_date_input__week",
          }, getWeekOfRow(row)),
          ...row.map(date => renderCell(date, grid.month)),
        ]))),
      ]);
    };

    const BIGGER_VIEW_LABEL = BIGGER_VIEW_TEXT[this.view] && getTranslatedText({ placeholder: BIGGER_VIEW_TEXT[this.view] });

    return h("div", {
      ref: "rootRef",
      id: this.id,
      class: ["a_date_input__dialog", `a_date_input__dialog_${ this.view }`, {
        a_date_input__dialog_inline: this.inline,
        a_date_input__popup_in_body: this.inBody && !this.inline,
      }],
      role: this.inline ? "group" : "dialog",
      "aria-modal": this.inline ? undefined : "true",
      "data-owner": this.ownerId,
      "aria-label": this.label,
      "aria-describedby": HINT_ID,
      onKeydown: this.onKeydown,
    }, [
      h("div", {
        class: "a_date_input__header",
      }, [
        ...NAV_VIEW.slice(0, HALF).map(navButton),
        h("div", {
          class: "a_date_input__heading",
        }, [
          h("h2", {
            id: TITLE_ID,
            class: "a_date_input__title",
            "aria-live": "polite",
          }, TITLES[this.view]()),
          BIGGER_VIEW_LABEL && h("button", {
            type: "button",
            class: "a_date_input__nav a_date_input__view",
            "aria-label": BIGGER_VIEW_LABEL,
            title: BIGGER_VIEW_LABEL,
            onClick: this.showBiggerView,
          }, [
            h(AIcon, {
              icon: ChevronDown,
              class: "a_date_input__view__icon",
            }),
          ]),
        ]),
        ...NAV_VIEW.slice(HALF).map(navButton),
      ]),
      h("div", {
        ref: "gridRef",
        class: "a_date_input__grids",
        onMouseleave: () => {
          this.hoverDate = null;
        },
      }, this.view === "day" ?
        this.monthGrids.map(renderDayTable) :
        [
          h("table", {
            class: "a_date_input__grid",
            role: "grid",
            "aria-labelledby": TITLE_ID,
            onKeydown: this.onGridKeydown,
          }, [
            h("tbody", this.rows.map(row => h("tr", {
              key: this.getCellIso(row[0]),
            }, row.map(date => renderCell(date, date))))),
          ]),
        ]),
      h("div", {
        class: "a_date_input__footer",
      }, [
        h("p", {
          id: HINT_ID,
          class: "a_sr_only",
        }, getTranslatedText({ placeholder: "_A_DATE_INPUT_KEYBOARD_HINT_" })),
        this.shortcuts.length > 0 && h("div", {
          class: "a_date_input__shortcuts",
          role: "group",
          "aria-label": getTranslatedText({ placeholder: "_A_DATE_INPUT_SHORTCUTS_" }),
        }, this.shortcuts.map((shortcut, index) => h("button", {
          key: index,
          type: "button",
          class: "a_btn a_btn_link a_btn_small",
          onClick: () => this.$emit("shortcut", shortcut),
        }, getTranslatedText({ placeholder: shortcut.label })))),
        this.$slots.footer && this.$slots.footer({
          close: () => this.$emit("close"),
        }),
        this.showToday && h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small a_date_input__today",
          disabled: this.isTodayDisabled,
          onClick: this.selectToday,
        }, getTranslatedText({ placeholder: "_A_DATE_INPUT_TODAY_" })),
        !this.inline && h("button", {
          type: "button",
          class: "a_btn a_btn_outline_primary a_btn_small",
          onClick: () => this.$emit("close"),
        }, getTranslatedText({ placeholder: "_A_DATE_INPUT_CLOSE_" })),
      ]),
    ]);
  },
};
