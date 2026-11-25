import {
  computed,
  toRef,
} from "vue";

import {
  castArray,
} from "lodash-es";

export default function ClassAPI(props, {
  slideDirection = computed(() => "next"),
}) {
  const arrowsPlacement = toRef(props, "arrowsPlacement");
  const arrowsTrigger = toRef(props, "arrowsTrigger");
  const direction = toRef(props, "direction");
  const height = toRef(props, "height");
  const indicatorsPlacement = toRef(props, "indicatorsPlacement");
  const motionBlur = toRef(props, "motionBlur");
  const transition = toRef(props, "transition");
  const type = toRef(props, "type");

  const indicatorsPlacementClass = computed(() => {
    return indicatorsPlacement.value ?
      `a_carousel_tabs_${ indicatorsPlacement.value }` :
      undefined;
  });

  const arrowsPlacementClass = computed(() => {
    return arrowsPlacement.value ?
      `a_carousel_arrows_${ arrowsPlacement.value }` :
      undefined;
  });

  // "always" wins. With "hover" the arrows are also shown with the focus inside (keyboard).
  const arrowsTriggerClass = computed(() => {
    const VALUES = castArray(arrowsTrigger.value);
    if (VALUES.includes("always")) {
      return undefined;
    }
    return VALUES.map(value => `a_carousel_trigger_${ value }`).join(" ");
  });

  const carouselClass = computed(() => {
    return [
      "a_carousel",
      `a_carousel_${ direction.value }`,
      `a_carousel_transition_${ transition.value }`,
      `a_carousel_direction_${ slideDirection.value }`,
      indicatorsPlacementClass.value,
      arrowsPlacementClass.value,
      arrowsTriggerClass.value,
      {
        a_carousel_card: type.value === "card",
        a_carousel_motion_blur: motionBlur.value,
        a_carousel_height_fixed: !!height.value && height.value !== "auto",
      },
    ];
  });

  const itemsStyle = computed(() => {
    if (!height.value || height.value === "auto") {
      return undefined;
    }
    return {
      height: height.value,
    };
  });

  return {
    carouselClass,
    itemsStyle,
  };
}
