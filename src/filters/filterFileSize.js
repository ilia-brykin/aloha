import filterCurrency from "./filterCurrency";
import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";
import {
  isNumber,
  toUpper,
} from "lodash-es";

export default function(value, { units = "kb", sourceUnits = "b", digits = 2 } = {}) {
  const KB = 1024;
  const UNITS_ORDER = [
    "b",
    "kb",
    "mb",
    "gb",
    "tb",
    "pb",
    "eb",
    "zb",
    "yb",
  ];
  const INDEX_SOURCE_UNITS = UNITS_ORDER.indexOf(sourceUnits);
  let indexUnits = UNITS_ORDER.indexOf(units);
  if (INDEX_SOURCE_UNITS === -1) {
    return "";
  }
  const VALUE_IN_BYTES = value * Math.pow(KB, INDEX_SOURCE_UNITS);
  if (indexUnits === -1) {
    indexUnits = Math.floor(Math.log(VALUE_IN_BYTES) / Math.log(KB));
    units = UNITS_ORDER[indexUnits];
  }

  const UNITS_TRANSLATED = getTranslatedText({ placeholder: `_A_FILE_SIZE_${ toUpper(units) }_` });

  if (!isNumber(value) || value === 0) {
    return filterCurrency(0, { suffix: UNITS_TRANSLATED, digits });
  }
  if (INDEX_SOURCE_UNITS === indexUnits) {
    return filterCurrency(value, { suffix: UNITS_TRANSLATED, digits });
  }
  const size = VALUE_IN_BYTES / Math.pow(KB, Math.abs(indexUnits));

  return filterCurrency(size, { suffix: UNITS_TRANSLATED, digits });
}
