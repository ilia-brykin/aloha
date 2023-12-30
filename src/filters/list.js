import {
  isArray,
  forEach,
  get,
  isFunction,
} from "lodash-es";

export default filterList;

function filterList(value, {
  isHtml = true,
  listClass = "a_list_without_styles",
  keyLabel = "",
  keyLabelCallback,
  keyChildren = "",
  isSimpleArray = false,
  separator = ", ",
  isChild = false,
} = {}) {
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
      if (isSimpleArray) {
        itemText = item;
      } else if (isFunction(keyLabelCallback)) {
        itemText = keyLabelCallback({ item, itemIndex: index });
      } else {
        itemText = keyLabel ? get(item, keyLabel) : item;
      }
      let children;
      if (isSimpleArray) {
        if (isArray(itemText)) {
          let itemTextLocal = "";
          forEach(itemText, itemChild => {
            if (isArray(itemChild)) {
              children = itemChild;
            } else {
              itemTextLocal = itemChild;
            }
          });
          itemText = itemTextLocal;
        }
      } else if (keyChildren) {
        children = get(item, keyChildren);
      }

      result += `${ index !== 0 || isChild ? separator : "" }${ itemText }`;

      if (children?.length) {
        result += filterList(children, {
          isChild: true,
          isHtml,
          isSimpleArray,
          keyChildren,
          keyLabel,
          keyLabelCallback,
          separator,
        });
      }
    });
    return result;
  }
  forEach(value, (item, index) => {
    let itemLocal;
    if (isSimpleArray) {
      itemLocal = item;
    } else if (isFunction(keyLabelCallback)) {
      itemLocal = keyLabelCallback({ item, itemIndex: index });
    } else {
      itemLocal = keyLabel ? get(item, keyLabel) : item;
    }
    if (isArray(itemLocal)) {
      if (itemLocal.length) {
        result += `<li>`;
        forEach(itemLocal, itemChild => {
          if (isArray(itemChild)) {
            result += filterList(itemChild, { isHtml, listClass, keyLabel, keyLabelCallback });
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
