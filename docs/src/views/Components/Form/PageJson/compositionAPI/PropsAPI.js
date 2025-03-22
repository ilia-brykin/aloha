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
      name: "change",
      description: "_A_UI_PROPS_CHANGE_DESCRIPTION_",
      type: "Function",
      default: "() => {}",
      required: false,
    },
    {
      name: "disabled",
      description: "_A_UI_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "dependencies",
      description: "_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",
      type: "Array / Object",
      default: undefined,
      required: false,
    },
    {
      name: "errors",
      description: "_A_UI_PROPS_ERRORS_DESCRIPTION_",
      type: "String / Array",
      default: undefined,
      required: false,
    },
    {
      name: "exclude-render-attributes",
      description: "_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",
      type: "Array",
      default: "() => []",
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
      name: "height-css",
      description: "_A_JSON_PROPS_HEIGHT_CSS_DESCRIPTION_",
      type: "String",
      default: "400px;",
      required: false,
    },
    {
      name: "help-text",
      description: "_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "html-id",
      description: "_A_UI_PROPS_HTML_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_UI_PROPS_ID_DESCRIPTION_",
      type: "String / Number",
      default: "() => uniqueId(\"a_json_\")",
      required: false,
    },
    {
      name: "id-prefix",
      description: "_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "input-attributes",
      description: "_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "input-class",
      description: "_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "is-hide",
      description: "_A_UI_PROPS_IS_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "is-render",
      description: "_A_UI_PROPS_IS_RENDER_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "label",
      description: "_A_UI_PROPS_LABEL_DESCRIPTION_",
      type: "String / Number",
      default: undefined,
      required: false,
    },
    {
      name: "label-class",
      description: "_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "label-screen-reader",
      description: "_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",
      type: "String / Number",
      default: undefined,
      required: false,
    },
    {
      name: "model-dependencies",
      description: "_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "model-undefined",
      description: "_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",
      type: "String / Number / Object / Array / Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "model-value",
      description: "_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",
      type: "String / Number / Object / Array / Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "readonly",
      description: "_A_UI_PROPS_READONLY_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "readonly-default",
      description: "_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",
      type: "String",
      default: "",
      required: false,
    },
    {
      name: "required",
      description: "_A_UI_PROPS_REQUIRED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
