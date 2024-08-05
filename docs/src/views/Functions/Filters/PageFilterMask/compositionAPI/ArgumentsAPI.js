export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Any",
      ],
      text: "_PAGE_FILTER_MASK_ARGUMENTS_VALUE_",
    },
    {
      value: "[chars=4]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_MASK_ARGUMENTS_CHARS_",
    },
    {
      value: "[mask=\"*\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_MASK_ARGUMENTS_MASK_",
    },
  ];

  return {
    argumentsText,
  };
}
