import {
  computed,
  toRef,
} from "vue";

export default function WidthAPI(props) {
  const min = toRef(props, "min");
  const max = toRef(props, "max");
  const value = toRef(props, "value");

  const diffMinMax = computed(() => {
    return max.value - min.value;
  });

  const widthPercent = computed(() => {
    return Math.abs(value.value * 100 / diffMinMax.value);
  });

  return {
    widthPercent,
  };
}
