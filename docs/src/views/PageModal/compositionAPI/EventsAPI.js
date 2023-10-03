export default function EventsAPI() {
  const dataEvents = [
    {
      name: "go-step-back",
      description: "_A_WIZARD_EVENTS_GO_STEP_BACK_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "go-step-forward",
      description: "_A_WIZARD_EVENTS_GO_STEP_FORWARD_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
