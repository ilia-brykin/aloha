import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function StopsAPI(props, {
  dataLocal = computed(() => []),
}) {
  const showStops = toRef(props, "showStops");
  const vertical = toRef(props, "vertical");

  const percentInOneIndex = computed(() => {
    return (1 / (dataLocal.value.length - 1)) * 100;
  });

  const stops = computed(() => {
    if (!showStops.value) {
      return [];
    }

    const STOPS = [];
    forEach(dataLocal.value, (item, index) => {
      if (index > 0 && index < dataLocal.value.length - 1) {
        const POSITION = index * percentInOneIndex.value;
        STOPS.push({
          stylesVertical: { bottom: `${ POSITION }%` },
          stylesHorizontal: { left: `${ POSITION }%` },
        });
      }
    });

    return STOPS;
  });

  const getStopStyle = position => {
    return vertical.value ? { bottom: `${ position }%` } : { left: `${ position }%` };
  };

  return {
    getStopStyle,
    stops,
  };
}
