export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "accordionButton",
      description: "_A_ACCORDION_SLOTS_ACCORDION_BUTTON_DESCRIPTION_",
    },
    {
      name: "accordionContent",
      description: "_A_ACCORDION_SLOTS_ACCORDION_CONTENT_DESCRIPTION_",
    },
    {
      name: "[item.slotButton]",
      description: "_A_ACCORDION_SLOTS_SLOT_BUTTON_DESCRIPTION_",
    },
    {
      name: "[item.slotContent]",
      description: "_A_ACCORDION_SLOTS_SLOT_CONTENT_DESCRIPTION_",
    },
  ];

  return {
    dataSlots,
  };
}
