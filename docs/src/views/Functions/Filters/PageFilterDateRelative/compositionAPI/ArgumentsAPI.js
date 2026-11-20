export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "value",
      types: [
        "String",
        "Date",
      ],
      text: "_PAGE_FILTER_DATE_RELATIVE_ARGUMENTS_VALUE_",
    },
    {
      value: "[now=new Date()]",
      types: [
        "String",
        "Date",
      ],
      text: "_PAGE_FILTER_DATE_RELATIVE_ARGUMENTS_NOW_",
    },
    {
      value: "[numeric=\"auto\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_DATE_RELATIVE_ARGUMENTS_NUMERIC_",
    },
  ];

  return {
    argumentsText,
  };
}
