import {
  isNil,
  toString,
} from "lodash-es";

export default function(value, { limit = 30, maxThreeDots = true } = {}) {
  if (isNil(value)) {
    return "";
  }
  const valueString = toString(value);
  if (valueString.length <= limit) {
    return valueString;
  }

  if (maxThreeDots) {
    const TEXT_LESS = valueString.slice(0, limit).trimEnd();
    let pointsSuffix = "...";
    let hasPoint = true;
    for (let i = TEXT_LESS.length - 1; i > TEXT_LESS.length - 4; i--) {
      const SYMBOL = TEXT_LESS[i];
      if (SYMBOL === ".") {
        if (hasPoint) {
          pointsSuffix = pointsSuffix.slice(0, -1);
        } else {
          break;
        }
        hasPoint = true;
      } else {
        break;
      }
    }
    return `${ TEXT_LESS }${ pointsSuffix }`;
  }
  return `${ valueString.substring(0, limit) }...`;
}
