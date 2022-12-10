import {
  computed,
  toRef,
} from "vue";

export default function FillStrokeAPI(props) {
  const style = toRef(props, "style");
  const fill = toRef(props, "fill");
  const stroke = toRef(props, "stroke");
  const strokeWidth = toRef(props, "strokeWidth");

  const styleLocal = computed(() => {
    return [
      style.value,
      {
        fill: fill.value,
        stroke: stroke.value,
        strokeWidth: strokeWidth.value,
      },
    ];
  });

  return {
    styleLocal,
  };
}
