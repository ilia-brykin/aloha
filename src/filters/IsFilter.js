import date from "./date";
import currency from "./currency";
import FileSize from "./FileSize";
import FromNow from "./FromNow";
import KeyValue from "./KeyValue";
import boolean from "./boolean";
import limitTo from "./limitTo";
import trunc from "./trunc";
import iban from "./iban";
import Email from "./Email";
import Link from "./Link";
import DefaultForEmpty from "./DefaultForEmpty";
import spaced from "./spaced";
import list from "./list";

import {
  isArray
} from "lodash-es";

const FILTERS = {
  date,
  currency,
  boolean,
  trunc,
  iban,
  "file-size": FileSize,
  "from-now": FromNow,
  "key-value": KeyValue,
  "limit-to": limitTo,
  email: Email,
  link: Link,
  "default-for-empty": DefaultForEmpty,
  spaced,
  list,
};

export default function(value, filterName, param) {
  if (!filterName || !FILTERS[filterName]) {
    return value;
  }
  if (!isArray(param) && /^\[.*\]$/.test(param)) {
    try {
      const PARAM_JSON = JSON.parse(param);
      if (isArray(PARAM_JSON)) {
        param = PARAM_JSON;
      }
    } catch (SyntaxError) {
      console.warn("Filterparameter fehlerhaft: ", param);
    }
  }
  if (!isArray(param)) {
    param = [param];
  }
  return FILTERS[filterName](value, ...param);
}
