export default function PropsAPI() {
  const dataProps = [
    {
      name: "exclude-render-attributes",
      description: "_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "html",
      description: "_A_TEMPLATE_PROPS_HTML_DESCRIPTION_",
      type: "String",
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
      name: "options",
      description: "_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_",
      type: "String / Number / Object / Array / Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "slot-name",
      description: "_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
