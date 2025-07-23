import {
  computed,
  toRef,
} from "vue";

export default function StopsAPI(props, {
  firstValue = computed(() => 0),
  maxValue = computed(() => 0),
  minValue = computed(() => 0),
}) {
  const showStops = toRef(props, "showStops");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const step = toRef(props, "step");
  const range = toRef(props, "range");
  const vertical = toRef(props, "vertical");

  const stops = computed(() => {
    if (!showStops.value ||
      min.value > max.value ||
      step.value === 0) {
      return [];
    }

    const stopCount = (max.value - min.value) / step.value;
    const stepWidth = 100 * step.value / (max.value - min.value);
    const result = Array.from({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth);

    if (range.value) {
      return result.filter(stop => {
        return stop < 100 * (minValue.value - min.value) / (max.value - min.value) ||
          stop > 100 * (maxValue.value - min.value) / (max.value - min.value);
      });
    }
    return result.filter(stop => stop > 100 * (firstValue.value - min.value) / (max.value - min.value));
  });

  const getStopStyle = position => {
    return vertical.value ? { bottom: `${ position }%` } : { left: `${ position }%` };
  };

  return {
    getStopStyle,
    stops,
  };
}
