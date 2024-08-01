import {
  toRef,
} from "vue";

import {
  toPrecision,
} from "../../../utils/utilsMath";

import {
  isNumber,
} from "lodash-es";

export default function VerifyAPI(props) {
  const step = toRef(props, "step");
  const symbolsAfterDecimalDivider = toRef(props, "symbolsAfterDecimalDivider");

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
