import moment from "moment";
import {
  isFunction,
  isNil,
} from "lodash-es";

// TODO: Hier können wir die andere Formate für andere Sprachen definieren.
const DATE_FORMAT = {
  date: () => "DD.MM.YYYY",
  datetime: () => "DD.MM.YYYY HH:mm",
  fullDate: () => "dddd, DD. MMMM YYYY, HH:mm",
  time: () => "HH:mm",
  timeWithSeconds: () => "HH:mm:ss",
};

export default function(value, { parameter = "date" } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  if (isFunction(DATE_FORMAT[parameter])) {
    parameter = DATE_FORMAT[parameter]();
  }
  return moment(String(value)).format(parameter);
}
