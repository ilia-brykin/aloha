import {
  computed,
  ref,
  toRef,
} from "vue";

import ARemPxAPI from "../../compositionAPI/ARemPxAPI";

import {
  AKeyChildren,
  AKeyIndex,
} from "../../const/AKeys";
import {
  floor,
  forEach,
} from "lodash";
import {
  cloneDeep,
  isNil,
  min,
  round,
} from "lodash-es";

export default function IndicatorsAPI(props, {
  dataLocal = computed(() => []),
}) {
  const indicatorsAutoLimit = toRef(props, "indicatorsAutoLimit");
  const indicatorsLimit = toRef(props, "indicatorsLimit");
  const indicatorsMargin = toRef(props, "indicatorsMargin");
  const indicatorsShow = toRef(props, "indicatorsShow");
  const indicatorWidth = toRef(props, "indicatorWidth");

  const carouselRef = ref(undefined);
  const carouselWidth = ref(0);
  let observer = null;

  const {
    remPx,
  } = ARemPxAPI();

  const indicatorWidthLocal = computed(() => {
    return indicatorWidth.value * remPx.value;
  });

  const indicatorsMarginLocal = computed(() => {
    return indicatorsMargin.value * remPx.value;
  });

  const useObserver = computed(() => {
    return indicatorsShow.value && indicatorsAutoLimit.value;
  });

  const indicatorsLimitLocal = computed(() => {
    if (!useObserver.value) {
      return indicatorsLimit.value;
    }

    const INDICATORS_LIMIT = floor((carouselWidth.value - indicatorsMarginLocal.value) / (indicatorWidthLocal.value));
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
        if (entry.contentRect.width !== carouselWidth.value) {
          carouselWidth.value = entry.contentRect.width;
        }
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

    // Create a set of visible indices
    const visibleIndices = new Set();
    visibleIndices.add(firstIndex);
    visibleIndices.add(lastIndex);

    for (let i = 1; i <= countMiddle; i++) {
      const index = round(i * step);
      visibleIndices.add(index);
    }

    // Create a new array with visible elements and _a_children property
    const result = [];
    let lastVisibleIndex = -1;
    let children = [];

    forEach(cloneDeep(dataLocal.value), (item, index) => {
      item[AKeyIndex] = index;
      if (visibleIndices.has(index)) {
        // If this is a visible element
        if (lastVisibleIndex !== -1) {
          // Add accumulated children to the previous visible element
          if (children.length > 0) {
            result[result.length - 1][AKeyChildren] = children;
            children = [];
          }
        }

        // Add the current visible element
        result.push(item);
        lastVisibleIndex = index;
      } else {
        // This is an invisible element, add it to children
        children.push(item);
      }
    });

    return result;
  });

  return {
    carouselRef,
    indicatorsData,
    initObserver,
    removeObserver,
    useObserver,
  };
}
