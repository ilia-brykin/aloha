export default function ArgumentsAPI() {
  const argumentsText = [
    {
      value: "email",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_",
    },
    {
      value: "[linkClass]",
      types: [
        "String",
      ],
      text: "_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_",
    },
  ];

  return {
    argumentsText,
  };
}
