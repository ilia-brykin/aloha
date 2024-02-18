export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Any",
      ],
      text: "_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_",
    },
    {
      value: "[emptyValue=\"-\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_",
    },
  ];

  return {
    argumentsText,
  };
}
