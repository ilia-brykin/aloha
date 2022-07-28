import {
  isNil,
  toString,
} from "lodash-es";

export default function(value, param = 30) {
  if (isNil(value)) {
    return "";
  }
  const valueString = toString(value);
  return valueString.length > param ?
    `${ valueString.substring(0, param) }...` :
    valueString;
}
