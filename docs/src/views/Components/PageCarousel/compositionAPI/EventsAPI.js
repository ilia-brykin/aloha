export default function EventsAPI() {
  const dataEvents = [
    {
      name: "change",
      description: "_A_CAROUSEL_EVENTS_CHANGE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "init",
      description: "_A_CAROUSEL_EVENTS_INIT_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "play",
      description: "_A_CAROUSEL_EVENTS_PLAY_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "stop",
      description: "_A_CAROUSEL_EVENTS_STOP_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "update:modelValue",
      description: "_A_CAROUSEL_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
