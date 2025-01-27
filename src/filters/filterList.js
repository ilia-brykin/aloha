import {
  forEach,
  get,
  isArray,
  isFunction, isUndefined,
} from "lodash-es";

export default filterList;

/**
 * Formats an array of values as a list in string or HTML format.
 * This function allows for complex list generation with customizable
 * options for HTML tags, classes, separators, and even custom label generation
 * through a callback function.
 *
 * @param {Array} value - The array of values to be processed into a list. Each value in the array
 *                        can be a simple string or an object that requires processing.
 * @param {Object} [options] - Optional parameters to customize the list output.
 * @param {string} [options.defaultValue=""] - The default return value if the input array is empty,
 *                                             not an array, or the processing results in an empty string.
 * @param {boolean} [options.isChild=false] - Determines if the current processing item is a child item,
 *                                            affecting the prefix or format of the item in the list.
 * @param {boolean} [options.isHtml=true] - Determines if the output should be formatted as HTML. When
 *                                          set to false, the list is returned as a plain text string.
 * @param {boolean} [options.isSimpleArray=false] - Indicates if the list consists of simple strings (true)
 *                                                  or complex objects (false) that require key or callback processing.
 * @param {string} [options.keyChildren=""] - The property name to access child items within an object
 *                                            if the array contains nested lists or hierarchical data.
 * @param {string} [options.keyLabel=""] - The property name used to retrieve the display label from an
 *                                         item object. Ignored if `isSimpleArray` is true.
 * @param {Function} [options.keyLabelCallback] - A callback function to generate the label for each item,
 *                                                providing custom label logic. The function is passed an object
 *                                                containing `item` and its `index` in the array.
 * @param {string} [options.listClass=""] - The class attribute for the HTML list element. Only applicable
 *                                          when `isHtml` is true.
 * @param {string} [options.separator] - The separator string to use between items in a plain text list.
 *                                       Default is a comma followed by a space if undefined.
 * @param {string} [options.separatorHtml=""] - The HTML string to use as a separator between items in an
 *                                              HTML formatted list. This allows for custom HTML, such as
 *                                              line breaks or dividers.
 * @param {string} [options.tag="ul"] - The HTML tag to use for the list container. Common values are "ul"
 *                                      for unordered lists or "ol" for ordered lists, but any container tag
 *                                      can be used.
 *
 * @return {string} - The processed list as a formatted string or HTML, depending on the options. If the input
 *                    does not meet the criteria for processing (e.g., not an array), the `defaultValue` is returned.
 */

function filterList(value, {
  defaultValue = "",
  isChild = false,
  isHtml = true,
  isSimpleArray = false,
  keyChildren = "",
  keyLabel = "",
  keyLabelCallback,
  lastSeparator,
  listClass = "",
  separator,
  separatorHtml = "",
  tag = "ul",
} = {}) {
  if (!isArray(value)) {
    return defaultValue;
  }
  if (!value.length) {
    return defaultValue;
  }
  let result = "";
  if (isHtml === false || isHtml === "false") {
    if (isUndefined(separator)) {
      separator = ", ";
    }
    forEach(value, (item, index) => {
      let itemText = getItemText({
        keyLabel, keyLabelCallback, index, item, isSimpleArray,
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

      if (!isUndefined(lastSeparator) && index === value.length - 1) {
        result += `${ index !== 0 || isChild ? lastSeparator : "" }${ itemText }`;
      } else {
        result += `${ index !== 0 || isChild ? separator : "" }${ itemText }`;
      }

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
    const isLastItem = value.length === index + 1;

    const itemLocal = getItemText({
      keyLabel, keyLabelCallback, index, item, isSimpleArray,
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
    if (separator && !isLastItem) {
      itemText += separator;
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

    if (separatorHtml && !isLastItem) {
      itemText += separatorHtml;
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
