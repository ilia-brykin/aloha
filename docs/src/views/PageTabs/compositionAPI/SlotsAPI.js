export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "content",
      description: "_A_TABS_SLOTS_CONTENT_DESCRIPTION_",
    },
    {
      name: "slotContent",
      description: "_A_TABS_SLOTS_SLOT_CONTENT_DESCRIPTION_",
    },
    {
      name: "slotTab",
      description: "_A_TABS_SLOTS_SLOT_TAB_DESCRIPTION_",
    },
    {
      name: "tab",
      description: "_A_TABS_SLOTS_TAB_DESCRIPTION_",
    },
  ];

  return {
    dataSlots,
  };
}
