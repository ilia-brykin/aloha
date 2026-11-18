export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_INITIALS_ARGUMENTS_VALUE_",
    },
    {
      value: "[limit=2]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_INITIALS_ARGUMENTS_LIMIT_",
    },
    {
      value: "[isUppercase=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_INITIALS_ARGUMENTS_IS_UPPERCASE_",
    },
  ];

  return {
    argumentsText,
  };
}
