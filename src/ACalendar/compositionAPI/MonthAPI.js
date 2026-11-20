import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getWeeks,
  toDayKey,
  toMoment,
} from "../utils/utils";

import ATranslationAPI from "../../ATranslation/compositionAPI/ATranslationAPI";

import moment from "moment";

const MONTH_FORMAT = "YYYY-MM";

export default function MonthAPI(props, { emit }) {
  const firstDayOfWeek = toRef(props, "firstDayOfWeek");
  const modelValue = toRef(props, "modelValue");

  const { language } = ATranslationAPI();

  const modelValueKey = computed(() => toDayKey(modelValue.value));

  const viewMonth = ref((toMoment(modelValue.value) || moment()).format(MONTH_FORMAT));

  const goToDate = date => {
    const DATE = toMoment(date);
    if (DATE) {
      viewMonth.value = DATE.format(MONTH_FORMAT);
    }
  };

  const goToPreviousMonth = () => {
    viewMonth.value = moment(viewMonth.value, MONTH_FORMAT).subtract(1, "month").format(MONTH_FORMAT);
  };

  const goToNextMonth = () => {
    viewMonth.value = moment(viewMonth.value, MONTH_FORMAT).add(1, "month").format(MONTH_FORMAT);
  };

  const goToToday = () => {
    goToDate(new Date());
  };

  // A date chosen outside (v-model) shows its month
  watch(modelValue, goToDate);

  const weeks = computed(() => {
    return getWeeks({
      month: moment(viewMonth.value, MONTH_FORMAT),
      firstDayOfWeek: firstDayOfWeek.value,
    });
  });

  const title = computed(() => {
    return new Intl.DateTimeFormat(language.value || undefined, { month: "long", year: "numeric" })
      .format(moment(viewMonth.value, MONTH_FORMAT).toDate());
  });

  const weekdays = computed(() => {
    const FORMAT_SHORT = new Intl.DateTimeFormat(language.value || undefined, { weekday: "short" });
    const FORMAT_LONG = new Intl.DateTimeFormat(language.value || undefined, { weekday: "long" });
    return weeks.value[0].map(day => ({
      short: FORMAT_SHORT.format(day.date),
      long: FORMAT_LONG.format(day.date),
      isWeekend: day.isWeekend,
    }));
  });

  const range = computed(() => {
    const LAST_WEEK = weeks.value[weeks.value.length - 1];
    return {
      start: weeks.value[0][0].key,
      end: LAST_WEEK[LAST_WEEK.length - 1].key,
      month: viewMonth.value,
    };
  });

  // The parent can load the events of the shown days
  watch(() => `${ range.value.start }_${ range.value.end }`, () => {
    emit("range-change", range.value);
  }, { immediate: true });

  return {
    goToDate,
    goToNextMonth,
    goToPreviousMonth,
    goToToday,
    modelValueKey,
    range,
    title,
    viewMonth,
    weekdays,
    weeks,
  };
}
