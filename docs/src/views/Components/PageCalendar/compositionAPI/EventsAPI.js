export default function EventsAPI() {
  const dataEvents = [
    {
      name: "day-click",
      description: "_A_CALENDAR_EVENTS_DAY_CLICK_",
    },
    {
      name: "event-click",
      description: "_A_CALENDAR_EVENTS_EVENT_CLICK_",
    },
    {
      name: "more-click",
      description: "_A_CALENDAR_EVENTS_MORE_CLICK_",
    },
    {
      name: "range-change",
      description: "_A_CALENDAR_EVENTS_RANGE_CHANGE_",
    },
    {
      name: "update:modelValue",
      description: "_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_",
    },
  ];

  return {
    dataEvents,
  };
}
