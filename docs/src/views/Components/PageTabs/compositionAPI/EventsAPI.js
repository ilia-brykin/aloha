export default function EventsAPI() {
  const dataEvents = [
    {
      name: "change",
      description: "_A_TABS_EVENTS_CHANGE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "update:activeTabId",
      description: "_A_TABS_EVENTS_UPDATE_ACTIVE_TAB_ID_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataEvents,
  };
}
