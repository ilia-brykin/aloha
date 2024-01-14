export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Any",
      ],
      text: "_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_",
    },
    {
      value: "[trueValue=\"_YES_\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_",
    },
    {
      value: "[falseValue=\"_NO_\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_",
    },
    {
      value: "[useNil=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_",
    },
  ];

  return {
    argumentsText,
  };
}
