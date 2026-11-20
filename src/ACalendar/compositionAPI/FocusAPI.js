import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import moment from "moment";
import {
  CALENDAR_DAY_FORMAT,
} from "../const";

export default function FocusAPI(props, {
  goToDate = () => {},
  focusableDayKeys = computed(() => []),
  isTimeGridView = computed(() => false),
  modelValueKey = computed(() => undefined),
}) {
  const firstDayOfWeek = toRef(props, "firstDayOfWeek");

  const focusedKey = ref(undefined);
  const elements = {};

  const setDayElement = (key, element) => {
    if (element) {
      elements[key] = element;
    } else {
      delete elements[key];
    }
  };

  // Only one day is in the tab order (roving tabindex), the arrow keys move between the days
  const tabbableKey = computed(() => {
    const CANDIDATES = [focusedKey.value, modelValueKey.value, moment().format(CALENDAR_DAY_FORMAT)];
    return CANDIDATES.find(key => focusableDayKeys.value.indexOf(key) !== -1) || focusableDayKeys.value[0];
  });

  const focusDay = async key => {
    focusedKey.value = key;
    if (focusableDayKeys.value.indexOf(key) === -1) {
      goToDate(key);
    }
    await nextTick();
    elements[key]?.focus();
  };

  const onFocusDay = ({ day }) => {
    focusedKey.value = day.key;
  };

  const getKeyForKeydown = ({ key, date }) => {
    const DATE = moment(date);
    const WEEKDAY_INDEX = (DATE.day() - firstDayOfWeek.value + 7) % 7;
    switch (key) {
      case "ArrowLeft":
        return DATE.subtract(1, "day");
      case "ArrowRight":
        return DATE.add(1, "day");
      case "ArrowUp":
        return DATE.subtract(1, "week");
      case "ArrowDown":
        return DATE.add(1, "week");
      case "Home":
        return DATE.subtract(WEEKDAY_INDEX, "days");
      case "End":
        return DATE.add(6 - WEEKDAY_INDEX, "days");
      // A month in the month view, a week in the week and the day view
      case "PageUp":
        return DATE.subtract(1, isTimeGridView.value ? "week" : "month");
      case "PageDown":
        return DATE.add(1, isTimeGridView.value ? "week" : "month");
      default:
        return undefined;
    }
  };

  const onKeydownDay = ({ day, $event }) => {
    const DATE = getKeyForKeydown({ key: $event.key, date: day.date });
    if (!DATE) {
      return;
    }
    $event.preventDefault();
    focusDay(DATE.format(CALENDAR_DAY_FORMAT));
  };

  return {
    focusDay,
    onFocusDay,
    onKeydownDay,
    setDayElement,
    tabbableKey,
  };
}
