import DOMPurify from "dompurify";

import {
  isNumber,
  toString,
} from "lodash-es";

export const dompurify = DOMPurify;
export const sanitize = DOMPurify.sanitize;
export function sanitizeLocal(value) {
  return DOMPurify.sanitize(toCorrectFormat(value), { ADD_ATTR: ["target"] });
}

function toCorrectFormat(value) {
  if (isNumber(value)) {
    return toString(value);
  }
  return value;
}

export function getPropByPath(object, path, defaultValue) {
  const _path = Array.isArray(path)
    ? path
    : path.split(".");
  if (object && _path.length) {
    return getPropByPath(object[_path.shift()], _path, defaultValue);
  }
  return object === undefined ? defaultValue : object;
}

export function replaceTextTemplateToASlot(text) {
  if (text === "template") {
    return "a-slot";
  }
  return text;
}

export function concatenateTwoStringsWithSpace({ class1, class2, defaultValue = undefined }) {
  if (class1) {
    if (class2) {
      return `${ class1 } ${ class2 }`;
    }
    return class1;
  }
  if (class2) {
    return class2;
  }
  return defaultValue;
}

export function createListFromObject(obj) { // TODO: filterList, soll gelöscht werden
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return "";
  }

  const items = keys.map(key => `<li>${ obj[key] }</li>`).join("");
  return `<ul class="a_list_without_styles">${ items }</ul>`;
}
