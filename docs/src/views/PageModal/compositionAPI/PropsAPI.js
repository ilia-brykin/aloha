export default function PropsAPI() {
  const dataProps = [
    {
      name: "body-html",
      description: "_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_",
      type: "Object",
      default: `""`,
      required: false,
    },
    {
      name: "close",
      description: "_A_MODAL_PROPS_CLOSE_DESCRIPTION_",
      type: "Function",
      default: undefined,
      required: true,
    },
    {
      name: "close-button-attributes",
      description: "_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "close-button-class",
      description: "_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn a_btn_secondary",
      required: false,
    },
    {
      name: "close-button-id",
      description: "_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "close-button-text",
      description: "_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_MODAL_BTN_CANCEL_",
      required: false,
    },
    {
      name: "disabled",
      description: "_A_MODAL_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "disabled-save",
      description: "_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "extra",
      description: "_A_MODAL_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "header-tag",
      description: "_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_",
      type: "String",
      default: "h2",
      required: false,
    },
    {
      name: "header-text",
      description: "_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_MODAL_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "uniqueId(\"a_modal_\")",
      required: false,
    },
    {
      name: "is-close-button-hide",
      description: "_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-confirm",
      description: "_A_MODAL_PROPS_IS_CONFIRM_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "is-modal-hidden",
      description: "_A_MODAL_PROPS_IS_MODAL_HIDDEN_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-save-button-hide",
      description: "_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "loading",
      description: "_A_MODAL_PROPS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "modal-class",
      description: "_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "save",
      description: "_A_MODAL_PROPS_SAVE_DESCRIPTION_",
      type: "Function",
      default: undefined,
      required: false,
    },
    {
      name: "save-button-attributes",
      description: "_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "save-button-class",
      description: "_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn a_btn_primary",
      required: false,
    },
    {
      name: "save-button-id",
      description: "_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "save-button-text",
      description: "_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_MODAL_BTN_SAVE_",
      required: false,
    },
    {
      name: "selector-close",
      description: "_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_",
      type: "String / Array",
      default: undefined,
      required: false,
    },
    {
      name: "selector-close-ids",
      description: "_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_",
      type: "String / Array",
      default: undefined,
      required: false,
    },
    {
      name: "size",
      description: "_A_MODAL_PROPS_SIZE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "use-escape",
      description: "_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
