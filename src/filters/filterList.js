import {
  isArray,
  forEach,
  get,
  isFunction, isUndefined,
} from "lodash-es";

export default filterList;

/**
 * Formats an array of values as a list in string or HTML format.
 *
 * @param {Array} value - The array of values to filter
 * @param {Object} [options] - Optional parameters
 * @param {boolean} [options.isChild=false] - Determines if the item is a child item
 * @param {boolean} [options.isHtml=true] - Determines if the result should be in HTML format
 * @param {boolean} [options.isSimpleArray=false] - Determines if the list is a simple array
 * @param {string} [options.keyChildren=""] - The key to access the children of each item
 * @param {string} [options.keyLabel=""] - The key to access the label of each item
 * @param {Function} [options.keyLabelCallback] - The callback function to generate the label for each item
 * @param {string} [options.listClass=""] - The class attribute for the list
 * @param {string} [options.separator=", "] - The separator to use between items
 * @param {string} [options.tag="ul"] - The HTML tag to use for the list
 *
 * @return {string} - The filtered list as a formatted string or HTML.
 */
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

/**
 * Retrieves the text value of an item in a list.
 *
 * @param {Object} options - Parameters
 * @param {string} options.keyLabel - The property name used to retrieve the value from an item if it is an object
 * @param {Function} options.keyLabelCallback - A callback function used to retrieve the value from an item. It takes an object with properties 'item' and 'itemIndex'
 * @param {number} options.index - The index of the item in the list
 * @param {*} options.item - The item from which to retrieve the text value
 * @param {boolean} options.isSimpleArray - Indicates whether the list is a simple array or an array of objects
 *
 * @return {string} The text value of the item. If the item is undefined, an empty string is returned.
 */
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

/**
 * Returns an HTML class attribute string.
 *
 * @param {Object} options - Parameters
 * @param {string} options.listClass - The value of the "listClass" property
 *
 * @return {string} - The class attribute string.
 */
function getAttributClass({ listClass }) {
  return listClass ? ` class="${ listClass }"` : "";
}
