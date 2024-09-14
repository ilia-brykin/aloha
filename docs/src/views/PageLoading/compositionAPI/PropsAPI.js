export default function PropsAPI() {
  const dataProps = [
    {
      name: "align",
      description: "_A_CLOAK_PROPS_ALIGN_DESCRIPTION_",
      type: "String",
      default: "center",
      required: false,
    },
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
      name: "is-loading",
      description: "_A_LOADING_PROPS_IS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "size",
      description: "_A_CLOAK_PROPS_SIZE_DESCRIPTION_",
      type: "String / Number",
      default: "6",
      required: false,
    },
    {
      name: "spinner-class",
      description: "_A_CLOAK_PROPS_SPINNER_CLASS_DESCRIPTION_",
      type: "String / Number",
      default: undefined,
      required: false,
    },
    {
      name: "spinner-safe-html",
      description: "_A_SPINNER_PROPS_SAFE_HTML_DESCRIPTION_",
      type: "String",
      default: "",
      required: false,
    },
    {
      name: "spinner-tag",
      description: "_A_SPINNER_PROPS_TAG_DESCRIPTION_",
      type: "String",
      default: "span",
      required: false,
    },
    {
      name: "tag",
      description: "_A_CLOAK_PROPS_TAG_DESCRIPTION_",
      type: "String",
      default: "div",
      required: false,
    },
    {
      name: "text",
      description: "_A_CLOAK_PROPS_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_CLOAK_LOADING_",
      required: false,
    },
    {
      name: "text-align",
      description: "_A_CLOAK_PROPS_TEXT_ALIGN_DESCRIPTION_",
      type: "String",
      default: "right",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
