export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "buttonAppend",
      description: "_A_BUTTON_SLOT_BUTTON_APPEND_DESCRIPTION_",
    },
    {
      name: "buttonPrepend",
      description: "_A_BUTTON_SLOT_BUTTON_PREPEND_DESCRIPTION_",
    },
    {
      name: "buttonTitle",
      description: "_A_BUTTON_SLOT_BUTTON_TITLE_DESCRIPTION_",
    },
    {
      name: "default",
      description: "_A_BUTTON_SLOT_DEFAULT_DESCRIPTION_",
    },
  ];

  return {
    dataSlots,
  };
}
