export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Number",
        "String",
      ],
      text: "_PAGE_FILTER_PERCENT_ARGUMENTS_VALUE_",
    },
    {
      value: "[digits=2]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_PERCENT_ARGUMENTS_DIGITS_",
    },
    {
      value: "[digitGrouping=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_PERCENT_ARGUMENTS_DIGIT_GROUPING_",
    },
    {
      value: "[isFraction=false]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_PERCENT_ARGUMENTS_IS_FRACTION_",
    },
  ];

  return {
    argumentsText,
  };
}
