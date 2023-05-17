export default function SlotsAPI() {
  const dataSlots = [
    {
      name: "linkAppend",
      description: "_A_LINK_SLOT_LINK_APPEND_DESCRIPTION_",
    },
    {
      name: "linkPrepend",
      description: "_A_LINK_SLOT_LINK_PREPEND_DESCRIPTION_",
    },
    {
      name: "linkTitle",
      description: "_A_LINK_SLOT_LINK_TITLE_DESCRIPTION_",
    },
    {
      name: "default",
      description: "_A_LINK_SLOT_DEFAULT_DESCRIPTION_",
    },
  ];

  return {
    dataSlots,
  };
}
