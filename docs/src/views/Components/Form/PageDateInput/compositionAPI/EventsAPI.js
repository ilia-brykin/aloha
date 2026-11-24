export default function EventsAPI() {
  const dataEvents = [
    {
      name: "close",
      description: "_A_DATE_INPUT_EVENTS_CLOSE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "open",
      description: "_A_DATE_INPUT_EVENTS_OPEN_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "update:modelValue",
      description: "_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
