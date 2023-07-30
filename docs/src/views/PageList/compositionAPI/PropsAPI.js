export default function PropsAPI() {
  const dataProps = [
    {
      name: "classMain",
      description: "_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_",
      type: "String / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "classItem",
      description: "_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_",
      type: "String / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "keyLabel",
      description: "_A_LIST_KEY_LABEL_PROP_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "keyLabelCallback",
      description: "_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_",
      type: "Function",
      default: undefined,
      required: false,
    },
    {
      name: "keyChildren",
      description: "_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_",
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
    {
      name: "labelTag",
      description: "_A_LIST_LABEL_TAG_PROP_DESCRIPTION_",
      type: "String",
      default: "li",
      required: false,
    },
    {
      name: "data",
      description: "_A_LIST_DATA_PROP_DESCRIPTION_",
      type: "Array",
      default: "[]",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
