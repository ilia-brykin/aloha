export default function PropsAPI() {
  const dataProps = [
    {
      name: "always-translate",
      description: "_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "header-tag",
      description: "_A_EMPTY_STATE_PROPS_HEADER_TAG_DESCRIPTION_",
      type: "String",
      default: "\"p\"",
      required: false,
    },
    {
      name: "header-text",
      description: "_A_EMPTY_STATE_PROPS_HEADER_TEXT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "icon",
      description: "_A_EMPTY_STATE_PROPS_ICON_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "text",
      description: "_A_EMPTY_STATE_PROPS_TEXT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
  ];

  const dataSlots = [
    {
      name: "default",
      description: "_A_EMPTY_STATE_SLOTS_DEFAULT_DESCRIPTION_",
    },
    {
      name: "icon",
      description: "_A_EMPTY_STATE_SLOTS_ICON_DESCRIPTION_",
    },
  ];

  return {
    dataProps,
    dataSlots,
  };
}
