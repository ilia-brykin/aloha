export default function ExposesAPI() {
  const dataExposes = [
    {
      name: "focusDay",
      description: "_A_CALENDAR_EXPOSES_FOCUS_DAY_",
      type: "Function",
    },
    {
      name: "goToDate",
      description: "_A_CALENDAR_EXPOSES_GO_TO_DATE_",
      type: "Function",
    },
    {
      name: "goToNextMonth",
      description: "_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_",
      type: "Function",
    },
    {
      name: "goToPreviousMonth",
      description: "_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_",
      type: "Function",
    },
    {
      name: "goToToday",
      description: "_A_CALENDAR_EXPOSES_GO_TO_TODAY_",
      type: "Function",
    },
  ];

  return {
    dataExposes,
  };
}
