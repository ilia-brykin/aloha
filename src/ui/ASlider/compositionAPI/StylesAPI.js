import {
  computed,
  toRef,
} from "vue";

export default function StylesAPI(props, {
  firstValue = computed(() => 0),
  getPosition = () => {},
  secondValue = computed(() => 0),
}) {
  const height = toRef(props, "height");
  const range = toRef(props, "range");
  const vertical = toRef(props, "vertical");

  const firstValuePosition = computed(() => {
    return getPosition({ value: firstValue.value });
  });

  const secondValuePosition = computed(() => {
    return getPosition({ value: secondValue.value });
  });

  const runwayStyle = computed(() => {
    return vertical.value ?
      {
        height: height.value || "100%",
      } :
      {};
  });

  const barStyle = computed(() => {
    const barSize = range.value ?
      `${ Math.abs(secondValuePosition.value - firstValuePosition.value) }%` :
      `${ firstValuePosition.value }%`;

    const barStart = range.value ?
      `${ firstValuePosition.value }%` :
      "0%";

    return vertical.value ?
      { height: barSize, bottom: barStart } :
      { width: barSize, left: barStart };
  });

  const firstButtonStyle = computed(() => {
    const position = `${ firstValuePosition.value }%`;

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

    const position = `${ secondValuePosition.value }%`;

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
