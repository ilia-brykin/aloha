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
      name: "target-id",
      description: "_A_SKIP_LINK_PROPS_TARGET_ID_DESCRIPTION_",
      type: "String",
      default: "\"main\"",
      required: false,
    },
    {
      name: "text",
      description: "_A_SKIP_LINK_PROPS_TEXT_DESCRIPTION_",
      type: "String",
      default: "\"_A_SKIP_LINK_TEXT_\"",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
