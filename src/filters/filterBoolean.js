import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";
import {
  isNil,
} from "lodash-es";

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
