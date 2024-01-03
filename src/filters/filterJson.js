import {
  isNil,
} from "lodash-es";

export default function(value, { replacer, space = 2 } = {}) {
  if (isNil(value)) {
    return "";
  }
  try {
    return JSON.stringify(value, replacer, space);
  } catch (e) {
    return "";
  }
}
