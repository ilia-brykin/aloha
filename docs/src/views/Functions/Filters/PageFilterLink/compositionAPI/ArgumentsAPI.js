export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "url",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LINK_ARGUMENTS_URL_",
    },
    {
      value: "[linkText=\"\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LINK_ARGUMENTS_LINK_TEXT_",
    },
    {
      value: "[protocol=\"https://\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LINK_ARGUMENTS_PROTOCOL_",
    },
    {
      value: "[target=\"\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LINK_ARGUMENTS_TARGET_",
    },
    {
      value: "[linkClass=\"\"]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_LINK_ARGUMENTS_LINK_CLASS_",
    },
  ];

  return {
    argumentsText,
  };
}
