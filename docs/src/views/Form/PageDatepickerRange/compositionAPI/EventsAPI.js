export default function EventsAPI() {
  const dataEvents = [
    {
      name: "input",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_EMIT_INPUT_",
      type: "Function",
    },
    {
      name: "change",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_EMIT_CHANGE_",
      type: "Function",
    },
    {
      name: "focus",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_EMIT_FOCUS_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
