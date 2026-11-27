export default function EventsAPI() {
  const dataEvents = [
    {
      name: "toggle",
      description: "_A_ACCORDION_EVENTS_TOGGLE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "update:modelValue",
      description: "_A_ACCORDION_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
