export default function ExposesAPI() {
  const dataExposes = [
    {
      name: "close",
      description: "_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "isHidden",
      description: "_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",
      type: "Boolean",
    },
  ];

  return {
    dataExposes,
  };
}
