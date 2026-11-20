import {
  computed,
} from "vue";

/**
 * The agenda: the days of the month that have events, with their events.
 * All-day events and events over several days come first, then the events by their start.
 */
export default function AgendaAPI(props, {
  agendaDays = computed(() => []),
  getEventsForDay = () => [],
}) {
  const agendaGroups = computed(() => {
    return agendaDays.value
      .map(day => ({
        day,
        events: getEventsForDay(day.key).slice().sort((a, b) => {
          const IS_ALL_DAY_A = a.isAllDay || a.startDay !== a.endDay;
          const IS_ALL_DAY_B = b.isAllDay || b.startDay !== b.endDay;
          return (IS_ALL_DAY_B - IS_ALL_DAY_A) || (a.startTime - b.startTime);
        }),
      }))
      .filter(group => group.events.length);
  });

  return {
    agendaGroups,
  };
}
