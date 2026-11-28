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
  ["is-close-by-button-invisible-in-viewport", "_A_GLOBAL_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_", "Boolean", "true"],
  ["validator", "_A_INPUT_TAGS_PROPS_VALIDATOR_DESCRIPTION_", "Function", undefined],
  ["url-retrieve", "_A_INPUT_TAGS_PROPS_URL_RETRIEVE_DESCRIPTION_", "String", undefined],
  ["transform", "_A_INPUT_TAGS_PROPS_TRANSFORM_DESCRIPTION_", "Function", undefined],
  ["tag-class", "_A_INPUT_TAGS_PROPS_TAG_CLASS_DESCRIPTION_", "String / Object / Array / Function", undefined],
  ["size", "_A_INPUT_TAGS_PROPS_SIZE_DESCRIPTION_", "String", "\"medium\""],
  ["model-key", "_A_INPUT_TAGS_PROPS_MODEL_KEY_DESCRIPTION_", "String", undefined],
  ["maxlength", "_A_INPUT_TAGS_PROPS_MAXLENGTH_DESCRIPTION_", "Number", undefined],
  ["label-position", "_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_", "String", undefined],
  ["is-sortable", "_A_INPUT_TAGS_PROPS_IS_SORTABLE_DESCRIPTION_", "Boolean", "false"],
  ["is-label-float", "_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_", "Boolean", undefined],
  ["is-clear-button", "_A_INPUT_TAGS_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_", "Boolean", "true"],
  ["icon-prepend", "_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_", "String", undefined],
  ["icon-append", "_A_INPUT_TAGS_PROPS_ICON_APPEND_DESCRIPTION_", "String", undefined],
  ["error-icon", "_A_UI_PROPS_ERROR_ICON_DESCRIPTION_", "String / Object", undefined],
  ["add-on-blur", "_A_INPUT_TAGS_PROPS_ADD_ON_BLUR_DESCRIPTION_", "Boolean", "true"],
  ["allow-duplicates", "_A_INPUT_TAGS_PROPS_ALLOW_DUPLICATES_DESCRIPTION_", "Boolean", "false"],
  ["data", "_A_COMBOBOX_PROPS_DATA_DESCRIPTION_", "Array", "[]"],
  ["filter-callback", "_A_COMBOBOX_PROPS_FILTER_CALLBACK_DESCRIPTION_", "Function", undefined],
  ["filter-mode", "_A_COMBOBOX_PROPS_FILTER_MODE_DESCRIPTION_", "String", "\"contains\""],
  ["ignore-diacritics", "_A_COMBOBOX_PROPS_IGNORE_DIACRITICS_DESCRIPTION_", "Boolean", "true"],
  ["in-body", "_A_COMBOBOX_PROPS_IN_BODY_DESCRIPTION_", "Boolean", "true"],
  ["inline-autocomplete", "_A_COMBOBOX_PROPS_INLINE_AUTOCOMPLETE_DESCRIPTION_", "Boolean", "false"],
  ["is-add-all", "_A_INPUT_TAGS_PROPS_IS_ADD_ALL_DESCRIPTION_", "Boolean", "false"],
  ["is-bottom-sheet-on-mobile", "_A_COMBOBOX_PROPS_IS_BOTTOM_SHEET_ON_MOBILE_DESCRIPTION_", "Boolean", "true"],
  ["is-data-simple-array", "_A_COMBOBOX_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_", "Boolean", undefined],
  ["is-only-from-list", "_A_INPUT_TAGS_PROPS_IS_ONLY_FROM_LIST_DESCRIPTION_", "Boolean", undefined],
  ["is-remove-all", "_A_INPUT_TAGS_PROPS_IS_REMOVE_ALL_DESCRIPTION_", "Boolean", "false"],
  ["key-disabled", "_A_COMBOBOX_PROPS_KEY_DISABLED_DESCRIPTION_", "String", undefined],
  ["key-group", "_A_COMBOBOX_PROPS_KEY_GROUP_DESCRIPTION_", "String", undefined],
  ["key-id", "_A_COMBOBOX_PROPS_KEY_ID_DESCRIPTION_", "String", "\"id\""],
  ["key-label", "_A_COMBOBOX_PROPS_KEY_LABEL_DESCRIPTION_", "String", "\"label\""],
  ["key-label-callback", "_A_COMBOBOX_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_", "Function", undefined],
  ["max-items", "_A_COMBOBOX_PROPS_MAX_ITEMS_DESCRIPTION_", "Number", "10"],
  ["max-tags", "_A_INPUT_TAGS_PROPS_MAX_TAGS_DESCRIPTION_", "Number", undefined],
  ["max-visible-tags", "_A_INPUT_TAGS_PROPS_MAX_VISIBLE_TAGS_DESCRIPTION_", "Number", undefined],
  ["min-length", "_A_COMBOBOX_PROPS_MIN_LENGTH_DESCRIPTION_", "Number", "1"],
  ["open-on-focus", "_A_COMBOBOX_PROPS_OPEN_ON_FOCUS_DESCRIPTION_", "Boolean", "false"],
  ["popper-container-id", "_A_COMBOBOX_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_", "String", "\"a_tooltip_container\""],
  ["search-api-key", "_A_COMBOBOX_PROPS_SEARCH_API_KEY_DESCRIPTION_", "String", "\"search\""],
  ["search-timeout", "_A_COMBOBOX_PROPS_SEARCH_TIMEOUT_DESCRIPTION_", "Number", "300"],
  ["separators", "_A_INPUT_TAGS_PROPS_SEPARATORS_DESCRIPTION_", "Array", "[\"Enter\", \",\"]"],
  ["texts", "_A_INPUT_TAGS_PROPS_TEXTS_DESCRIPTION_", "Object", undefined],
  ["translate-data", "_A_COMBOBOX_PROPS_TRANSLATE_DATA_DESCRIPTION_", "Boolean", undefined],
  ["type", "_A_INPUT_TAGS_PROPS_TYPE_DESCRIPTION_", "String", "\"tags\""],
  ["url", "_A_COMBOBOX_PROPS_URL_DESCRIPTION_", "String", undefined],
  ["url-params", "_A_COMBOBOX_PROPS_URL_PARAMS_DESCRIPTION_", "Object", undefined],
  ["url-template-data", "_A_COMBOBOX_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_", "Object", "{}"],
  ["z-index", "_A_COMBOBOX_PROPS_Z_INDEX_DESCRIPTION_", "Number / String", undefined],
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

  const dataEvents = [
    { name: "select", type: "Function", description: "_A_COMBOBOX_EVENTS_SELECT_DESCRIPTION_" },
    { name: "update:modelValue", type: "Function", description: "_A_INPUT_TAGS_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_" },
  ];

  const dataSlots = [
    { name: "option", description: "_A_COMBOBOX_SLOTS_OPTION_DESCRIPTION_" },
  ];

  const dataTranslate = [
    "_A_COMBOBOX_LOADING_",
    "_A_COMBOBOX_NO_RESULTS_",
    "_A_COMBOBOX_RESULTS_{{count}}_",
    "_A_INPUT_TAGS_ADDED_",
    "_A_INPUT_TAGS_ADD_ALL_",
    "_A_INPUT_TAGS_COUNTER_",
    "_A_INPUT_TAGS_DUPLICATE_",
    "_A_INPUT_TAGS_EDITING_",
    "_A_INPUT_TAGS_HINT_",
    "_A_INPUT_TAGS_HINT_ADD_ALL_",
    "_A_INPUT_TAGS_HINT_SORTABLE_",
    "_A_INPUT_TAGS_INVALID_",
    "_A_INPUT_TAGS_MAXLENGTH_",
    "_A_INPUT_TAGS_MAX_",
    "_A_INPUT_TAGS_MOVED_",
    "_A_INPUT_TAGS_ONLY_FROM_LIST_",
    "_A_INPUT_TAGS_REMOVED_",
    "_A_INPUT_TAGS_REMOVED_ALL_",
    "_A_INPUT_TAGS_REMOVE_",
    "_A_INPUT_TAGS_REMOVE_ALL_",
    "_A_INPUT_TAGS_SHOW_LESS_",
    "_A_INPUT_TAGS_SHOW_MORE_",
  ];

  return {
    dataEvents,
    dataMethods,
    dataProps,
    dataSlots,
    dataTranslate,
  };
}
