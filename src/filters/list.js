import {
  isArray,
  forEach,
  get, isFunction,
} from "lodash-es";

export default filterList;

function filterList(value, { isHtml = true, listClass = "a_list_without_styles", keyLabel = "", keyLabelCallback, isListTree = false } = {}) {
  if (!isArray(value)) {
    return value;
  }
  if (!value.length) {
    return "";
  }
  let result = "";
  if (isHtml === false || isHtml === "false") {
    forEach(value, (item, index) => {
      let itemText = "";
      if (isFunction(keyLabelCallback)) {
        itemText = keyLabelCallback({ item, itemIndex: index });
      } else {
        itemText = keyLabel ? get(item, keyLabel) : item;
      }
      result += `${ index !== 0 ? ", " : "" }${ itemText }`;
    });
    return result;
  }
  forEach(value, (item, index) => {
    let itemLocal;
    if (isFunction(keyLabelCallback)) {
      itemLocal = keyLabelCallback({ item, itemIndex: index });
    } else {
      itemLocal = keyLabel ? get(item, keyLabel) : item;
    }
    if (isListTree && isArray(itemLocal)) {
      if (itemLocal.length) {
        result += `<li>`;
        forEach(itemLocal, itemChild => {
          if (isArray(itemChild)) {
            result += filterList(itemChild, { isHtml, listClass, keyLabel, keyLabelCallback, isListTree });
          } else {
            result += itemChild;
          }
        });
        result += `</li>`;
      }
    } else {
      result += `<li>${ itemLocal }</li>`;
    }
  });
  return `<ul${ listClass ? ` class="${ listClass }"` : "" }>${ result }</ul>`;
}
