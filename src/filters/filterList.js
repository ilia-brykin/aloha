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
      let itemText = getItemText({
        keyLabel, keyLabelCallback, index, item, isSimpleArray
      });

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
    const itemLocal = getItemText({
      keyLabel, keyLabelCallback, index, item, isSimpleArray
    });

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

    result += `<li>${ itemText }</li>`;
  });
  return `<${ tag }${ getAttributClass({ listClass }) }>${ result }</${ tag }>`;
}

function getItemText({ keyLabel, keyLabelCallback, index, item, isSimpleArray }) {
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

  return itemLocal;
}

function getAttributClass({ listClass }) {
  return listClass ? ` class="${ listClass }"` : "";
}
