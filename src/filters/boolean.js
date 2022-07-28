import {
  isNil,
} from "lodash-es";

export default function(value, { trueValue = "Ja", falseValue = "Nein", isNilUsed = true } = {}) {
  if (isNilUsed && isNil(value)) {
    return "";
  }
  return value ? trueValue : falseValue;
}
