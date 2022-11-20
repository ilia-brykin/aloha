import {
  get,
  isPlainObject,
  isString,
} from "lodash-es";

export default function UtilsAPI() {
  return {
    getTranslatedText,
    isPlaceholderTranslate,
    replaceText,
    spliceString,
  };
}

export function isPlaceholderTranslate(text = "") {
  return !(!isString(text) ||
    text[0] !== "_" ||
    text[text.length - 1] !== "_");
}

export function getTranslatedText({ placeholder, translationObj, extra }) {
  if (extra) {
    return replaceText({
      text: translationObj[placeholder],
      object: extra,
    });
  }
  return translationObj[placeholder];
}

function replaceText({ text = "", object }) {
  if (!isPlainObject(object)) {
    return text;
  }
  let textClone = text;
  let searchIndexStart = 0;
  while (true) {
    const firstIndex = textClone.indexOf("{{", searchIndexStart);
    const lastIndex = textClone.indexOf("}}", searchIndexStart);

    if (firstIndex === -1 || lastIndex === -1) {
      break;
    }

    const PATH = textClone.slice(firstIndex + 2, lastIndex).trim();
    const valueFromObject = get(object, PATH);

    textClone = spliceString({
      text: textClone,
      replaceText: valueFromObject,
      firstIndex,
      lastindex: lastIndex + 2,
    });
    searchIndexStart = firstIndex + `${ valueFromObject }`.length;
  }
  return textClone;
}

function spliceString({
  text = "",
  replaceText = "",
  firstIndex,
  lastindex,
}) {
  return `${ text.slice(0, firstIndex) }${ replaceText }${ text.slice(lastindex, text.length) }`;
}
