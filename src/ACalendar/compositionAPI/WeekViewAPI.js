import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getMinutesOfDay,
  getTimedLayout,
  getWeekSegments,
} from "../utils/utils";

import moment from "moment";

export default function WeekViewAPI(props, {
  emit,
  eventsNormalized = computed(() => []),
  isWeekView = computed(() => false),
  weekDays = computed(() => []),
}) {
  const hourEnd = toRef(props, "hourEnd");
  const hourStart = toRef(props, "hourStart");
  const scrollToHour = toRef(props, "scrollToHour");
  const timeStep = toRef(props, "timeStep");

  const minuteStart = computed(() => hourStart.value * 60);
  const minuteEnd = computed(() => Math.max(hourEnd.value, hourStart.value + 1) * 60);
  const minutesCount = computed(() => minuteEnd.value - minuteStart.value);

  const hours = computed(() => {
    const HOURS = [];
    for (let hour = hourStart.value; hour < minuteEnd.value / 60; hour++) {
      HOURS.push(hour);
    }
    return HOURS;
  });

  // All-day events and events over several days are shown as bars above the time grid, like in Outlook
  const isEventInAllDayRow = event => event.isAllDay || event.startDay !== event.endDay;

  const weekView = computed(() => {
    const DAYS = weekDays.value;
    const { segments, countsByDay } = getWeekSegments({
      week: DAYS,
      events: eventsNormalized.value.filter(isEventInAllDayRow),
    });
    const TIMED = eventsNormalized.value.filter(event => !isEventInAllDayRow(event));

    return {
      allDaySegments: segments,
      allDayLanesCount: Math.max(1, segments.reduce((max, segment) => Math.max(max, segment.lane + 1), 0)),
      days: DAYS.map((day, index) => {
        const TIMED_OF_DAY = TIMED.filter(event => event.startDay === day.key);
        return {
          ...day,
          eventsCount: countsByDay[index] + TIMED_OF_DAY.length,
          timed: getTimedLayout({
            events: TIMED_OF_DAY,
            minuteStart: minuteStart.value,
            minuteEnd: minuteEnd.value,
          }),
        };
      }),
    };
  });

  const toPercent = minutes => `${ minutes / minutesCount.value * 100 }%`;

  const getTimedStyle = item => {
    return {
      top: toPercent(item.start - minuteStart.value),
      height: toPercent(item.end - item.start),
      insetInlineStart: `${ item.column / item.columns * 100 }%`,
      width: `${ 100 / item.columns }%`,
    };
  };

  // The click on an empty place of a day: the start is rounded down to timeStep
  const onClickTime = ({ day, $event }) => {
    const RECT = $event.currentTarget.getBoundingClientRect();
    const RATIO = RECT.height ? ($event.clientY - RECT.top) / RECT.height : 0;
    const STEP = Math.max(1, timeStep.value);
    const MINUTES = Math.floor((minuteStart.value + RATIO * minutesCount.value) / STEP) * STEP;
    const START = moment(day.key).add(Math.min(Math.max(MINUTES, minuteStart.value), minuteEnd.value - STEP), "minutes");
    emit("time-click", {
      date: day.key,
      start: START.toDate(),
      end: START.clone().add(STEP, "minutes").toDate(),
      $event,
    });
  };

  // The line of the current time, updated every minute
  const now = ref(new Date());
  let nowTimer;
  onMounted(() => {
    nowTimer = setInterval(() => {
      now.value = new Date();
    }, 60000);
  });
  onBeforeUnmount(() => {
    clearInterval(nowTimer);
  });

  const nowStyle = computed(() => {
    const MINUTES = getMinutesOfDay(now.value);
    if (MINUTES < minuteStart.value || MINUTES > minuteEnd.value) {
      return undefined;
    }
    return {
      top: toPercent(MINUTES - minuteStart.value),
    };
  });

  let timeScrollElement;
  const setTimeScrollElement = element => {
    timeScrollElement = element;
  };

  // The working day is visible without scrolling
  const scrollToStartHour = async() => {
    await nextTick();
    if (!timeScrollElement) {
      return;
    }
    const GRID_HEIGHT = timeScrollElement.firstElementChild?.offsetHeight || 0;
    timeScrollElement.scrollTop = (scrollToHour.value - hourStart.value) / hours.value.length * GRID_HEIGHT;
  };

  onMounted(() => {
    if (isWeekView.value) {
      scrollToStartHour();
    }
  });
  watch(isWeekView, () => {
    if (isWeekView.value) {
      scrollToStartHour();
    }
  });

  return {
    getTimedStyle,
    hours,
    nowStyle,
    onClickTime,
    setTimeScrollElement,
    weekView,
  };
}
