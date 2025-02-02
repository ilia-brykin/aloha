import {
  escapeRegExp,
  isNil,
} from "lodash-es";

/**
 * Replace all occurrences of searchModel in value and wrap them with a specified HTML tag.
 *
 * @param {string} value - The input string to be modified.
 * @param {Object} [options] - Optional parameters.
 * @param {string} [options.searchModel=""] - The string to search.
 * @param {string} [options.searchClass="a_search_highlight"] - The CSS class to assign to the wrapping tag.
 * @param {string} [options.tag="mark"] - The HTML tag to use instead of mark.
 * @param {Array<string>} [options.attributes=[]] - List of additional attributes in the format ['key="value"', 'key2="value2"'].
 * @param {boolean} [options.caseSensitive=false] - Whether the search should be case-sensitive.
 * @param {boolean} [options.isHtml=false] - Whether to interpret value as HTML and search inside text content only.
 *
 * @returns {string} - The modified string with replaced occurrences wrapped in the specified tag.
 */
export default function(value, {
  searchModel = "",
  searchClass = "a_search_highlight",
  tag = "mark",
  attributes = [],
  caseSensitive = false,
  isHtml = false,
} = {}) {
  if (!value) {
    return "";
  }
  if (searchModel === "" || isNil(searchModel)) {
    return value;
  }

  const FLAGS = caseSensitive ? "g" : "gi";
  const re = new RegExp(escapeRegExp(searchModel), FLAGS);
  const attributesString = attributes.length ? ` ${ attributes.join(" ") }` : "";

  if (!isHtml) {
    return value.replace(re, val => wrapMatch({
      value: val,
      tag,
      searchClass,
      attributesString,
    }));
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "text/html");

  highlightTextNodes({
    node: doc.body,
    tag,
    searchClass,
    re,
    attributesString,
  });

  return doc.body.innerHTML;
}

function wrapMatch({ value, tag, searchClass, attributesString }) {
  return `<${ tag } class="${ searchClass }"${ attributesString }>${ value }</${ tag }>`;
}


function highlightTextNodes({ node, re, tag, searchClass, attributesString }) {
  if (node.nodeType === Node.TEXT_NODE) {
    const matches = node.nodeValue.match(re);
    if (matches) {
      const parent = node.parentNode;
      const html = node.nodeValue.replace(re, val => wrapMatch({
        value: val,
        tag,
        searchClass,
        attributesString,
      }));
      const tempContainer = document.createElement("span");
      tempContainer.innerHTML = html;

      while (tempContainer.firstChild) {
        parent.insertBefore(tempContainer.firstChild, node);
      }
      parent.removeChild(node);
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    Array.from(node.childNodes).forEach(_node => highlightTextNodes({
      node: _node,
      re,
      tag,
      searchClass,
      attributesString,
    }));
  }
}
