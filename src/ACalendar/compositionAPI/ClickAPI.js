export default function ClickAPI(props, {
  emit,
  getEventsForDay = () => [],
  goToDate = () => {},
}) {
  const selectDay = ({ day }) => {
    emit("update:modelValue", day.key);
    if (!day.isCurrentMonth) {
      goToDate(day.key);
    }
  };

  const onClickDay = ({ day, $event }) => {
    selectDay({ day });
    emit("day-click", {
      date: day.key,
      events: getEventsForDay(day.key).map(event => event.item),
      $event,
    });
  };

  const onClickEvent = ({ event, $event }) => {
    emit("event-click", {
      event: event.item,
      start: event.start,
      end: event.end,
      $event,
    });
  };

  const onClickMore = ({ day, $event }) => {
    selectDay({ day });
    emit("more-click", {
      date: day.key,
      events: getEventsForDay(day.key).map(event => event.item),
      $event,
    });
  };

  return {
    onClickDay,
    onClickEvent,
    onClickMore,
  };
}
