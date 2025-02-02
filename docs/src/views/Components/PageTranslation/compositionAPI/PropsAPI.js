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
      description: "_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "html",
      description: "_A_TRANSLATION_PROPS_HTML_DESCRIPTION_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "placeholder",
      description: "_A_TRANSLATION_PROPS_PLACEHOLDER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "safe-html",
      description: "_A_TRANSLATION_PROPS_SAFE_HTML_DESCRIPTION_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "tag",
      description: "_A_TRANSLATION_PROPS_TAG_DESCRIPTION_",
      type: "String",
      default: "div",
      required: false,
    },
    {
      name: "text",
      description: "_A_TRANSLATION_PROPS_TEXT_DESCRIPTION_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "text-after",
      description: "_A_TRANSLATION_PROPS_TEXT_AFTER_DESCRIPTION_",
      type: "String / Number / Object",
      default: "",
      required: false,
    },
    {
      name: "text-before",
      description: "_A_TRANSLATION_PROPS_TEXT_BEFORE_DESCRIPTION_",
      type: "String / Number / Object",
      default: "",
      required: false,
    },
    {
      name: "title",
      description: "_A_TRANSLATION_PROPS_TITLE_DESCRIPTION_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
