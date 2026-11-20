import {
  computed,
  toRef,
} from "vue";

import {
  getItemValue,
  getWeekSegments,
  toDayKey,
  toMoment,
} from "../utils/utils";

import {
  CALENDAR_COLORS,
} from "../const";

export default function EventsAPI(props, { weeks }) {
  const colorDefault = toRef(props, "colorDefault");
  const events = toRef(props, "events");
  const keyColor = toRef(props, "keyColor");
  const keyEnd = toRef(props, "keyEnd");
  const keyId = toRef(props, "keyId");
  const keyIsAllDay = toRef(props, "keyIsAllDay");
  const keyLabel = toRef(props, "keyLabel");
  const keyStart = toRef(props, "keyStart");
  const maxEventsPerDay = toRef(props, "maxEventsPerDay");

  const eventsNormalized = computed(() => {
    const EVENTS = [];
    (events.value || []).forEach((item, index) => {
      const START = toMoment(getItemValue(item, keyStart.value));
      if (!START) {
        return;
      }
      let end = toMoment(getItemValue(item, keyEnd.value));
      if (!end || end.isBefore(START)) {
        end = START;
      }
      EVENTS.push({
        key: getItemValue(item, keyId.value) ?? index,
        label: getItemValue(item, keyLabel.value),
        color: getItemValue(item, keyColor.value) || colorDefault.value,
        isAllDay: !!getItemValue(item, keyIsAllDay.value),
        start: START.toDate(),
        end: end.toDate(),
        startDay: toDayKey(START),
        endDay: toDayKey(end),
        startTime: START.valueOf(),
        item,
      });
    });
    return EVENTS;
  });

  const isLimited = computed(() => maxEventsPerDay.value > 0);

  const weeksWithEvents = computed(() => {
    return weeks.value.map(days => {
      const { segments, countsByDay } = getWeekSegments({ week: days, events: eventsNormalized.value });
      const SEGMENTS_VISIBLE = isLimited.value ?
        segments.filter(segment => segment.lane < maxEventsPerDay.value) :
        segments;
      const COUNTS_VISIBLE = days.map(() => 0);
      SEGMENTS_VISIBLE.forEach(segment => {
        for (let index = segment.start; index < segment.start + segment.span; index++) {
          COUNTS_VISIBLE[index]++;
        }
      });
      const LANES_USED = SEGMENTS_VISIBLE.reduce((max, segment) => Math.max(max, segment.lane + 1), 0);

      return {
        key: days[0].key,
        days: days.map((day, index) => ({
          ...day,
          eventsCount: countsByDay[index],
          hiddenCount: countsByDay[index] - COUNTS_VISIBLE[index],
        })),
        segments: SEGMENTS_VISIBLE,
        // With a limit all weeks have the same height
        lanesCount: isLimited.value ? maxEventsPerDay.value : Math.max(1, LANES_USED),
      };
    });
  });

  const getEventsForDay = dayKey => {
    return eventsNormalized.value
      .filter(event => event.startDay <= dayKey && event.endDay >= dayKey)
      .sort((a, b) => a.startTime - b.startTime);
  };

  // Named colors use the theme, any other CSS color (e.g. "#8e44ad") is mixed with the surface
  const getEventColorAttributes = event => {
    if (CALENDAR_COLORS.indexOf(event.color) !== -1) {
      return {
        class: `a_calendar__event_${ event.color }`,
      };
    }
    return {
      class: "a_calendar__event_custom",
      style: {
        "--a_calendar_event_accent": event.color,
      },
    };
  };

  return {
    getEventColorAttributes,
    getEventsForDay,
    weeksWithEvents,
  };
}
