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
      name: "aria-label",
      description: "_A_SPINNER_PROPS_ARIA_LABEL_DESCRIPTION_",
      type: "String / Number / Object",
      default: "_LOADING_",
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
      name: "safe-html",
      description: "_A_SPINNER_PROPS_SAFE_HTML_DESCRIPTION_",
      type: "String",
      default: "",
      required: false,
    },
    {
      name: "tag",
      description: "_A_SPINNER_PROPS_TAG_DESCRIPTION_",
      type: "String",
      default: "span",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
