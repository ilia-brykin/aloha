// shared descriptions of the form elements (_A_UI_PROPS_*), own ones only for the combobox
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
  ["id", "_A_UI_PROPS_ID_DESCRIPTION_", "String / Number", "uniqueId(\"a_combobox_\")"],
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
  ["model-undefined", "_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_", "String / Number / Object / Array / Boolean", "\"\""],
  ["placeholder", "_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_", "String", undefined],
  ["readonly", "_A_UI_PROPS_READONLY_DESCRIPTION_", "Boolean", undefined],
  ["readonly-default", "_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_", "String", "\"\""],
  ["required", "_A_UI_PROPS_REQUIRED_DESCRIPTION_", "Boolean", "false"],
];

const OWN = [
  ["data", "_A_COMBOBOX_PROPS_DATA_DESCRIPTION_", "Array", "[]"],
  ["is-clear-button", "_A_COMBOBOX_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_", "Boolean", "true"],
  ["is-data-simple-array", "_A_COMBOBOX_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_", "Boolean", undefined],
  ["key-id", "_A_COMBOBOX_PROPS_KEY_ID_DESCRIPTION_", "String", "\"id\""],
  ["key-label", "_A_COMBOBOX_PROPS_KEY_LABEL_DESCRIPTION_", "String", "\"label\""],
  ["key-label-callback", "_A_COMBOBOX_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_", "Function", undefined],
  ["max-items", "_A_COMBOBOX_PROPS_MAX_ITEMS_DESCRIPTION_", "Number", "10"],
  ["min-length", "_A_COMBOBOX_PROPS_MIN_LENGTH_DESCRIPTION_", "Number", "1"],
  ["model-value", "_A_COMBOBOX_PROPS_MODEL_VALUE_DESCRIPTION_", "String / Number", undefined],
  ["open-on-focus", "_A_COMBOBOX_PROPS_OPEN_ON_FOCUS_DESCRIPTION_", "Boolean", "false"],
  ["search-api-key", "_A_COMBOBOX_PROPS_SEARCH_API_KEY_DESCRIPTION_", "String", "\"search\""],
  ["search-timeout", "_A_COMBOBOX_PROPS_SEARCH_TIMEOUT_DESCRIPTION_", "Number", "300"],
  ["translate-data", "_A_COMBOBOX_PROPS_TRANSLATE_DATA_DESCRIPTION_", "Boolean", undefined],
  ["type", "_A_COMBOBOX_PROPS_TYPE_DESCRIPTION_", "String", "\"combobox\""],
  ["url", "_A_COMBOBOX_PROPS_URL_DESCRIPTION_", "String", undefined],
  ["url-params", "_A_COMBOBOX_PROPS_URL_PARAMS_DESCRIPTION_", "Object", undefined],
  ["url-template-data", "_A_COMBOBOX_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_", "Object", "{}"],
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

  const dataEvents = [
    { name: "select", type: "Function", description: "_A_COMBOBOX_EVENTS_SELECT_DESCRIPTION_" },
    { name: "update:modelValue", type: "Function", description: "_A_COMBOBOX_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_" },
  ];

  const dataTranslate = [
    "_A_COMBOBOX_LOADING_",
    "_A_COMBOBOX_NO_RESULTS_",
    "_A_COMBOBOX_RESULTS_{{count}}_",
  ];

  return {
    dataEvents,
    dataProps,
    dataTranslate,
  };
}
