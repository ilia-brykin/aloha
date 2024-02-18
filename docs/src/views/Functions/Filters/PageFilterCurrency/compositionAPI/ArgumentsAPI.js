export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Number",
        "String",
      ],
      text: "_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_",
    },
    {
      value: "[suffix=\"€\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_",
    },
    {
      value: "[digits=2]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_",
    },
    {
      value: "[digitGrouping=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_",
    },
  ];

  return {
    argumentsText,
  };
}
