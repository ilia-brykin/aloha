export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "array",
      types: [
        "Array",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_ARRAY_",
    },
    {
      value: "[isHtml=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_IS_HTML_",
    },
    {
      value: "[isSimpleArray=false]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_IS_SIMPLE_ARRAY_",
    },
    {
      value: "[keyChildren=\"\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_KEY_CHILDREN_",
    },
    {
      value: "[keyLabel=\"\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_",
    },
    {
      value: "[keyLabelCallback]",
      types: [
        "Function",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_CALLBACK_",
    },
    {
      value: "[listClass=\"\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_LIST_CLASS_",
    },
    {
      value: "[separator=\", \"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_",
    },
    {
      value: "[tag=\"ul\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LIST_ARGUMENTS_TAG_",
    },
  ];

  return {
    argumentsText,
  };
}
