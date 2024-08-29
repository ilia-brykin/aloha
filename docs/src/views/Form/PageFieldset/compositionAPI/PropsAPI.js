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
      name: "children",
      description: "_A_FIELDSET_PROPS_CHILDREN_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "class-columns",
      description: "_A_FIELDSET_PROPS_CLASS_COLUMNS_DESCRIPTION_",
      type: "String / Object",
      default: "a_columns a_columns_count_12 a_columns_gab_2",
      required: false,
    },
    {
      name: "class-fieldset",
      description: "_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "collapsible",
      description: "_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",
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
      name: "disabled",
      description: "_A_UI_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
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
      name: "errors-all",
      description: "_A_FIELDSET_PROPS_ERRORS_ALL_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
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
      name: "has-border",
      description: "_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",
      type: "Boolean",
      default: true,
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
      default: "() => uniqueId(\"a_fieldset_\")",
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
      name: "is-collapsed",
      description: "_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",
      type: "Boolean",
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
      name: "model-value",
      description: "_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "required",
      description: "_A_UI_PROPS_REQUIRED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "slot-name",
      description: "_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
