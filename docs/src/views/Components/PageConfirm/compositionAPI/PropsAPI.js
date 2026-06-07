export default function PropsAPI() {
  const dataProps = [
    {
      name: "header-text",
      description: "_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "body-html",
      description: "_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_",
      type: "String",
      default: `""`,
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
      name: "close",
      description: "_A_MODAL_PROPS_CLOSE_DESCRIPTION_",
      type: "Function",
      default: undefined,
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
      name: "save-button-text",
      description: "_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_MODAL_BTN_SAVE_",
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
      name: "loading",
      description: "_A_MODAL_PROPS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "stop",
      description: "_A_MODAL_PROPS_STOP_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
