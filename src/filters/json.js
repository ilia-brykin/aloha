import {
  isNil,
} from "lodash-es";

export default function(value, { parameter = 2 } = {}) {
  if (isNil(value)) {
    return "";
  }
  return JSON.stringify(value, null, parameter);
}
