import {
  toRef,
} from "vue";

import {
  isNumber,
} from "lodash-es";

export default function VerifyAPI(props) {
  const step = toRef(props, "step");
  const symbolsAfterDecimalDivider = toRef(props, "symbolsAfterDecimalDivider");

  const toPrecision = (num, pre) => {
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

  const ensurePrecision = ({ value, currentValue, coefficient = 1 }) => {
    if (!isNumber(value)) {
      return currentValue;
    }
    // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
    return toPrecision(value + step.value * coefficient, symbolsAfterDecimalDivider.value).toString();
  };

  return {
    ensurePrecision,
  };
}
