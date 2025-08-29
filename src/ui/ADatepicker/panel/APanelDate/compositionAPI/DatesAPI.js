import {
  computed,
  toRef,
} from "vue";

export default function DatesAPI(props) {
  const calendarMonth = toRef(props, "calendarMonth");
  const calendarYear = toRef(props, "calendarYear");
  const firstDayOfWeek = toRef(props, "firstDayOfWeek");
  const value = toRef(props, "value");

  const dates = computed(() => {
    const DATES = [];
    const time = new Date(calendarYear.value, calendarMonth.value);

    time.setDate(0);
    const lastMonthLength = (time.getDay() + 7 - firstDayOfWeek.value) % 7 + 1;
    const lastMonthFirst = time.getDate() - (lastMonthLength - 1);
    for (let i = 0; i < lastMonthLength; i++) {
      DATES.push({
        year: calendarYear.value,
        month: calendarMonth.value - 1,
        day: lastMonthFirst + i,
      });
    }

    time.setMonth(time.getMonth() + 2, 0);
    const curMonthLength = time.getDate();
    for (let i = 0; i < curMonthLength; i++) {
      DATES.push({
        year: calendarYear.value,
        month: calendarMonth.value,
        day: 1 + i,
      });
    }

    time.setMonth(time.getMonth() + 1, 1);
    const nextMonthLength = 42 - (lastMonthLength + curMonthLength);
    for (let i = 0; i < nextMonthLength; i++) {
      DATES.push({
        year: calendarYear.value,
        month: calendarMonth.value + 1,
        day: 1 + i,
      });
    }

    return DATES;
  });

  const dayFromValue = computed(() => {
    if (value.value) {
      return new Date(value.value).getDate();
    }
    return "";
  });

  const dayFromValueOrToday = computed(() => {
    return dayFromValue.value || new Date().getDate();
  });

  return {
    dates,
    dayFromValue,
    dayFromValueOrToday,
  };
}
