import {
  computed,
  toRef,
} from "vue";

import {
  castArray,
  forEach,
} from "lodash-es";

export default function ClassAPI(props) {
  const arrowsPlacement = toRef(props, "arrowsPlacement");
  const arrowsTrigger = toRef(props, "arrowsTrigger");
  const indicatorsPlacement = toRef(props, "indicatorsPlacement");

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

  const arrowsTriggerClass = computed(() => {
    const values = castArray(arrowsTrigger.value);

    const CLASSES = [];

    forEach(values, value => {
      CLASSES.push(`a_carousel_trigger_${ value }`);
    });
    return CLASSES.join(" ");
  });

  return {
    arrowsPlacementClass,
    arrowsTriggerClass,
    indicatorsPlacementClass,
  };
}
