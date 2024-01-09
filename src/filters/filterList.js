import {
  isArray,
  forEach,
  get,
  isFunction, isUndefined,
} from "lodash-es";

export default filterList;

function filterList(value, {
  isChild = false,
  isHtml = true,
  isSimpleArray = false,
  keyChildren = "",
  keyLabel = "",
  keyLabelCallback,
  listClass = "",
  separator = ", ",
  tag = "ul",
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
      if (isUndefined(itemText)) {
        itemText = "";
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
    if (isUndefined(itemLocal)) {
      itemLocal = "";
    }
    let children;
    let itemText = itemLocal;
    if (isSimpleArray) {
      if (isArray(itemLocal)) {
        forEach(itemLocal, itemChild => {
          if (isArray(itemChild)) {
            children = itemChild;
          } else {
            itemText = itemChild;
          }
        });
      }
    } else if (keyChildren) {
      children = get(item, keyChildren);
    }

    if (children?.length) {
      itemText += filterList(children, {
        isChild: true,
        isHtml,
        isSimpleArray,
        keyChildren,
        keyLabel,
        keyLabelCallback,
        listClass,
        tag,
      });
    }

    // if (isArray(itemLocal)) {
    //   if (itemLocal.length) {
    //     result += `<li>`;
    //     forEach(itemLocal, itemChild => {
    //       if (isArray(itemChild)) {
    //         result += filterList(itemChild, { isHtml, listClass, keyLabel, keyLabelCallback });
    //       } else {
    //         result += itemChild;
    //       }
    //     });
    //     result += `</li>`;
    //   }
    // } else {
    //   result += `<li>${ itemLocal }</li>`;
    // }
    result += `<li>${ itemText }</li>`;
  });
  return `<${ tag }${ listClass ? ` class="${ listClass }"` : "" }>${ result }</${ tag }>`;
}
