import filterCurrency from "./filterCurrency";
import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";
import {
  isNumber,
  toUpper,
} from "lodash-es";

const KB = 1024;
const UNITS_ORDER = [
  "b",
  "kb",
  "mb",
  "gb",
  "tb",
];

export default function(value, { units = "kb", sourceUnits = "b", digits = 2 } = {}) {
  const INDEX_SOURCE_UNITS = UNITS_ORDER.indexOf(sourceUnits);
  const INDEX_UNITS = UNITS_ORDER.indexOf(units);
  if (INDEX_SOURCE_UNITS === -1 ||
    INDEX_UNITS === -1) {
    return "";
  }

  const UNITS_TRANSLATED = getTranslatedText({ placeholder: `_A_FILE_SIZE_${ toUpper(units) }_` });

  if (!isNumber(value) || value === 0) {
    return filterCurrency(0, { suffix: UNITS_TRANSLATED, digits });
  }
  if (INDEX_SOURCE_UNITS === INDEX_UNITS) {
    return filterCurrency(value, { suffix: UNITS_TRANSLATED, digits });
  }
  const DIFF_UNITS = INDEX_SOURCE_UNITS - INDEX_UNITS;
  let size = 0;
  if (DIFF_UNITS < 0) {
    size = value / Math.pow(KB, Math.abs(DIFF_UNITS));
  } else {
    size = value * Math.pow(KB, DIFF_UNITS);
  }

  return filterCurrency(size, { suffix: UNITS_TRANSLATED, digits });
}
