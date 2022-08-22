import {
  isNil,
} from "lodash-es";

export default function(value, { emptyValue = "-" } = {}) {
  if (isNil(value) || value === "") {
    return emptyValue;
  }
  return value;
}
