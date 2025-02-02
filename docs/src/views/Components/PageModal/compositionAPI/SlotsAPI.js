export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "modalHeader",
      description: "_A_MODAL_SLOTS_MODAL_HEADER_DESCRIPTION_",
    },
    {
      name: "modalBody",
      description: "_A_MODAL_SLOTS_MODAL_BODY_DESCRIPTION_",
    },
    {
      name: "modalFooterPrepend",
      description: "_A_MODAL_SLOTS_MODAL_FOOTER_PREPEND_DESCRIPTION_",
    },
    {
      name: "modalFooterAppend",
      description: "_A_MODAL_SLOTS_MODAL_FOOTER_APPEND_DESCRIPTION_",
    },
  ];

  return {
    dataSlots,
  };
}
