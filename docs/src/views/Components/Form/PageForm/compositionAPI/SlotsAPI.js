export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "formPrepend",
      description: "_A_FORM_SLOTS_FORM_PREPEND_DESCRIPTION_",
    },
    {
      name: "formPrependAfterRequired",
      description: "_A_FORM_SLOTS_FORM_PREPEND_AFTER_REQUIRED_DESCRIPTION_",
    },
    {
      name: "formDataPrepend",
      description: "_A_FORM_SLOTS_FORM_DATA_PREPEND_DESCRIPTION_",
    },
    {
      name: "formDataAppend",
      description: "_A_FORM_SLOTS_FORM_DATA_APPEND_DESCRIPTION_",
    },
    {
      name: "formAppend",
      description: "_A_FORM_SLOTS_FORM_APPEND_DESCRIPTION_",
    },
  ];

  return {
    dataSlots,
  };
}
