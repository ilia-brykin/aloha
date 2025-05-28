export default function PropsAPI() {
  const dataProps = [
    {
      name: "aria-label",
      description: "_A_CAROUSEL_PROPS_ARIA_LABEL_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: true,
    },
    {
      name: "aria-disabled",
      description: "_A_CAROUSEL_PROPS_ARIA_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "arrow-previous-attributes",
      description: "_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "arrow-previous-icon",
      description: "_A_CAROUSEL_PROPS_ARROW_PREVIOUS_ICON_DESCRIPTION_",
      type: "String",
      default: "ChevronLeft",
      required: false,
    },
    {
      name: "arrow-next-attributes",
      description: "_A_CAROUSEL_PROPS_ARROW_NEXT_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "arrow-next-icon",
      description: "_A_CAROUSEL_PROPS_ARROW_NEXT_ICON_DESCRIPTION_",
      type: "String",
      default: "ChevronRight",
      required: false,
    },
    {
      name: "arrows-show",
      description: "_A_CAROUSEL_PROPS_ARROWS_SHOW_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "arrows-trigger",
      description: "_A_CAROUSEL_PROPS_ARROWS_TRIGGER_DESCRIPTION_",
      type: "String / Array",
      default: "always",
      required: false,
    },
    {
      name: "arrows-placement",
      description: "_A_CAROUSEL_PROPS_ARROWS_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "sides-center",
      required: false,
    },
    {
      name: "autoplay-interval",
      description: "_A_CAROUSEL_PROPS_AUTOPLAY_INTERVAL_DESCRIPTION_",
      type: "Number",
      default: 5000,
      required: false,
    },
    {
      name: "autoplay-show",
      description: "_A_CAROUSEL_PROPS_AUTOPLAY_SHOW_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "autoplay-start",
      description: "_A_CAROUSEL_PROPS_AUTOPLAY_START_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "data",
      description: "_A_CAROUSEL_PROPS_DATA_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "disabled",
      description: "_A_CAROUSEL_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_CAROUSEL_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "() => uniqueId(\"a_carousel_\")",
      required: false,
    },
    {
      name: "indicators-show",
      description: "_A_CAROUSEL_PROPS_INDICATORS_SHOW_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "indicators-type",
      description: "_A_CAROUSEL_PROPS_INDICATORS_TYPE_DESCRIPTION_",
      type: "String",
      default: "dots",
      required: false,
    },
    {
      name: "indicators-placement",
      description: "_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "bottom",
      required: false,
    },
    {
      name: "indicators-placement",
      description: "_A_CAROUSEL_PROPS_INDICATORS_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "bottom",
      required: false,
    },
    {
      name: "key-id",
      description: "_A_CAROUSEL_PROPS_KEY_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "model-value",
      description: "_A_CAROUSEL_PROPS_MODEL_VALUE_DESCRIPTION_",
      type: "Number / String",
      default: undefined,
      required: false,
    },
    {
      name: "texts",
      description: "_A_CAROUSEL_PROPS_texts_DESCRIPTION_",
      type: "Object",
      default: "{\n" +
        "        nextSlide: \"_A_CAROUSEL_NEXT_SLIDE_\",\n" +
        "        previousSlide: \"_A_CAROUSEL_PREVIOUS_SLIDE_\",\n" +
        "        controlsSlide: \"_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_\",\n" +
        "        controlsSlides: \"_A_CAROUSEL_CONTROLS_SLIDES_\",\n" +
        "        controlsStart: \"_A_CAROUSEL_CONTROLS_START_\",\n" +
        "        controlsStop: \"_A_CAROUSEL_CONTROLS_STOP_\",\n" +
        "        itemAriaLabel: \"_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_\",\n" +
        "      }",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
