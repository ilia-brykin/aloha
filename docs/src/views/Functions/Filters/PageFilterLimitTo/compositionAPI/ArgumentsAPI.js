export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "text",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LIMIT_TO_ARGUMENTS_TEXT_",
    },
    {
      value: "[limit=30]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_LIMIT_TO_ARGUMENTS_LIMIT_",
    },
    {
      value: "[maxThreeDots=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_LIMIT_TO_ARGUMENTS_MAX_THREE_DOTS_",
    },
  ];

  return {
    argumentsText,
  };
}
