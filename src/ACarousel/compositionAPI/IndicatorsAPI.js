import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  floor,
} from "lodash";
import {
  get,
  isNil,
  map,
  min,
  round,
  uniqBy,
} from "lodash-es";

export default function IndicatorsAPI(props, {
  dataLocal = computed(() => []),
}) {
  const indicatorsAutoLimit = toRef(props, "indicatorsAutoLimit");
  const indicatorsLimit = toRef(props, "indicatorsLimit");
  const indicatorsShow = toRef(props, "indicatorsShow");
  const indicatorWidth = toRef(props, "indicatorWidth");

  const carouselRef = ref(undefined);
  const carouselWidth = ref(0);
  let observer = null;

  const useObserver = computed(() => {
    return indicatorsShow.value && indicatorsAutoLimit.value;
  });

  const indicatorsLimitLocal = computed(() => {
    if (!useObserver.value) {
      return indicatorsLimit.value;
    }

    const INDICATORS_LIMIT = floor(carouselWidth.value / indicatorWidth.value);
    if (indicatorsLimit.value) {
      return min([INDICATORS_LIMIT, indicatorsLimit.value]);
    }
    return INDICATORS_LIMIT;
  });

  const initObserver = () => {
    if (observer ||
      !useObserver.value) {
      return;
    }

    observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        carouselWidth.value = entry.contentRect.width;
      }
    });

    if (carouselRef.value) {
      observer.observe(carouselRef.value);
    }
  };

  const removeObserver = () => {
    if (observer && carouselRef.value) {
      observer.unobserve(carouselRef.value);
    }
  };

  const indicatorsData = computed(() => {
    const max = indicatorsLimitLocal.value;

    if (isNil(max) || max >= dataLocal.value.length) {
      return dataLocal.value;
    }

    const firstIndex = 0;
    const lastIndex = dataLocal.value.length - 1;
    const countMiddle = max - 2;
    const step = (lastIndex) / (countMiddle + 1);

    const result = [];

    result.push({
      index: firstIndex,
      item: get(dataLocal.value, firstIndex),
    });

    for (let i = 1; i <= countMiddle; i++) {
      const index = round(i * step);
      result.push({
        index,
        item: get(dataLocal.value, index),
      });
    }

    result.push({
      index: lastIndex,
      item: get(dataLocal.value, lastIndex),
    });

    const unique = uniqBy(result, "index");

    return map(unique, "item");
  });

  return {
    carouselRef,
    indicatorsData,
    initObserver,
    removeObserver,
    useObserver,
  };
}
