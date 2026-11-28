import {
  computed,
  nextTick,
  ref,
  toRef,
  watch,
} from "vue";

import {
  addDays,
  addMonths,
  clampDate,
  compareByUnit,
  daysInMonth,
  endOfWeek,
  getMonthGrid,
  quarterToDate,
  startOfWeek,
  todayParts,
  toIsoUnit,
} from "../../utils/dateUtils";
import {
  chunk,
  isFunction,
} from "lodash-es";

// months and years: 12 cells in rows of 3
const COLUMNS = 3;

const monthIndex = date => date.year * 12 + date.month - 1;

export default function GridAPI(props, { emit }, {
  gridRef = ref(undefined),
}) {
  const firstDayOfWeek = toRef(props, "firstDayOfWeek");
  const inline = toRef(props, "inline");
  const isDateDisabled = toRef(props, "isDateDisabled");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const months = toRef(props, "months");
  const rangeEnd = toRef(props, "rangeEnd");
  const rangeIndex = toRef(props, "rangeIndex");
  const rangeStart = toRef(props, "rangeStart");
  const selected = toRef(props, "selected");
  const unit = toRef(props, "unit");

  const today = todayParts();
  const focusDate = ref(selected.value || clampDate(today, min.value, max.value));
  // the smallest view: "day" for a date and a week, "month" and "year" for these modes; the heading goes to the bigger views
  const view = ref(unit.value === "week" ? "day" : unit.value);
  // the unit of a cell: in mode="week" a day stands for its week
  const cellUnit = computed(() => (view.value === "day" && unit.value === "week" ? "week" : view.value));

  // day view: the first of the shown months; it moves only when the focus leaves the shown months
  const monthsCount = computed(() => Math.max(1, Math.min(months.value || 1, 2)));
  const displayStart = ref({ year: focusDate.value.year, month: focusDate.value.month, day: 1 });
  watch(focusDate, date => {
    const DIFFERENCE = monthIndex(date) - monthIndex(displayStart.value);
    if (DIFFERENCE < 0 || DIFFERENCE > monthsCount.value - 1) {
      const START = DIFFERENCE < 0 ? date : addMonths(date, -(monthsCount.value - 1));
      displayStart.value = { year: START.year, month: START.month, day: 1 };
    }
  }, { flush: "sync" });

  const pageStartYear = computed(() => Math.floor(focusDate.value.year / 12) * 12);

  // inline: the calendar follows a value typed in the field
  watch(selected, date => {
    if (inline.value && date) {
      focusDate.value = date;
    }
  });

  // day view: one grid per shown month; with 2 months the days of other months are empty
  const monthGrids = computed(() => {
    return Array.from({ length: monthsCount.value }, (_, index) => {
      const MONTH = addMonths(displayStart.value, index);
      const ROWS = getMonthGrid(MONTH, firstDayOfWeek.value).map(row => row.map(date => {
        return monthsCount.value > 1 && date.month !== MONTH.month ? null : date;
      }));
      return {
        month: MONTH,
        // with 2 months a week that is only in the other month is not shown
        rows: ROWS.filter(row => row.some(Boolean)),
      };
    });
  });

  // quarter, month and year views
  const rows = computed(() => {
    if (view.value === "quarter") {
      return chunk([1, 2, 3, 4].map(quarter => quarterToDate(focusDate.value.year, quarter)), 2);
    }
    if (view.value === "month") {
      return chunk(Array.from({ length: 12 }, (_, index) => ({ year: focusDate.value.year, month: index + 1, day: 1 })), COLUMNS);
    }
    return chunk(Array.from({ length: 12 }, (_, index) => ({ year: pageStartYear.value + index, month: 1, day: 1 })), COLUMNS);
  });

  const isDisabled = (date, UNIT = cellUnit.value) => {
    if ((min.value && compareByUnit(date, min.value, UNIT) < 0) ||
      (max.value && compareByUnit(date, max.value, UNIT) > 0)) {
      return true;
    }
    // isDateDisabled is for the cells of the unit of the component (days for a date, months for mode="month")
    return UNIT === unit.value && isFunction(isDateDisabled.value) && !!isDateDisabled.value(toIsoUnit(date, UNIT));
  };

  // the cells of the day view have the date also in mode="week", so every cell has its own key
  const getCellIso = date => toIsoUnit(date, view.value);

  const focusCell = () => {
    nextTick(() => {
      // the popup gets its position later (floating-ui is async): no scroll of the page to its first place
      gridRef.value?.querySelector(`[data-date="${ getCellIso(focusDate.value) }"]`)?.focus({ preventScroll: true });
    });
  };

  const moveFocus = date => {
    focusDate.value = date;
    focusCell();
  };

  // the previous / next buttons; the focus stays on the button
  const changePage = direction => {
    const MONTHS = { day: 1, month: 12, quarter: 12, year: 144 };
    focusDate.value = addMonths(focusDate.value, direction * MONTHS[view.value]);
  };

  const changeYear = direction => {
    focusDate.value = addMonths(focusDate.value, direction * 12);
  };

  // heading: days → months → years, quarters → years
  const showBiggerView = () => {
    view.value = view.value === "day" ? "month" : "year";
    focusCell();
  };

  const withDay = (date, day) => ({ ...date, day: Math.min(day, daysInMonth(date.year, date.month)) });

  const emitSelect = date => {
    emit("select", unit.value === "week" ? startOfWeek(date, 1) : date);
  };

  const select = date => {
    if (isDisabled(date)) {
      return;
    }
    if (cellUnit.value === unit.value) {
      if (inline.value) {
        // the cell keeps the focus after the click
        focusDate.value = date;
      }
      emitSelect(date);
      return;
    }
    // a month or a year opens the smaller view, the day of the focus is kept
    if (view.value === "year") {
      focusDate.value = withDay({ ...date, month: focusDate.value.month }, focusDate.value.day);
      view.value = unit.value === "quarter" ? "quarter" : "month";
    } else {
      focusDate.value = withDay(date, focusDate.value.day);
      view.value = "day";
    }
    focusCell();
  };

  const isTodayDisabled = computed(() => isDisabled(today, unit.value));

  const selectToday = () => {
    if (!isTodayDisabled.value) {
      emitSelect(today);
    }
  };

  // range: the period from the other end to the day under the mouse or the focus
  const hoverDate = ref(null);
  const previewRange = computed(() => {
    const DATE = hoverDate.value;
    if (!DATE || view.value !== "day") {
      return null;
    }
    if (rangeIndex.value === 1 && rangeStart.value && compareByUnit(DATE, rangeStart.value, cellUnit.value) >= 0) {
      return [rangeStart.value, DATE];
    }
    if (rangeIndex.value === 0 && rangeEnd.value && compareByUnit(DATE, rangeEnd.value, cellUnit.value) <= 0) {
      return [DATE, rangeEnd.value];
    }
    return null;
  });

  const isInPreview = date => {
    return !!previewRange.value &&
      compareByUnit(date, previewRange.value[0], cellUnit.value) >= 0 &&
      compareByUnit(date, previewRange.value[1], cellUnit.value) <= 0;
  };

  const getActions = ($event, isRtl) => {
    const DATE = focusDate.value;
    const NEXT = isRtl ? -1 : 1;
    if (view.value === "day") {
      return {
        ArrowLeft: () => addDays(DATE, -NEXT),
        ArrowRight: () => addDays(DATE, NEXT),
        ArrowUp: () => addDays(DATE, -7),
        ArrowDown: () => addDays(DATE, 7),
        Home: () => startOfWeek(DATE, firstDayOfWeek.value),
        End: () => endOfWeek(DATE, firstDayOfWeek.value),
        PageUp: () => addMonths(DATE, $event.shiftKey ? -12 : -1),
        PageDown: () => addMonths(DATE, $event.shiftKey ? 12 : 1),
      };
    }
    // a cell is 1 month in the month view, 3 in the quarter view (2 columns), 12 in the year view
    const STEPS = { month: 1, quarter: 3, year: 12 };
    const STEP = STEPS[view.value];
    const COLUMNS_VIEW = view.value === "quarter" ? 2 : COLUMNS;
    const CELLS = view.value === "quarter" ? 4 : 12;
    const FIRST = view.value === "year" ? { ...DATE, year: pageStartYear.value } : { ...DATE, month: 1 };
    return {
      ArrowLeft: () => addMonths(DATE, -NEXT * STEP),
      ArrowRight: () => addMonths(DATE, NEXT * STEP),
      ArrowUp: () => addMonths(DATE, -COLUMNS_VIEW * STEP),
      ArrowDown: () => addMonths(DATE, COLUMNS_VIEW * STEP),
      Home: () => withDay(FIRST, DATE.day),
      End: () => withDay(addMonths(FIRST, (CELLS - 1) * STEP), DATE.day),
      PageUp: () => addMonths(DATE, -CELLS * STEP),
      PageDown: () => addMonths(DATE, CELLS * STEP),
    };
  };

  const onGridKeydown = $event => {
    const IS_RTL = getComputedStyle($event.currentTarget).direction === "rtl";
    const ACTIONS = getActions($event, IS_RTL);
    if (ACTIONS[$event.key]) {
      $event.preventDefault();
      moveFocus(ACTIONS[$event.key]());
      hoverDate.value = focusDate.value;
      return;
    }
    if ($event.key === "Enter" || $event.key === " ") {
      $event.preventDefault();
      select(focusDate.value);
    }
  };

  return {
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
    moveFocus,
    onGridKeydown,
    pageStartYear,
    rows,
    select,
    selectToday,
    showBiggerView,
    today,
    view,
  };
}
