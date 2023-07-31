import {
  computed,
  toRef,
} from "vue";

export default function WidthAPI(props) {
  const min = toRef(props, "min");
  const max = toRef(props, "max");
  const value = toRef(props, "value");

  const widthPercent = computed(() => {
    return ((value.value - min.value) / (max.value - min.value)) * 100;
  });

  return {
    widthPercent,
  };
}
