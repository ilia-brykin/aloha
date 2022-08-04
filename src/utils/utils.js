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

export function setFocusToElement(selector) {
  const ELEMENT = document.querySelector(selector);
  if (ELEMENT) {
    ELEMENT.focus();
  }
}
