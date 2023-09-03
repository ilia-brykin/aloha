export default function PropsAPI() {
  const dataProps = [
    {
      name: "button-options",
      description: "_A_LINK_COPY_PROPS_BUTTON_OPTIONS_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "class",
      description: "_A_LINK_COPY_PROPS_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "class-default",
      description: "_A_LINK_COPY_PROPS_CLASS_DEFAULT_DESCRIPTION_",
      type: "String",
      default: "a_btn_group",
      required: false,
    },
    {
      name: "disabled",
      description: "_A_LINK_COPY_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "link-options",
      description: "_A_LINK_COPY_PROPS_LINK_OPTIONS_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "textCopy",
      description: "_A_LINK_COPY_PROPS_TEXT_COPY_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
