import {
  isArray,
  forEach,
  get,
} from "lodash-es";

export default filterList;

function filterList(value, { isHtml = true, listClass = "a_list_without_styles", keyLabel = "", isListTree = false } = {}) {
  if (!isArray(value)) {
    return value;
  }
  if (!value.length) {
    return "";
  }
  let result = "";
  if (isHtml === false || isHtml === "false") {
    forEach(value, (item, index) => {
      const ITEM_TEXT = keyLabel ? get(item, keyLabel) : item;
      result += `${ index !== 0 ? ", " : "" }${ ITEM_TEXT }`;
    });
    return result;
  }
  forEach(value, item => {
    const ITEM_TEXT = keyLabel ? get(item, keyLabel) : item;
    if (isListTree && isArray(ITEM_TEXT)) {
      result += `<li>${ ITEM_TEXT }${ filterList(ITEM_TEXT, { isHtml, listClass, keyLabel, isListTree }) }</li>`;
    } else {
      result += `<li>${ ITEM_TEXT }</li>`;
    }
  });
  return `<ul${ listClass ? ` class="${ listClass }"` : "" }>${ result }</ul>`;
}
