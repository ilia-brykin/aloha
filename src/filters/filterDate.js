import moment from "moment";
import {
  isFunction,
  isNil,
} from "lodash-es";

moment.suppressDeprecationWarnings = true;

// TODO: Hier können wir die andere Formate für andere Sprachen definieren.
const DATE_FORMAT = {
  date: () => "DD.MM.YYYY",
  datetime: () => "DD.MM.YYYY HH:mm",
  fullDate: () => "dddd, DD. MMMM YYYY, HH:mm",
  time: () => "HH:mm",
  timeWithSeconds: () => "HH:mm:ss",
};

export default function(value, { format = "date" } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  const DATE = moment(String(value));
  if (!DATE.isValid()) {
    return value;
  }
  if (isFunction(DATE_FORMAT[format])) {
    format = DATE_FORMAT[format]();
  }
  return DATE.format(format);
}
