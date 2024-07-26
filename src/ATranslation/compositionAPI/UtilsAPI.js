import {
  isTranslate,
  timeTranslationLastChanged,
  translation,
} from "./ATranslationAPI";

import {
  translateConfig,
} from "../../plugins/AI18nPlugin";
import {
  get,
  isFunction,
  isNil,
  isPlainObject,
  isString,
} from "lodash-es";

export default function UtilsAPI() {
  return {
    getTranslatedText,
    getTranslationAttributes,
    isPlaceholderTranslate,
    replaceText,
    spliceString,
  };
}

/**
 * Checks if a given text is a placeholder translation.
 *
 * @param {string} text - The text to check.
 * @return {boolean} - True if the text is a placeholder translation, false otherwise.
 */
export function isPlaceholderTranslate(text = "") {
  return !(!isString(text) ||
    text[0] !== "_" ||
    text[text.length - 1] !== "_");
}

/**
 * Retrieves the translated text for a given placeholder.
 *
 * @param {object} options - The options object.
 * @param {string} options.placeholder - The placeholder text to be translated.
 * @param {object} [options.translationObj=translation] - The translation object to use.
 * @param {object} [options.extra] - Optional additional data to be used in text replacement.
 * @param {boolean} [options.alwaysTranslate=false] - If true, forces translation regardless of the isTranslate.value flag.
 *
 * @return {string} The translated text for the given placeholder.
 */
export function getTranslatedText({ placeholder, translationObj = translation, extra, alwaysTranslate = false }) {
  if (!translationObj || !timeTranslationLastChanged.value) {
    return placeholder;
  }

  let textFromTranslation;
  if (!alwaysTranslate && !isTranslate.value) {
    textFromTranslation = placeholder;
  } else {
    textFromTranslation = isNil(translationObj[placeholder]) ? placeholder : translationObj[placeholder];
  }

  if (extra) {
    return replaceText({
      text: textFromTranslation,
      object: extra,
    });
  }

  return textFromTranslation;
}

/**
 * Replaces placeholders in a text with corresponding values from an object.
 * If a translation configuration is available, it uses the `replaceText` method
 * from the configuration to perform the replacement.
 *
 * @param {object} options - The options for replacement.
 * @param {string} options.text - The text containing placeholders.
 * @param {object} options.object - The object containing values for placeholders.
 * @return {string} - The text with replaced placeholders.
 */
function replaceText({ text = "", object }) {
  if (isFunction(translateConfig.value?.replaceText)) {
    return translateConfig.value?.replaceText({ text, object });
  }
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

/**
 * Splices a given text by replacing a substring with a new string.
 *
 * @param {Object} params - The parameters for the splicing
 * @param {string} params.text - The original text to be spliced
 * @param {string} params.replaceText - The new string to replace the substring
 * @param {number} params.firstIndex - The index where the replacement starts
 * @param {number} params.lastIndex - The index where the replacement ends
 *
 * @return {string} The spliced text with the replaced substring
 */
function spliceString({
  text = "",
  replaceText = "",
  firstIndex,
  lastindex,
}) {
  return `${ text.slice(0, firstIndex) }${ replaceText }${ text.slice(lastindex, text.length) }`;
}

export function getTranslationAttributes({ attr = "", value = "", translation = "", isTranslate = true }) {
  const ATTRIBUTES = {};
  if (!isNil(translation)) {
    ATTRIBUTES[attr] = translation;
  }
  if (isTranslate) {
    ATTRIBUTES[`data-translate-${ attr }`] = value;
  }

  return ATTRIBUTES;
}
