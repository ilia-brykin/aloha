import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function MonthsAPI(props) {
  const calendarYear = toRef(props, "calendarYear");
  const currentLanguage = toRef(props, "currentLanguage");
  const disabledMonth = toRef(props, "disabledMonth");
  const id = toRef(props, "id");
  const value = toRef(props, "value");

  const currentYear = computed(() => {
    return value.value && new Date(value.value).getFullYear();
  });

  const currentMonth = computed(() => {
    return value.value && new Date(value.value).getMonth();
  });

  const isDisabled = month => {
    return !!(isFunction(disabledMonth.value) && disabledMonth.value(month));
  };

  const getIdForMonth = monthIndex => {
    return `${ id.value }_month_${ monthIndex }`;
  };

  const months = computed(() => {
    const MONTHS = [];
    currentLanguage.value.months.forEach((month, index) => {
      MONTHS.push({
        isActive: currentYear.value === calendarYear.value && currentMonth.value === index,
        isDisabled: isDisabled(index),
        label: month,
        id: getIdForMonth(index),
      });
    });
    return MONTHS;
  });

  return {
    getIdForMonth,
    isDisabled,
    months,
  };
}
