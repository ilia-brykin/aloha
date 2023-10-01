export default function ExposesAPI() {
  const dataExposes = [
    {
      name: "buttonRef",
      description: "_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",
      type: "Object",
    },
    {
      name: "containerRef",
      description: "_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",
      type: "Object",
    },
    {
      name: "isButtonVisible",
      description: "_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",
      type: "Boolean",
    },
    {
      name: "isOpen",
      description: "_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",
      type: "Boolean",
    },
    {
      name: "toggleButton",
      description: "_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataExposes,
  };
}
