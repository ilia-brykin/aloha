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
      name: "aria-label",
      description: "_A_BREADCRUMB_PROPS_ARIA_LABEL_",
      type: "String",
      default: "\"_A_BREADCRUMB_ARIA_LABEL_\"",
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
      name: "items",
      description: "_A_BREADCRUMB_PROPS_ITEMS_",
      type: "Array",
      default: "[]",
      required: false,
    },
    {
      name: "max-items",
      description: "_A_BREADCRUMB_PROPS_MAX_ITEMS_",
      type: "Number",
      default: undefined,
      required: false,
    },
    {
      name: "separator",
      description: "_A_BREADCRUMB_PROPS_SEPARATOR_",
      type: "String",
      default: "\"›\"",
      required: false,
    },
  ];

  const dataPropsItem = [
    {
      name: "extra",
      description: "_A_BREADCRUMB_PROPS_ITEM_EXTRA_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "href",
      description: "_A_BREADCRUMB_PROPS_HREF_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "icon",
      description: "_A_BREADCRUMB_PROPS_ICON_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_BREADCRUMB_PROPS_ID_",
      type: "String / Number",
      default: undefined,
      required: false,
    },
    {
      name: "label",
      description: "_A_BREADCRUMB_PROPS_LABEL_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: true,
    },
    {
      name: "to",
      description: "_A_BREADCRUMB_PROPS_TO_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
    dataPropsItem,
  };
}
