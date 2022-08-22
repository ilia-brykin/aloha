import {
  gettext,
  replaceText,
} from "../functions/utils";

import moment from "moment";
import {
  isNil,
  toInteger,
} from "lodash-es";

export default function(value, { format = "days" } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  if (format === "auto") {
    return moment(String(value)).fromNow(true);
  } else if (format === "days") {
    const DAYS = toInteger(moment.duration(moment().diff(moment(String(value)))).as("days"));
    switch (DAYS) {
    case 0:
      return gettext("_TXT_FILTER_FROM_NOW_FORMAT_ZERO_DAYS_");
    case 1:
      return gettext("_TXT_FILTER_FROM_NOW_FORMAT_ONE_DAYS_");
    default:
      return replaceText({
        text: gettext("_TXT_FILTER_FROM_NOW_FORMAT_DAYS_{{days}}_"),
        object: {
          days: toInteger(DAYS)
        },
      });
    }
  }
}
