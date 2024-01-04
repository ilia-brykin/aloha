import filterCurrency from "./filterCurrency";
import {
  isNumber,
} from "lodash-es";

const UNITS_MAPPING = {
  KB: 1024,
  MB: 1024 * 1024,
};

export default function(value, { units = "KB" } = {}) {
  let valueLocal = value;
  if (!isNumber(value)) {
    valueLocal = 0;
  }
  return `${ filterCurrency(valueLocal / UNITS_MAPPING[units], "") } ${ units }`;
}
