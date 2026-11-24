export default function PropsAPI() {
  const dataProps = [
    {
      name: "has-progress",
      description: "_A_NOTIFICATION_PROPS_HAS_PROGRESS_DESCRIPTION_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "max",
      description: "_A_NOTIFICATION_PROPS_MAX_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: false,
    },
    {
      name: "name",
      description: "_A_NOTIFICATION_PROPS_NAME_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "placement",
      description: "_A_NOTIFICATION_PROPS_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "\"top-center\"",
      required: false,
    },
    {
      name: "size",
      description: "_A_NOTIFICATION_PROPS_SIZE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "width",
      description: "_A_NOTIFICATION_PROPS_WIDTH_DESCRIPTION_",
      type: "Number / String",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
