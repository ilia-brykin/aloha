export default function EventsAPI() {
  const dataEvents = [
    {
      name: "update:model-value",
      description: "_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "finish",
      description: "_A_INPUT_OTP_EVENTS_FINISH_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "focus",
      description: "_A_INPUT_OTP_EVENTS_FOCUS_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "blur",
      description: "_A_INPUT_OTP_EVENTS_BLUR_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
