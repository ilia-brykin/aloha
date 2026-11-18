export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "Number",
        "String",
      ],
      text: "_PAGE_FILTER_DURATION_ARGUMENTS_VALUE_",
    },
    {
      value: "[sourceUnits=\"s\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_DURATION_ARGUMENTS_SOURCE_UNITS_",
    },
    {
      value: "[format=\"long\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_DURATION_ARGUMENTS_FORMAT_",
    },
    {
      value: "[maxUnits=0]",
      types: [
        "Number",
      ],
      text: "_PAGE_FILTER_DURATION_ARGUMENTS_MAX_UNITS_",
    },
    {
      value: "[showDays=true]",
      types: [
        "Boolean",
      ],
      text: "_PAGE_FILTER_DURATION_ARGUMENTS_SHOW_DAYS_",
    },
  ];

  return {
    argumentsText,
  };
}
