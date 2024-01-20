import {
  isNil,
} from "lodash-es";

export default function(value, { linkClass } = {}) {
  if (isNil(value) || value === "" || typeof value !== 'string' || !/^\S+@\S+\.\S+$/.test(value)) {
    return "";
  }
  let classAttribut = "";
  if (linkClass) {
    classAttribut = ` class="${ linkClass }"`;
  }
  return `<a href="mailto:${ value }"${ classAttribut }>${ value }</a>`;
}
