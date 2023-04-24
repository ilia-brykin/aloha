import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";
import {
  isNil,
} from "lodash-es";

export default function(value, {
  trueValue = "_YES_",
  falseValue = "_NO_",
  isNilUsed = true,
} = {}) {
  if (isNilUsed && isNil(value)) {
    return "";
  }
  return value ?
    getTranslatedText({ placeholder: trueValue }) :
    getTranslatedText({ placeholder: falseValue });
}
