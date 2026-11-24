import {
  computed,
  toRef,
} from "vue";

import ATranslationAPI from "../../../ATranslation/compositionAPI/ATranslationAPI";
import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  isoWeek,
} from "../utils/dateUtils";

const BIDI_MARKS = /[‎‏؜]/g;
const SAMPLE = new Date(2025, 10, 22);

// latin digits also for Arabic, so the user can type what he sees
export function getIntlLocale(locale) {
  return `${ locale || "de" }-u-nu-latn`;
}

// order of day, month and year and the separator, e.g. de: ["day", "month", "year"] and "."
export function getDateOrder(locale) {
  const PARTS = new Intl.DateTimeFormat(getIntlLocale(locale), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(SAMPLE);
  const ORDER = PARTS.filter(part => ["day", "month", "year"].includes(part.type)).map(part => part.type);
  const LITERAL = PARTS.find(part => part.type === "literal");
  const SEPARATOR = LITERAL ? LITERAL.value.replace(BIDI_MARKS, "").trim() : "";
  return {
    order: ORDER.length === 3 ? ORDER : ["day", "month", "year"],
    separator: SEPARATOR || ".",
  };
}

// "day": all parts, "month": month and year, "year": only the year
export function getOrderOfUnit(order, unit = "day") {
  if (unit === "year") {
    return ["year"];
  }
  return unit === "month" ? order.filter(part => part !== "day") : order;
}

export function formatDateParts(date, { order, separator }, unit = "day") {
  if (!date) {
    return "";
  }
  return getOrderOfUnit(order, unit).map(part => part === "year" ? `${ date.year }`.padStart(4, "0") : `${ date[part] }`.padStart(2, "0")).join(separator);
}

export function formatTimeParts(time, withSeconds = false) {
  if (!time) {
    return "";
  }
  const pad = value => `${ value || 0 }`.padStart(2, "0");
  return `${ pad(time.hours) }:${ pad(time.minutes) }${ withSeconds ? `:${ pad(time.seconds) }` : "" }`;
}

export function getUnit(mode) {
  return ["month", "week", "year"].includes(mode) ? mode : "day";
}

export default function LocaleAPI(props) {
  const locale = toRef(props, "locale");
  const mode = toRef(props, "mode");
  const {
    language,
  } = ATranslationAPI();

  const localeLocal = computed(() => locale.value || language.value);
  const intlLocale = computed(() => getIntlLocale(localeLocal.value));
  const dateOrder = computed(() => getDateOrder(localeLocal.value));

  const unit = computed(() => getUnit(mode.value));

  // "KW 10/2025" for a week
  const formatDate = (date, unitLocal = unit.value) => {
    if (date && unitLocal === "week") {
      const WEEK = isoWeek(date);
      return `${ getTranslatedText({ placeholder: "_A_DATE_INPUT_WEEK_SHORT_" }) } ${ `${ WEEK.week }`.padStart(2, "0") }/${ WEEK.year }`;
    }
    return formatDateParts(date, dateOrder.value, unitLocal);
  };

  // "TT.MM.JJJJ" in German, "DD/MM/YYYY" in English (UK)
  const dateFormatHint = computed(() => {
    const LETTERS = {
      day: getTranslatedText({ placeholder: "_A_DATE_INPUT_DAY_LETTERS_" }),
      month: getTranslatedText({ placeholder: "_A_DATE_INPUT_MONTH_LETTERS_" }),
      year: getTranslatedText({ placeholder: "_A_DATE_INPUT_YEAR_LETTERS_" }),
    };
    if (unit.value === "week") {
      return `${ getTranslatedText({ placeholder: "_A_DATE_INPUT_WEEK_SHORT_" }) } ${ getTranslatedText({ placeholder: "_A_DATE_INPUT_WEEK_LETTERS_" }) }/${ LETTERS.year }`;
    }
    return getOrderOfUnit(dateOrder.value.order, unit.value).map(part => LETTERS[part]).join(dateOrder.value.separator);
  });

  // "Saturday, 22 November 2025" for the cells of the calendar and the button
  const formatDateLong = date => {
    if (!date) {
      return "";
    }
    return new Intl.DateTimeFormat(intlLocale.value, {
      dateStyle: "full",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(date.year, date.month - 1, date.day)));
  };

  const formatMonthTitle = ({ year, month }) => {
    return new Intl.DateTimeFormat(intlLocale.value, {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(year, month - 1, 1)));
  };

  const formatMonthName = (month, style = "short") => {
    return new Intl.DateTimeFormat(intlLocale.value, {
      month: style,
      timeZone: "UTC",
    }).format(new Date(Date.UTC(2025, month - 1, 1)));
  };

  // 0 = Sunday, like Date.getDay()
  const getWeekdayName = (weekday, style) => {
    // 2025-11-23 is a Sunday
    return new Intl.DateTimeFormat(intlLocale.value, {
      weekday: style,
      timeZone: "UTC",
    }).format(new Date(Date.UTC(2025, 10, 23 + weekday)));
  };

  return {
    dateFormatHint,
    dateOrder,
    formatDate,
    formatDateLong,
    formatMonthName,
    formatMonthTitle,
    getWeekdayName,
    intlLocale,
    unit,
  };
}
