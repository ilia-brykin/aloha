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
 * @param {any} value - The value to translate.
 * @param {object} options - The translation options.
 * @param {string} options.trueValue - The text representation for true values. Default is "_YES_".
 * @param {string} options.falseValue - The text representation for false values. Default is "_NO_".
 * @param {boolean} options.useNil - Flag indicating whether to return an empty string for null or undefined values. Default is true.
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
