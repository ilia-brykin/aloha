import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";

import {
  isNil,
} from "lodash-es";

/**
 * Translates a value into a corresponding text representation using specified true and false values,
 * based on the evaluation of the value in a boolean context.
 *
 * @param {*} value - The value to translate
 * @param {Object} [options] - Optional parameters
 * @param {string} [options.trueValue="_YES_"] - The text representation for true values
 * @param {string} [options.falseValue="_NO_"] - The text representation for false values
 * @param {boolean} [options.useNil=true] - Flag indicating whether to return an empty string for null or undefined values
 *
 * @returns {string} - The translated text representation.
 */
export default function(value, {
  trueValue = "_YES_",
  falseValue = "_NO_",
  useNil = true,
} = {}) {
  if (useNil && isNil(value)) {
    return "";
  }
  return value ?
    getTranslatedText({ placeholder: trueValue }) :
    getTranslatedText({ placeholder: falseValue });
}
