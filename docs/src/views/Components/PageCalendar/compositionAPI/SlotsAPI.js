export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "day",
      description: "_A_CALENDAR_SLOT_DAY_",
    },
    {
      name: "event",
      description: "_A_CALENDAR_SLOT_EVENT_",
    },
    {
      name: "header",
      description: "_A_CALENDAR_SLOT_HEADER_",
    },
  ];

  return {
    dataSlots,
  };
}
