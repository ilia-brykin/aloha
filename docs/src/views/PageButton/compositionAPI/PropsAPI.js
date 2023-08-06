export default function PropsAPI() {
  const dataProps = [
    {
      name: "aria-disabled",
      description: "_A_BUTTON_PROPS_ARIA_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "aria-label",
      description: "_A_BUTTON_PROPS_ARIA_LABEL_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "attributes",
      description: "_A_BUTTON_PROPS_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "class",
      description: "_A_BUTTON_PROPS_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "disabled",
      description: "_A_BUTTON_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_BUTTON_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "html",
      description: "_A_BUTTON_PROPS_HTML_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "html-screen-reader",
      description: "_A_BUTTON_PROPS_HTML_SCREEN_READER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "icon-attributes",
      description: "_A_BUTTON_PROPS_ICON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "icon-class",
      description: "_A_BUTTON_PROPS_ICON_CLASS_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "icon-left",
      description: "_A_BUTTON_PROPS_ICON_LEFT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "icon-right",
      description: "_A_BUTTON_PROPS_ICON_RIGHT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "icon-tag",
      description: "_A_BUTTON_PROPS_ICON_TAG_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_BUTTON_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "() => uniqueId(\"a_btn_\")",
      required: false,
    },
    {
      name: "is-title-html",
      description: "_A_BUTTON_PROPS_IS_TITLE_HTML_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "loading",
      description: "_A_BUTTON_PROPS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "loading-align",
      description: "_A_BUTTON_PROPS_LOADING_ALIGN_DESCRIPTION_",
      type: "String",
      default: "right",
      required: false,
      // validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    {
      name: "loading-class",
      description: "_A_BUTTON_PROPS_LOADING_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: "a_spinner_small",
      required: false,
    },
    {
      name: "prevent",
      description: "_A_BUTTON_PROPS_PREVENT_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "safe-html",
      description: "_A_BUTTON_PROPS_SAFE_HTML_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "safe-html-screen-reader",
      description: "_A_BUTTON_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "stop",
      description: "_A_BUTTON_PROPS_STOP_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "tabindex",
      description: "_A_BUTTON_PROPS_TABINDEX_DESCRIPTION_",
      type: "Number / String",
      default: undefined,
      required: false,
    },
    {
      name: "tag",
      description: "_A_BUTTON_PROPS_TAG_DESCRIPTION_",
      type: "String",
      default: "button",
      required: false,
    },
    {
      name: "text",
      description: "_A_BUTTON_PROPS_TEXT_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-after",
      description: "_A_BUTTON_PROPS_TEXT_AFTER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-aria-hidden",
      description: "_A_BUTTON_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "text-before",
      description: "_A_BUTTON_PROPS_TEXT_BEFORE_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-class",
      description: "_A_BUTTON_PROPS_TEXT_CLASS_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "text-screen-reader",
      description: "_A_BUTTON_PROPS_TEXT_SCREEN_READER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-tag",
      description: "_A_BUTTON_PROPS_TEXT_TAG_DESCRIPTION_",
      type: "String",
      default: "span",
      required: false,
    },
    {
      name: "title",
      description: "_A_BUTTON_PROPS_TITLE_DESCRIPTION_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "title-attributes",
      description: "_A_BUTTON_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "{}",
      required: false,
    },
    {
      name: "title-placement",
      description: "_A_BUTTON_PROPS_TITLE_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "top",
      required: false,
      //  validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
    },
    {
      name: "title-z-index",
      description: "_A_BUTTON_PROPS_TITLE_Z_INDEX_DESCRIPTION_",
      type: "String / Number",
      default: "auto",
      required: false,
    },
    {
      name: "is-switch",
      description: "_A_BUTTON_PROPS_IS_SWITCH_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "model-switch",
      description: "_A_BUTTON_PROPS_MODEL_SWITCH_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "type",
      description: "_A_BUTTON_PROPS_TYPE_DESCRIPTION_",
      type: "String",
      default: "button",
      required: false,
      //  validator: value => ["button", "submit", "reset"].indexOf(value) !== -1,
    },
  ];

  return {
    dataProps,
  };
}