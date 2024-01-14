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
  ];

  return {
    argumentsText,
  };
}
