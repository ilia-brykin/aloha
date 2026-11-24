// shared descriptions of the form elements (_A_UI_PROPS_*), own ones only for the date input
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
  ["id", "_A_UI_PROPS_ID_DESCRIPTION_", "String / Number", "uniqueId(\"a_date_input_\")"],
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
  ["model-undefined", "_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_", "Array / Object / String", "null"],
  ["model-value", "_A_DATE_INPUT_PROPS_MODEL_VALUE_DESCRIPTION_", "String / Array / Number / Date", undefined],
  ["placeholder", "_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_", "String", undefined],
  ["readonly", "_A_UI_PROPS_READONLY_DESCRIPTION_", "Boolean", undefined],
  ["readonly-default", "_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_", "String", "\"\""],
  ["required", "_A_UI_PROPS_REQUIRED_DESCRIPTION_", "Boolean", "false"],
];

const OWN = [
  ["is-label-float", "_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_", "Boolean", undefined],
  ["label-position", "_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_", "String", undefined],
  ["max-days", "_A_DATE_INPUT_PROPS_MAX_DAYS_DESCRIPTION_", "Number", undefined],
  ["max-time", "_A_DATE_INPUT_PROPS_MAX_TIME_DESCRIPTION_", "String", undefined],
  ["min-days", "_A_DATE_INPUT_PROPS_MIN_DAYS_DESCRIPTION_", "Number", undefined],
  ["min-time", "_A_DATE_INPUT_PROPS_MIN_TIME_DESCRIPTION_", "String", undefined],
  ["minute-step", "_A_DATE_INPUT_PROPS_MINUTE_STEP_DESCRIPTION_", "Number", "1"],
  ["model-format", "_A_DATE_INPUT_PROPS_MODEL_FORMAT_DESCRIPTION_", "String", "\"iso\""],
  ["months", "_A_DATE_INPUT_PROPS_MONTHS_DESCRIPTION_", "Number", "1"],
  ["show-today", "_A_DATE_INPUT_PROPS_SHOW_TODAY_DESCRIPTION_", "Boolean", "false"],
  ["show-week-numbers", "_A_DATE_INPUT_PROPS_SHOW_WEEK_NUMBERS_DESCRIPTION_", "Boolean", "false"],
  ["utc", "_A_DATE_INPUT_PROPS_UTC_DESCRIPTION_", "Boolean", "false"],
  ["with-seconds", "_A_DATE_INPUT_PROPS_WITH_SECONDS_DESCRIPTION_", "Boolean", "false"],
  ["clearable", "_A_DATE_INPUT_PROPS_CLEARABLE_DESCRIPTION_", "Boolean", "false"],
  ["default-time", "_A_DATE_INPUT_PROPS_DEFAULT_TIME_DESCRIPTION_", "String / Array", undefined],
  ["first-day-of-week", "_A_DATE_INPUT_PROPS_FIRST_DAY_OF_WEEK_DESCRIPTION_", "Number", "1"],
  ["is-date-disabled", "_A_DATE_INPUT_PROPS_IS_DATE_DISABLED_DESCRIPTION_", "Function", undefined],
  ["locale", "_A_DATE_INPUT_PROPS_LOCALE_DESCRIPTION_", "String", undefined],
  ["max", "_A_DATE_INPUT_PROPS_MAX_DESCRIPTION_", "String", undefined],
  ["min", "_A_DATE_INPUT_PROPS_MIN_DESCRIPTION_", "String", undefined],
  ["mode", "_A_DATE_INPUT_PROPS_MODE_DESCRIPTION_", "String", "\"date\""],
  ["range", "_A_DATE_INPUT_PROPS_RANGE_DESCRIPTION_", "Boolean", "false"],
  ["shortcuts", "_A_DATE_INPUT_PROPS_SHORTCUTS_DESCRIPTION_", "Array", "[]"],
  ["type", "_A_DATE_INPUT_PROPS_TYPE_DESCRIPTION_", "String", "\"dateInput\""],
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
      name: "close",
      description: "_A_DATE_INPUT_METHODS_CLOSE_DESCRIPTION_",
    },
    {
      name: "focus",
      description: "_A_DATE_INPUT_METHODS_FOCUS_DESCRIPTION_",
    },
    {
      name: "open",
      description: "_A_DATE_INPUT_METHODS_OPEN_DESCRIPTION_",
    },
  ];

  const dataTranslate = [
    "_A_DATE_INPUT_CHANGE_DATE_",
    "_A_DATE_INPUT_CHOOSE_DATE_",
    "_A_DATE_INPUT_CLOSE_",
    "_A_DATE_INPUT_DATE_",
    "_A_DATE_INPUT_DAY_LETTERS_",
    "_A_DATE_INPUT_END_DATE_",
    "_A_DATE_INPUT_END_TIME_",
    "_A_DATE_INPUT_ERROR_DATE_",
    "_A_DATE_INPUT_ERROR_DISABLED_",
    "_A_DATE_INPUT_ERROR_MAX_",
    "_A_DATE_INPUT_ERROR_MIN_",
    "_A_DATE_INPUT_ERROR_RANGE_",
    "_A_DATE_INPUT_ERROR_TIME_",
    "_A_DATE_INPUT_FORMAT_",
    "_A_DATE_INPUT_FROM_",
    "_A_DATE_INPUT_KEYBOARD_HINT_",
    "_A_DATE_INPUT_MONTH_LETTERS_",
    "_A_DATE_INPUT_NEXT_MONTH_",
    "_A_DATE_INPUT_NEXT_YEAR_",
    "_A_DATE_INPUT_PREV_MONTH_",
    "_A_DATE_INPUT_PREV_YEAR_",
    "_A_DATE_INPUT_START_DATE_",
    "_A_DATE_INPUT_START_TIME_",
    "_A_DATE_INPUT_TIME_",
    "_A_DATE_INPUT_TIME_LETTERS_",
    "_A_DATE_INPUT_TO_",
    "_A_DATE_INPUT_YEAR_LETTERS_",
  ];

  return {
    dataMethods,
    dataProps,
    dataTranslate,
  };
}
