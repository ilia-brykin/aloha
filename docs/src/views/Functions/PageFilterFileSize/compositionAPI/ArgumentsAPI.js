export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_",
    },
    {
      value: "[units=\"kb\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_",
    },
    {
      value: "[sourceUnits=\"b\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_",
    },
    {
      value: "[digits=2]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_",
    },
  ];

  return {
    argumentsText,
  };
}
