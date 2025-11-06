export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "collection",
      types: [
        "Array",
        "Object",
      ],
      text: "_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_COLLECTION_",
    },
    {
      value: "iteratees",
      types: [
        "String",
        "Function",
        "Array",
        "Object",
        "Null",
      ],
      text: "_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_ITERATEES_",
    },
    {
      value: "orders",
      types: [
        "String",
        "Array",
        "Null",
      ],
      text: "_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_ORDERS_",
    },
    {
      value: "options",
      types: [
        "Object",
      ],
      text: "_PAGE_UTILS_A_ORDER_BY_ARGUMENTS_OPTIONS_",
    },
  ];

  return {
    argumentsText,
  };
}
