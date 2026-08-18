export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Any",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_VALUE_",
    },
    {
      value: "[conditions=[]]",
      types: [
        "Array",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_CONDITIONS_",
    },
    {
      value: "[conditions[].if]",
      types: [
        "Function",
        "String",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_IF_",
    },
    {
      value: "[conditions[].then]",
      types: [
        "Any",
        "Function",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_",
    },
    {
      value: "[conditions[].thenTemplate]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_TEMPLATE_",
    },
    {
      value: "[defaultValue=\"\"]",
      types: [
        "Any",
        "Function",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_VALUE_",
    },
    {
      value: "[defaultTemplate]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_TEMPLATE_",
    },
  ];

  return {
    argumentsText,
  };
}
