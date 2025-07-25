import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import {
  findIndex,
} from "lodash-es";

export default function StylesAPI(props, {
  dataLocal = computed(() => []),
  firstValue = computed(() => 0),
  secondValue = computed(() => 0),
}) {
  const height = toRef(props, "height");
  const range = toRef(props, "range");
  const vertical = toRef(props, "vertical");

  const getPosition = ({ value }) => {
    if (!dataLocal.value.length) {
      return 0;
    }

    const valueIndex = findIndex(dataLocal.value, item => item[AKeyId] === value);
    if (valueIndex === -1) {
      return 0;
    }

    const percentage = (valueIndex / (dataLocal.value.length - 1)) * 100;

    return percentage;
  };

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
      `${ Math.abs(secondValuePosition.value - firstValue.value) }%` :
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
