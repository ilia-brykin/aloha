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
  isDayDisabled = () => false,
  isTimeGridView = computed(() => false),
  timeGridDays = computed(() => []),
}) {
  const hourEnd = toRef(props, "hourEnd");
  const maxEventsPerDay = toRef(props, "maxEventsPerDay");
  const workingHours = toRef(props, "workingHours");
  const workWeekDays = toRef(props, "workWeekDays");
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
    const DAYS = timeGridDays.value;
    const { segments, countsByDay } = getWeekSegments({
      week: DAYS,
      events: eventsNormalized.value.filter(isEventInAllDayRow),
    });
    const TIMED = eventsNormalized.value.filter(event => !isEventInAllDayRow(event));
    // maxEventsPerDay limits the all-day row like a day of the month, the others are counted in "+N"
    const IS_LIMITED = maxEventsPerDay.value > 0;
    const SEGMENTS_VISIBLE = IS_LIMITED ? segments.filter(segment => segment.lane < maxEventsPerDay.value) : segments;
    const COUNTS_VISIBLE = DAYS.map(() => 0);
    SEGMENTS_VISIBLE.forEach(segment => {
      for (let index = segment.start; index < segment.start + segment.span; index++) {
        COUNTS_VISIBLE[index]++;
      }
    });

    return {
      allDaySegments: SEGMENTS_VISIBLE,
      allDayLanesCount: Math.max(1, SEGMENTS_VISIBLE.reduce((max, segment) => Math.max(max, segment.lane + 1), 0)),
      days: DAYS.map((day, index) => {
        const TIMED_OF_DAY = TIMED.filter(event => event.startDay === day.key);
        return {
          ...day,
          allDayHiddenCount: countsByDay[index] - COUNTS_VISIBLE[index],
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

  const timeStepLocal = computed(() => Math.max(1, timeStep.value));

  /**
   * The minute of the day at a height of a time column, rounded down to timeStep.
   * duration keeps an event of this length inside the visible hours.
   */
  const getMinutesAtY = ({ rect, clientY, duration = timeStepLocal.value }) => {
    const RATIO = rect.height ? (clientY - rect.top) / rect.height : 0;
    const STEP = timeStepLocal.value;
    const MINUTES = Math.floor((minuteStart.value + RATIO * minutesCount.value) / STEP) * STEP;
    return Math.min(Math.max(MINUTES, minuteStart.value), Math.max(minuteStart.value, minuteEnd.value - duration));
  };

  // The working hours are light, the other hours and the days outside workWeekDays are shaded
  const getWorkingHoursStyle = day => {
    if (!workingHours.value) {
      return undefined;
    }
    if (workWeekDays.value.indexOf(day.date.getDay()) === -1) {
      return {
        "--a_calendar_working_start": "100%",
        "--a_calendar_working_end": "100%",
      };
    }
    const limit = minutes => Math.min(Math.max(minutes, minuteStart.value), minuteEnd.value);
    return {
      "--a_calendar_working_start": toPercent(limit((workingHours.value.start ?? 0) * 60) - minuteStart.value),
      "--a_calendar_working_end": toPercent(limit((workingHours.value.end ?? 24) * 60) - minuteStart.value),
    };
  };

  // The click on an empty place of a day: the start is rounded down to timeStep
  const onClickTime = ({ day, $event }) => {
    if (isDayDisabled(day.key)) {
      return;
    }
    const MINUTES = getMinutesAtY({ rect: $event.currentTarget.getBoundingClientRect(), clientY: $event.clientY });
    const START = moment(day.key).add(MINUTES, "minutes");
    const STEP = timeStepLocal.value;
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
    if (isTimeGridView.value) {
      scrollToStartHour();
    }
  });
  watch(isTimeGridView, () => {
    if (isTimeGridView.value) {
      scrollToStartHour();
    }
  });

  return {
    getMinutesAtY,
    getTimedStyle,
    getWorkingHoursStyle,
    hours,
    minuteStart,
    minuteEnd,
    minutesCount,
    timeStepLocal,
    nowStyle,
    onClickTime,
    setTimeScrollElement,
    weekView,
  };
}
