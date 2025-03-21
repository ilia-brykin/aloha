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
  const decimalPartLength = toRef(props, "decimalPartLength");

  const ensurePrecision = ({ value, currentValue, coefficient = 1 }) => {
    if (!isNumber(value)) {
      return currentValue;
    }
    // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
    return toPrecision(value + step.value * coefficient, decimalPartLength.value).toString();
  };

  return {
    ensurePrecision,
  };
}
