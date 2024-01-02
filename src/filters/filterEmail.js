import {
  isNil,
} from "lodash-es";

export default function(value, { linkClass } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  let classAttribut = "";
  if (linkClass) {
    classAttribut = ` class="${ linkClass }"`;
  }
  return `<a href="mailto:${ value }"${ classAttribut }>${ value }</a>`;
}
