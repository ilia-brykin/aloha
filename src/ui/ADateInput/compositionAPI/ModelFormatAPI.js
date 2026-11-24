import {
  computed,
  toRef,
} from "vue";

import {
  fromIsoAny,
  fromIsoTime,
  isValidDateParts,
  isValidTimeParts,
  toIsoTime,
  toIsoUnit,
} from "../utils/dateUtils";
import {
  escapeRegExp,
  isDate,
  isNumber,
  isString,
} from "lodash-es";

const TOKENS = /YYYY|MM|DD|HH|mm|ss/g;
const TOKEN_PARTS = { YYYY: "year", MM: "month", DD: "day", HH: "hours", mm: "minutes", ss: "seconds" };

export function formatByTokens(parts, format) {
  return format.replace(TOKENS, token => `${ parts[TOKEN_PARTS[token]] ?? 0 }`.padStart(token === "YYYY" ? 4 : 2, "0"));
}

// "DD.MM.YYYY HH:mm" → { year, month, day, hours, minutes, seconds }
export function parseByTokens(value, format) {
  const ORDER = [];
  const SOURCE = format.split(TOKENS).map(escapeRegExp);
  const TOKENS_IN_FORMAT = format.match(TOKENS) || [];
  let pattern = SOURCE[0];
  TOKENS_IN_FORMAT.forEach((token, index) => {
    ORDER.push(TOKEN_PARTS[token]);
    pattern += `(\\d{${ token === "YYYY" ? 4 : 2 }})${ SOURCE[index + 1] }`;
  });
  const MATCH = new RegExp(`^${ pattern }$`).exec(`${ value }`.trim());
  if (!MATCH) {
    return null;
  }
  const PARTS = { year: 1970, month: 1, day: 1, hours: 0, minutes: 0, seconds: 0 };
  ORDER.forEach((part, index) => {
    PARTS[part] = +MATCH[index + 1];
  });
  return isValidDateParts(PARTS) && isValidTimeParts(PARTS) ? PARTS : null;
}

/**
 * The component works with local ISO strings ("2025-03-05", "2025-03-05T14:30", "14:30", "2025-03", "2025", "2025-W10").
 * This API converts them to the model and back: modelFormat "iso" (default), "timestamp", "date" (Date)
 * or tokens ("DD.MM.YYYY HH:mm"); utc: an ISO model with time is a moment in UTC ("2025-03-05T13:30:00Z").
 */
export default function ModelFormatAPI(props, {
  hasDate = computed(() => true),
  hasTime = computed(() => false),
  unit = computed(() => "day"),
}) {
  const modelFormat = toRef(props, "modelFormat");
  const utc = toRef(props, "utc");
  const withSeconds = toRef(props, "withSeconds");

  const isTimeOnly = computed(() => !hasDate.value);
  const isDateTime = computed(() => hasDate.value && hasTime.value);

  const partsToIso = parts => {
    if (isTimeOnly.value) {
      return toIsoTime(parts, withSeconds.value);
    }
    const DATE = toIsoUnit(parts, unit.value);
    return isDateTime.value ? `${ DATE }T${ toIsoTime(parts, withSeconds.value) }` : DATE;
  };

  const dateToIso = date => {
    if (Number.isNaN(date.getTime())) {
      return null;
    }
    return partsToIso({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  };

  const isoToParts = iso => {
    const TIME = fromIsoTime(iso) || { hours: 0, minutes: 0, seconds: 0 };
    return isTimeOnly.value ? TIME : { ...fromIsoAny(iso), ...TIME };
  };

  const isoToLocalDate = iso => {
    const PARTS = isoToParts(iso);
    return new Date(PARTS.year, PARTS.month - 1, PARTS.day, PARTS.hours, PARTS.minutes, PARTS.seconds);
  };

  const toUtcParts = date => ({
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  });

  // a week has no tokens, a time has no moment
  const formatLocal = computed(() => {
    const FORMAT = modelFormat.value || "iso";
    if (unit.value === "week" && FORMAT !== "timestamp" && FORMAT !== "date") {
      return "iso";
    }
    if (isTimeOnly.value && (FORMAT === "timestamp" || FORMAT === "date")) {
      return "iso";
    }
    return FORMAT;
  });

  const isUtc = computed(() => utc.value && isDateTime.value);

  const toModelValue = iso => {
    if (!iso) {
      return null;
    }
    const FORMAT = formatLocal.value;
    if (FORMAT === "iso") {
      return isUtc.value ? isoToLocalDate(iso).toISOString().replace(/\.\d{3}Z$/, "Z") : iso;
    }
    if (FORMAT === "timestamp") {
      return isoToLocalDate(iso).getTime();
    }
    if (FORMAT === "date") {
      return isoToLocalDate(iso);
    }
    return formatByTokens(isUtc.value ? toUtcParts(isoToLocalDate(iso)) : isoToParts(iso), FORMAT);
  };

  const fromModelValue = value => {
    if (value === null || value === undefined || value === "") {
      return null;
    }
    if (isNumber(value) || isDate(value)) {
      return dateToIso(new Date(value));
    }
    if (!isString(value)) {
      return null;
    }
    const FORMAT = formatLocal.value;
    if (FORMAT === "iso" || FORMAT === "timestamp" || FORMAT === "date") {
      // an ISO moment with Z or an offset is shown in the local time
      return isUtc.value && /(Z|[+-]\d{2}:?\d{2})$/.test(value) ? dateToIso(new Date(value)) : value;
    }
    const PARTS = parseByTokens(value, FORMAT);
    if (!PARTS) {
      return null;
    }
    if (isUtc.value) {
      return dateToIso(new Date(Date.UTC(PARTS.year, PARTS.month - 1, PARTS.day, PARTS.hours, PARTS.minutes, PARTS.seconds)));
    }
    return partsToIso(PARTS);
  };

  return {
    fromModelValue,
    toModelValue,
  };
}
