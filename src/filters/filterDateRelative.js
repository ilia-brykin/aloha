import ATranslationAPI from "../ATranslation/compositionAPI/ATranslationAPI";

import moment from "moment";
import {
  isNil,
} from "lodash-es";

moment.suppressDeprecationWarnings = true;

const UNITS = [
  { unit: "year", seconds: 31536000 },
  { unit: "month", seconds: 2592000 },
  { unit: "week", seconds: 604800 },
  { unit: "day", seconds: 86400 },
  { unit: "hour", seconds: 3600 },
  { unit: "minute", seconds: 60 },
  { unit: "second", seconds: 1 },
];

/**
 * Formats a date relative to now, for example "vor 5 Minuten" or "in 2 Tagen", in the current language.
 *
 * @param {*} value - The date
 * @param {Object} [options] - Optional parameters
 * @param {*} [options.now=new Date()] - The date the value is compared to
 * @param {string} [options.numeric="auto"] - "auto" ("gestern", "morgen") or "always" ("vor 1 Tag", "in 1 Tag")
 *
 * @returns {string} - The relative date.
 */
export default function(value, { now = new Date(), numeric = "auto" } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  const DATE = moment(String(value));
  if (!DATE.isValid()) {
    return value;
  }

  const SECONDS = DATE.diff(moment(now), "seconds");
  const { unit, seconds } = UNITS.find(item => Math.abs(SECONDS) >= item.seconds) || UNITS[UNITS.length - 1];
  const { language } = ATranslationAPI();

  return new Intl.RelativeTimeFormat(language.value || undefined, { numeric }).format(Math.trunc(SECONDS / seconds), unit);
}
