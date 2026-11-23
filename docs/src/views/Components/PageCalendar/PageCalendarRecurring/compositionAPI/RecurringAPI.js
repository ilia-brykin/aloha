import {
  ref,
} from "vue";

export default function RecurringAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const lastClick = ref("");

  // The calendar sends the item of the series and the clicked occurrence
  const onEventClick = ({ event, occurrence }) => {
    lastClick.value = `${ event.label }: ${ occurrence ? occurrence.date : "-" }`;
  };

  return {
    events,
    lastClick,
    onEventClick,
  };
}
