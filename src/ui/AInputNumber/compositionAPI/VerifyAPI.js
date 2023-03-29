import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
  isNumber,
  isUndefined,
} from "lodash-es";

export default function VerifyAPI(props, {
  changeModel = () => {},
}) {
  const modelUndefined = toRef(props, "modelUndefined");
  const stepStrictly = toRef(props, "stepStrictly");
  const step = toRef(props, "step");
  const precision = toRef(props, "precision");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const modelValue = toRef(props, "modelValue");

  const getPrecision = value => {
    if (isNil(value)) {
      return 0;
    }
    const valueString = value.toString();
    const dotPosition = valueString.indexOf(".");
    let precisionLocal = 0;
    if (dotPosition !== -1) {
      precisionLocal = valueString.length - dotPosition - 1;
    }
    return precisionLocal;
  };

  const numPrecision = computed(() => {
    const stepPrecision = getPrecision(step.value);
    if (!isUndefined(precision.value)) {
      if (stepPrecision > precision.value) {
        console.warn(
          "AInputNumber",
          "precision should not be less than the decimal places of step"
        );
      }
      return precision.value;
    }
    return Math.max(getPrecision(modelValue.value), stepPrecision);
  });

  const toPrecision = (num, pre) => {
    if (isUndefined(pre)) {
      pre = numPrecision.value;
    }
    if (pre === 0) {
      return Math.round(num);
    }
    let snum = String(num);
    const pointPos = snum.indexOf(".");
    if (pointPos === -1) {
      return num;
    }
    const nums = snum.replace(".", "").split("");
    const datum = nums[pointPos + pre];
    if (!datum) {
      return num;
    }
    const length = snum.length;
    if (snum.charAt(length - 1) === "5") {
      snum = `${ snum.slice(0, Math.max(0, length - 1)) }6`;
    }
    return Number.parseFloat(Number(snum).toFixed(pre));
  };


  const verifyValue = (value, update) => {
    let newValue = Number(value);
    if (isNil(value) ||
      Number.isNaN(newValue)) {
      return null;
    }
    if (value === "") {
      newValue = modelUndefined.value;
    }
    if (stepStrictly.value) {
      newValue = toPrecision(Math.round(newValue / step.value) * step.value, precision.value);
    }
    if (!isUndefined(precision.value)) {
      newValue = toPrecision(newValue, precision.value);
    }
    if (newValue > max.value) {
      newValue = max.value;
      update && changeModel({ model: newValue });
    } else if (newValue < min.value) {
      newValue = min.value;
      update && changeModel({ model: newValue });
    }
    return newValue;
  };
  const ensurePrecision = ({ value, currentValue, coefficient = 1 }) => {
    if (!isNumber(value)) {
      return currentValue;
    }
    // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
    return toPrecision(value + step.value * coefficient);
  };

  return {
    ensurePrecision,
    verifyValue,
  };
}
