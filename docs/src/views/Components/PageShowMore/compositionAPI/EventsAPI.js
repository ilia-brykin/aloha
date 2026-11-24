export default function EventsAPI() {
  const dataEvents = [
    {
      name: "toggle",
      description: "_A_SHOW_MORE_TOGGLE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "update:modelValue",
      description: "_A_SHOW_MORE_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
