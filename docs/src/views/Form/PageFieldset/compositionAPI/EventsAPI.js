export default function EventsAPI() {
  const dataEvents = [
    {
      name: "update-data",
      description: "_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "toggle-collapse",
      description: "_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "update:model-value",
      description: "_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
