export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Any",
      ],
      text: "_PAGE_FILTER_JSON_ARGUMENTS_VALUE_",
    },
    {
      value: "[replacer]",
      types: [
        "Function",
        "Array",
      ],
      text: "_PAGE_FILTER_JSON_ARGUMENTS_REPLACER_",
    },
    {
      value: "[space=2]",
      types: [
        "Number",
        "String",
      ],
      text: "_PAGE_FILTER_JSON_ARGUMENTS_SPACE_",
    },
    {
      value: "[isHtml=false]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_JSON_ARGUMENTS_IS_HTML_",
    },
    {
      value: "[jsonClass=a_code_content]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_JSON_ARGUMENTS_JSON_CLASS_",
    },
    {
      value: "[tag=pre]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_JSON_ARGUMENTS_TAG_",
    },
  ];

  return {
    argumentsText,
  };
}
