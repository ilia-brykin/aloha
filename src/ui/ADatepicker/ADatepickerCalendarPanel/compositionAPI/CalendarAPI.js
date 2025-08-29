import {
  ref,
  toRef,
} from "vue";

import {
  isValidDate,
} from "../../utils";

export default function CalendarAPI(props) {
  const defaultValue = toRef(props, "defaultValue");
  const focusStartDate = toRef(props, "focusStartDate");
  const startDate = toRef(props, "startDate");
  const value = toRef(props, "value");

  const calendarMonth = ref(undefined);
  const calendarYear = ref(undefined);
  const firstYear = ref(undefined);

  const getNow = _value => {
    return _value ?
      new Date(_value) :
      defaultValue.value && isValidDate(defaultValue.value) ?
        new Date(defaultValue.value) :
        new Date();
  };

  const initCalendarValues = () => {
    let now;
    if (focusStartDate.value && startDate.value) {
      now = getNow(startDate.value);
    } else if (value.value) {
      now = getNow(value.value);
    } else if (startDate.value) {
      now = getNow(startDate.value);
    } else {
      now = getNow();
    }
    calendarYear.value = now.getFullYear();
    calendarMonth.value = now.getMonth();
    firstYear.value = Math.floor(calendarYear.value / 10) * 10;
  };

  return {
    calendarMonth,
    calendarYear,
    firstYear,
    getNow,
    initCalendarValues,
  };
}
