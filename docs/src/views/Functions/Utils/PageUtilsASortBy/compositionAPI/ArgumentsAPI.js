export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "collection",
      types: [
        "Array",
        "Object",
      ],
      text: "_PAGE_UTILS_A_SORT_BY_ARGUMENTS_COLLECTION_",
    },
    {
      value: "...iteratees",
      types: [
        "String",
        "Function",
        "Array",
        "Object",
      ],
      text: "_PAGE_UTILS_A_SORT_BY_ARGUMENTS_ITERATEES_",
    },
    {
      value: "options",
      types: [
        "Object",
      ],
      text: "_PAGE_UTILS_A_SORT_BY_ARGUMENTS_OPTIONS_",
    },
  ];

  return {
    argumentsText,
  };
}
