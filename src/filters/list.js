import {
  isArray,
  forEach,
} from "lodash-es";

export default function(value, isHtml = true, listClass = "list-unstyled") {
  if (!isArray(value)) {
    return value;
  }
  if (!value.length) {
    return "";
  }
  let result = "";
  if (isHtml === false || isHtml === "false") {
    forEach(value, (item, index) => {
      result += `${ index !== 0 ? ", " : "" }${ item }`;
    });
    return result;
  }
  forEach(value, item => {
    result += `<li>${ item }</li>`;
  });
  return `<ul${ listClass ? ` class="${ listClass }"` : "" }>${ result }</ul>`;
}
