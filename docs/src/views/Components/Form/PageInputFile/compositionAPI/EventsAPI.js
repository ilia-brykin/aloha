export default function EventsAPI() {
  const dataEvents = [
    {
      name: "update:model-value",
      description: "_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "reject",
      description: "_A_INPUT_FILE_EVENTS_REJECT_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "remove",
      description: "_A_INPUT_FILE_EVENTS_REMOVE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "focus",
      description: "_A_INPUT_FILE_EVENTS_FOCUS_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "blur",
      description: "_A_INPUT_FILE_EVENTS_BLUR_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
