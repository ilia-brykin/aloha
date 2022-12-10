import {
  computed,
  toRef,
} from "vue";

export default function StyleAPI(props) {
  const style = toRef(props, "style");
  const stroke = toRef(props, "stroke");
  const strokeWidth = toRef(props, "strokeWidth");

  const styleLocal = computed(() => {
    return [
      style.value,
      {
        stroke: stroke.value,
        strokeWidth: strokeWidth.value,
      },
    ];
  });

  return {
    styleLocal,
  };
}
