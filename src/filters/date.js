import moment from "moment";
import {
  isFunction,
  isNil,
} from "lodash-es";

// TODO: Hier können wir die andere Formate für andere Sprachen definieren.
const DATE_FORMAT = {
  date: () => "DD.MM.YYYY",
  datetime: () => "DD.MM.YYYY HH:mm [Uhr]",
  fullDate: () => "dddd, DD. MMMM YYYY, HH:mm [Uhr]",
  time: () => "HH:mm",
  timeWithSeconds: () => "HH:mm:ss",
};

export default function(value, param = "date") {
  if (isNil(value) || value === "") {
    return "";
  }
  if (isFunction(DATE_FORMAT[param])) {
    param = DATE_FORMAT[param]();
  }
  return moment(String(value)).format(param);
}
