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
      name: "api-save-id",
      description: "_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",
      type: "String",
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
      name: "class-button-group-default",
      description: "_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",
      type: "String / Object / Array",
      default: "a_btn a_btn_outline_primary",
      required: false,
    },
    {
      name: "class-data-parent",
      description: "_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
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
      name: "data",
      description: "_A_UI_PROPS_DATA_DESCRIPTION_",
      type: "Array",
      default: undefined,
      required: false,
    },
    {
      name: "data-extra",
      description: "_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",
      type: "Array",
      default: "() => []",
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
      default: "() => uniqueId(\"a_radio_\")",
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
      name: "inline",
      description: "_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "is-button-group",
      description: "_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",
      type: "Boolean",
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
      name: "is-data-simple-array",
      description: "_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",
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
      name: "is-model-array",
      description: "_A_RADIO_PROPS_IS_MODEL_ARRAY_DESCRIPTION_",
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
      name: "is-width-auto",
      description: "_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "key-disabled",
      description: "_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-group",
      description: "_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",
      type: "String / Number / Array",
      default: undefined,
      required: false,
    },
    {
      name: "key-group-label-callback",
      description: "_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",
      type: "Function",
      default: undefined,
      required: false,
    },
    {
      name: "key-id",
      description: "_A_UI_PROPS_KEY_ID_DESCRIPTION_",
      type: "String",
      default: "value",
      required: false,
    },
    {
      name: "key-label",
      description: "_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",
      type: "String",
      default: "label",
      required: false,
    },
    {
      name: "key-label-callback",
      description: "_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",
      type: "Function",
      default: undefined,
      required: false,
    },
    {
      name: "key-title",
      description: "_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-title-callback",
      description: "_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",
      type: "Function",
      default: undefined,
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
      name: "loading",
      description: "_A_UI_PROPS_LOADING_DESCRIPTION_",
      type: "Boolean",
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
      type: "Array",
      default: undefined,
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
      name: "search",
      description: "_A_UI_PROPS_SEARCH_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "search-api",
      description: "_A_UI_PROPS_SEARCH_API_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "search-api-key",
      description: "_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "search-outside",
      description: "_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "search-timeout",
      description: "_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "slot-append-name",
      description: "_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",
      type: "String",
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
    {
      name: "sort-order",
      description: "_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "sort-order-group",
      description: "_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "translate-data",
      description: "_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "url",
      description: "_A_UI_PROPS_URL_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "url-params",
      description: "_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
