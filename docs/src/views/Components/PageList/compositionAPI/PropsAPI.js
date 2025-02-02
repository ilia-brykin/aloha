export default function PropsAPI() {
  const dataProps = [
    {
      name: "class-item",
      description: "_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_",
      type: "String / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "class-main",
      description: "_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_",
      type: "String / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "data",
      description: "_A_LIST_DATA_PROP_DESCRIPTION_",
      type: "Array",
      default: "[]",
      required: false,
    },
    {
      name: "is-data-simple-array",
      description: "_A_LIST_IS_DATA_SIMPLE_ARRAY_PROP_DESCRIPTION_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "is-html",
      description: "_A_LIST_IS_HTML_PROP_DESCRIPTION_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "key-children",
      description: "_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-id",
      description: "_A_LIST_KEY_ID_PROP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-label",
      description: "_A_LIST_KEY_LABEL_PROP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-label-callback",
      description: "_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_",
      type: "Function",
      default: undefined,
      required: false,
    },
    {
      name: "label-tag",
      description: "_A_LIST_LABEL_TAG_PROP_DESCRIPTION_",
      type: "String",
      default: "span",
      required: false,
    },
    {
      name: "list-item-tag",
      description: "_A_LIST_LIST_ITEM_TAG_PROP_DESCRIPTION_",
      type: "String",
      default: "li",
      required: false,
    },
    {
      name: "separator",
      description: "_A_LIST_SEPARATOR_PROP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "separator-html",
      description: "_A_LIST_SEPARATOR_HTML_PROP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "tag",
      description: "_A_LIST_TAG_PROP_DESCRIPTION_",
      type: "String",
      default: "ul",
      required: false,
    },

  ];

  return {
    dataProps,
  };
}
