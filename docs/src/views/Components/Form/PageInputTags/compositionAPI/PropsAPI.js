// shared descriptions of the form elements (_A_UI_PROPS_*), own ones only for the tags
const SHARED = [
  ["always-translate", "_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_", "Boolean", undefined],
  ["change", "_A_UI_PROPS_CHANGE_DESCRIPTION_", "Function", "() => {}"],
  ["dependencies", "_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_", "Array / Object", undefined],
  ["disabled", "_A_UI_PROPS_DISABLED_DESCRIPTION_", "Boolean", undefined],
  ["errors", "_A_UI_PROPS_ERRORS_DESCRIPTION_", "String / Array", undefined],
  ["exclude-render-attributes", "_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_", "Array", "[]"],
  ["extra", "_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_", "Object", undefined],
  ["help-text", "_A_UI_PROPS_HELP_TEXT_DESCRIPTION_", "String", undefined],
  ["html-id", "_A_UI_PROPS_HTML_ID_DESCRIPTION_", "String", undefined],
  ["id", "_A_UI_PROPS_ID_DESCRIPTION_", "String / Number", "uniqueId(\"a_input_tags_\")"],
  ["id-prefix", "_A_UI_PROPS_ID_PREFIX_DESCRIPTION_", "String", undefined],
  ["input-attributes", "_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_", "Object", "{}"],
  ["input-class", "_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_", "String / Object", undefined],
  ["is-hide", "_A_UI_PROPS_IS_HIDE_DESCRIPTION_", "Boolean", undefined],
  ["is-render", "_A_UI_PROPS_IS_RENDER_DESCRIPTION_", "Boolean", "true"],
  ["label", "_A_UI_PROPS_LABEL_DESCRIPTION_", "String / Number", undefined],
  ["label-class", "_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_", "String / Object", undefined],
  ["label-description", "_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_", "String", undefined],
  ["label-screen-reader", "_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_", "String / Number", undefined],
  ["model-dependencies", "_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_", "Object", "{}"],
  ["model-undefined", "_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_", "Array / Object / String", "[]"],
  ["model-value", "_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_", "Array", undefined],
  ["placeholder", "_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_", "String", undefined],
  ["readonly", "_A_UI_PROPS_READONLY_DESCRIPTION_", "Boolean", undefined],
  ["readonly-default", "_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_", "String", "\"\""],
  ["required", "_A_UI_PROPS_REQUIRED_DESCRIPTION_", "Boolean", "false"],
];

const OWN = [
  ["allow-duplicates", "_A_INPUT_TAGS_PROPS_ALLOW_DUPLICATES_DESCRIPTION_", "Boolean", "false"],
  ["max-tags", "_A_INPUT_TAGS_PROPS_MAX_TAGS_DESCRIPTION_", "Number", undefined],
  ["separators", "_A_INPUT_TAGS_PROPS_SEPARATORS_DESCRIPTION_", "Array", "[\"Enter\", \",\"]"],
  ["type", "_A_INPUT_TAGS_PROPS_TYPE_DESCRIPTION_", "String", "\"tags\""],
];

export default function PropsAPI() {
  const dataProps = [...SHARED, ...OWN]
    .map(([name, description, type, defaultValue]) => ({
      name,
      description,
      type,
      default: defaultValue,
      required: false,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const dataMethods = [
    {
      name: "focus",
      description: "_A_INPUT_TAGS_METHODS_FOCUS_DESCRIPTION_",
    },
  ];

  const dataTranslate = [
    "_A_INPUT_TAGS_ADDED_",
    "_A_INPUT_TAGS_DUPLICATE_",
    "_A_INPUT_TAGS_HINT_",
    "_A_INPUT_TAGS_MAX_",
    "_A_INPUT_TAGS_REMOVE_",
    "_A_INPUT_TAGS_REMOVED_",
  ];

  return {
    dataMethods,
    dataProps,
    dataTranslate,
  };
}
