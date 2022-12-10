import {
  computed,
  toRef,
} from "vue";

export default function StyleAPI(props) {
  const fill = toRef(props, "fill");
  const fillRule = toRef(props, "fillRule");
  const style = toRef(props, "style");
  const stroke = toRef(props, "stroke");
  const strokeWidth = toRef(props, "strokeWidth");

  const fillRuleObject = computed(() => {
    if (fillRule.value) {
      return {
        "fill-rule": fillRule.value,
      };
    }
    return {};
  });

  const styleLocal = computed(() => {
    return [
      style.value,
      {
        fill: fill.value,
        stroke: stroke.value,
        strokeWidth: strokeWidth.value,
        ...fillRuleObject.value
      },
    ];
  });

  return {
    styleLocal,
  };
}
