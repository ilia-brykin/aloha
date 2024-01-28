import {
  isNil,
  isString,
} from "lodash-es";

export default function(value, { linkClass } = {}) {
  if (isNil(value) ||
    value === "" ||
    !isString(value) ||
    !/^\S+@\S+\.\S+$/.test(value)) {
    return "";
  }
  let classAttribut = "";
  if (linkClass) {
    classAttribut = ` class="${ linkClass }"`;
  }
  return `<a href="mailto:${ value }"${ classAttribut }>${ value }</a>`;
}
