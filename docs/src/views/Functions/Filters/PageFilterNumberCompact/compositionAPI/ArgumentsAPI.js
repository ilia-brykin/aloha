export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Number",
        "String",
      ],
      text: "_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_VALUE_",
    },
    {
      value: "[digits=1]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_DIGITS_",
    },
    {
      value: "[minValue=1000]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_MIN_VALUE_",
    },
    {
      value: "[isTrailingZeros=false]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_IS_TRAILING_ZEROS_",
    },
  ];

  return {
    argumentsText,
  };
}
