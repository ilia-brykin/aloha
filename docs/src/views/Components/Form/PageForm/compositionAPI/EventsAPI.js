export default function EventsAPI() {
  const dataEvents = [
    {
      name: "update:model-value",
      description: "_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "change",
      description: "_A_FORM_EVENTS_CHANGE_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
