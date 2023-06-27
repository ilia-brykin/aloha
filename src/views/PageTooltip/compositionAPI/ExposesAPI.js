export default function ExposesAPI() {
  const dataExposes = [
    {
      name: "buttonRef",
      description: "_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_",
      type: "Object",
    },
    {
      name: "containerRef",
      description: "_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_",
      type: "Object",
    },
    {
      name: "isOpen",
      description: "_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_",
      type: "Boolean",
    },
    {
      name: "toggleButton",
      description: "_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataExposes,
  };
}
