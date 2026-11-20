import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getWeekDays,
  getWeeks,
  toDayKey,
} from "../utils/utils";

import ATranslationAPI from "../../ATranslation/compositionAPI/ATranslationAPI";

import moment from "moment";
import {
  CALENDAR_DAY_FORMAT,
} from "../const";

export default function PeriodAPI(props, { emit }) {
  const firstDayOfWeek = toRef(props, "firstDayOfWeek");
  const modelValue = toRef(props, "modelValue");
  const view = toRef(props, "view");

  const { language } = ATranslationAPI();

  const modelValueKey = computed(() => toDayKey(modelValue.value));

  const viewLocal = ref(view.value);
  watch(view, () => {
    viewLocal.value = view.value;
  });
  // The week and the day show the hours, the month shows the days
  const isTimeGridView = computed(() => viewLocal.value === "week" || viewLocal.value === "day");

  // A day of the shown period: the month or the week that contains it is shown
  const viewDate = ref(modelValueKey.value || moment().format(CALENDAR_DAY_FORMAT));

  const goToDate = date => {
    const KEY = toDayKey(date);
    if (KEY) {
      viewDate.value = KEY;
    }
  };

  const unit = computed(() => viewLocal.value);

  const goToPrevious = () => {
    viewDate.value = moment(viewDate.value).subtract(1, unit.value).format(CALENDAR_DAY_FORMAT);
  };

  const goToNext = () => {
    viewDate.value = moment(viewDate.value).add(1, unit.value).format(CALENDAR_DAY_FORMAT);
  };

  const goToToday = () => {
    goToDate(new Date());
  };

  // A date chosen outside (v-model) shows its period
  watch(modelValue, goToDate);

  const weeks = computed(() => {
    return getWeeks({
      month: viewDate.value,
      firstDayOfWeek: firstDayOfWeek.value,
    });
  });

  const weekDays = computed(() => {
    return getWeekDays({
      date: viewDate.value,
      firstDayOfWeek: firstDayOfWeek.value,
    });
  });

  // The columns of the time grid: the 7 days of the week or one day
  const timeGridDays = computed(() => {
    if (viewLocal.value === "day") {
      return weekDays.value.filter(day => day.key === viewDate.value);
    }
    return weekDays.value;
  });

  // The days that can get the focus: the days of the month (without the days of the other months), of the week or the day
  const focusableDayKeys = computed(() => {
    if (isTimeGridView.value) {
      return timeGridDays.value.map(day => day.key);
    }
    return weeks.value.flat().filter(day => day.isCurrentMonth).map(day => day.key);
  });

  const changeView = viewNew => {
    if (viewNew === viewLocal.value) {
      return;
    }
    // To the week or the day: the selected day or today, if it is shown, otherwise the first shown day
    if (viewNew !== "month") {
      const KEYS = focusableDayKeys.value;
      viewDate.value = [modelValueKey.value, moment().format(CALENDAR_DAY_FORMAT)].find(key => KEYS.indexOf(key) !== -1) || KEYS[0];
    }
    viewLocal.value = viewNew;
    emit("update:view", viewNew);
  };

  const title = computed(() => {
    if (viewLocal.value === "day") {
      return new Intl.DateTimeFormat(language.value || undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" })
        .format(timeGridDays.value[0].date);
    }
    if (viewLocal.value === "week") {
      const FORMAT = new Intl.DateTimeFormat(language.value || undefined, { day: "numeric", month: "long", year: "numeric" });
      return FORMAT.formatRange(weekDays.value[0].date, weekDays.value[6].date);
    }
    return new Intl.DateTimeFormat(language.value || undefined, { month: "long", year: "numeric" })
      .format(moment(viewDate.value).toDate());
  });

  const weekdays = computed(() => {
    const FORMAT_SHORT = new Intl.DateTimeFormat(language.value || undefined, { weekday: "short" });
    const FORMAT_LONG = new Intl.DateTimeFormat(language.value || undefined, { weekday: "long" });
    return weekDays.value.map(day => ({
      short: FORMAT_SHORT.format(day.date),
      long: FORMAT_LONG.format(day.date),
      isWeekend: day.isWeekend,
    }));
  });

  const timeGridWeekdays = computed(() => {
    const FORMAT = new Intl.DateTimeFormat(language.value || undefined, { weekday: viewLocal.value === "day" ? "long" : "short" });
    return timeGridDays.value.map(day => FORMAT.format(day.date));
  });

  const range = computed(() => {
    const DAYS = isTimeGridView.value ? timeGridDays.value : weeks.value.flat();
    return {
      start: DAYS[0].key,
      end: DAYS[DAYS.length - 1].key,
      month: viewDate.value.slice(0, 7),
      view: viewLocal.value,
    };
  });

  // The parent can load the events of the shown days
  watch(() => `${ range.value.start }_${ range.value.end }`, () => {
    emit("range-change", range.value);
  }, { immediate: true });

  return {
    changeView,
    focusableDayKeys,
    goToDate,
    goToNext,
    goToPrevious,
    goToToday,
    isTimeGridView,
    modelValueKey,
    range,
    title,
    viewLocal,
    timeGridDays,
    timeGridWeekdays,
    weekdays,
    weeks,
  };
}
