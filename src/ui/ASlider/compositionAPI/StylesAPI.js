import {
  computed,
  toRef,
} from "vue";

export default function StylesAPI(props, {
  firstValue = computed(() => 0),
  secondValue = computed(() => 0),
  maxValue = computed(() => 0),
  minValue = computed(() => 0),
}) {
  const height = toRef(props, "height");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const range = toRef(props, "range");
  const vertical = toRef(props, "vertical");

  const runwayStyle = computed(() => {
    return vertical.value ?
      {
        height: height.value || "100%",
      } :
      {};
  });

  const barStyle = computed(() => {
    const barSize = range.value ?
      `${ 100 * (maxValue.value - minValue.value) / (max.value - min.value) }%` :
      `${ 100 * (firstValue.value - min.value) / (max.value - min.value) }%`;

    const barStart = range.value ?
      `${ 100 * (minValue.value - min.value) / (max.value - min.value) }%` :
      "0%";

    return vertical.value ?
      { height: barSize, bottom: barStart } :
      { width: barSize, left: barStart };
  });

  const firstButtonStyle = computed(() => {
    const position = `${ (firstValue.value - min.value) / (max.value - min.value) * 100 }%`;

    return vertical.value ?
      {
        bottom: position,
      } :
      {
        left: position,
      };
  });

  const secondButtonStyle = computed(() => {
    if (!range.value) {
      return {};
    }

    const position = `${ (secondValue.value - min.value) / (max.value - min.value) * 100 }%`;

    return vertical.value ?
      {
        bottom: position,
      } :
      {
        left: position,
      };
  });

  return {
    barStyle,
    firstButtonStyle,
    runwayStyle,
    secondButtonStyle,
  };
}
