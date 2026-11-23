export default function ExposesAPI() {
  const dataExposes = [
    {
      name: "changeView",
      description: "_A_CALENDAR_EXPOSES_CHANGE_VIEW_",
      type: "Function",
    },
    {
      name: "closePopover",
      description: "_A_CALENDAR_EXPOSES_CLOSE_POPOVER_",
      type: "Function",
    },
    {
      name: "downloadIcs",
      description: "_A_CALENDAR_EXPOSES_DOWNLOAD_ICS_",
      type: "Function",
    },
    {
      name: "focusDay",
      description: "_A_CALENDAR_EXPOSES_FOCUS_DAY_",
      type: "Function",
    },
    {
      name: "getIcs",
      description: "_A_CALENDAR_EXPOSES_GET_ICS_",
      type: "Function",
    },
    {
      name: "goToDate",
      description: "_A_CALENDAR_EXPOSES_GO_TO_DATE_",
      type: "Function",
    },
    {
      name: "goToNext",
      description: "_A_CALENDAR_EXPOSES_GO_TO_NEXT_",
      type: "Function",
    },
    {
      name: "goToNextMonth",
      description: "_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_",
      type: "Function",
    },
    {
      name: "goToPrevious",
      description: "_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_",
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
