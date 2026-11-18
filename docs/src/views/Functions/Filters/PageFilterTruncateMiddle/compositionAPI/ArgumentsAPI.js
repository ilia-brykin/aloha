export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "String",
        "Number",
      ],
      text: "_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_VALUE_",
    },
    {
      value: "[start=6]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_START_",
    },
    {
      value: "[end=4]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_END_",
    },
    {
      value: "[separator=\"\u2026\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_SEPARATOR_",
    },
  ];

  return {
    argumentsText,
  };
}
