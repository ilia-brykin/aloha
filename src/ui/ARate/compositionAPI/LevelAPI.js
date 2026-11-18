import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isPlainObject,
  isString,
  keys,
  sortBy,
  toNumber,
} from "lodash-es";

const LEVELS = ["low", "medium", "high"];

/**
 * Value of a prop that is a string, an array with 3 values (low, medium, high)
 * or an object with thresholds as keys ({ 2: a, 4: b, 5: c }).
 */
export function getValueForLevel({ source, value, level }) {
  if (isString(source)) {
    return source;
  }
  if (isArray(source)) {
    return source[LEVELS.indexOf(level)] ?? source[source.length - 1];
  }
  if (isPlainObject(source)) {
    const THRESHOLDS = sortBy(keys(source).map(toNumber));
    const THRESHOLD = THRESHOLDS.find(item => value <= item) ?? THRESHOLDS[THRESHOLDS.length - 1];
    return source[THRESHOLD];
  }
  return undefined;
}

export default function LevelAPI(props, {
  colorsLocal = computed(() => undefined),
  iconsLocal = computed(() => undefined),
  valueDisplayed = computed(() => 0),
}) {
  const highThreshold = toRef(props, "highThreshold");
  const lowThreshold = toRef(props, "lowThreshold");

  const level = computed(() => {
    if (valueDisplayed.value <= lowThreshold.value) {
      return "low";
    }
    if (valueDisplayed.value >= highThreshold.value) {
      return "high";
    }
    return "medium";
  });

  const colorCurrent = computed(() => {
    return getValueForLevel({
      source: colorsLocal.value,
      value: valueDisplayed.value,
      level: level.value,
    });
  });

  const iconFillCurrent = computed(() => {
    return getValueForLevel({
      source: iconsLocal.value,
      value: valueDisplayed.value,
      level: level.value,
    });
  });

  return {
    colorCurrent,
    iconFillCurrent,
    level,
  };
}
