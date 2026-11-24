export default function PropsAPI() {
  const dataProps = [
    {
      name: "arrow-padding",
      description: "_A_TOOLTIP_PROPS_ARROW_PADDING_DESCRIPTION_",
      type: "Number / Function",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_TOOLTIP_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "a_tooltip_{n}",
      required: false,
    },
    {
      name: "is-hide",
      description: "_A_TOOLTIP_PROPS_IS_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "max-width",
      description: "_A_TOOLTIP_PROPS_MAX_WIDTH_DESCRIPTION_",
      type: "Number / String",
      default: undefined,
      required: false,
    },
    {
      name: "min-width",
      description: "_A_TOOLTIP_PROPS_MIN_WIDTH_DESCRIPTION_",
      type: "Number / String",
      default: undefined,
      required: false,
    },
    {
      name: "offset-distance",
      description: "_A_TOOLTIP_PROPS_OFFSET_DISTANCE_DESCRIPTION_",
      type: "Number",
      default: 6,
      required: false,
    },
    {
      name: "offset-skidding",
      description: "_A_TOOLTIP_PROPS_OFFSET_SKIDDING_DESCRIPTION_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "placement",
      description: "_A_TOOLTIP_PROPS_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "top",
      required: false,
    },
    {
      name: "popper-container-id",
      description: "_A_TOOLTIP_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",
      type: "String",
      default: "a_tooltip_container",
      required: false,
    },
    {
      name: "show-arrow",
      description: "_A_TOOLTIP_PROPS_SHOW_ARROW_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "tag",
      description: "_A_TOOLTIP_PROPS_TAG_DESCRIPTION_",
      type: "String",
      default: "span",
      required: false,
    },
    {
      name: "time-open",
      description: "_A_TOOLTIP_PROPS_TIME_OPEN_DESCRIPTION_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "time-close",
      description: "_A_TOOLTIP_PROPS_TIME_CLOSE_DESCRIPTION_",
      type: "Number",
      default: 100,
      required: false,
    },
    {
      name: "width",
      description: "_A_TOOLTIP_PROPS_WIDTH_DESCRIPTION_",
      type: "Number / String",
      default: undefined,
      required: false,
    },
    {
      name: "without-aria-describedby",
      description: "_A_TOOLTIP_PROPS_WITHOUT_ARIA_DESCRIBEDBY_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
