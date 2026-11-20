import {
  computed,
} from "vue";

import ATranslationAPI from "../../ATranslation/compositionAPI/ATranslationAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

export default function TextsAPI() {
  const { language } = ATranslationAPI();

  const formatDay = computed(() => {
    return new Intl.DateTimeFormat(language.value || undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  });

  const formatDate = computed(() => {
    return new Intl.DateTimeFormat(language.value || undefined, { day: "numeric", month: "short" });
  });

  const formatTime = computed(() => {
    return new Intl.DateTimeFormat(language.value || undefined, { hour: "2-digit", minute: "2-digit" });
  });

  const getEventTimeText = event => {
    return event.isAllDay ? "" : formatTime.value.format(event.start);
  };

  const getDayAriaLabel = (day, { isDisabled = false } = {}) => {
    const PARTS = [formatDay.value.format(day.date)];
    if (day.eventsCount) {
      PARTS.push(getTranslatedText({ placeholder: "_A_CALENDAR_EVENTS_{{count}}_", extra: { count: day.eventsCount } }));
    }
    if (isDisabled) {
      PARTS.push(getTranslatedText({ placeholder: "_A_CALENDAR_DAY_DISABLED_" }));
    }
    return PARTS.join(", ");
  };

  const getDateTimeText = (date, isAllDay) => {
    return `${ formatDate.value.format(date) }${ isAllDay ? "" : ` ${ formatTime.value.format(date) }` }`;
  };

  // The whole time span, also for bars that are cut by the end of the week
  const getEventAriaLabel = event => {
    let end = "";
    if (event.startDay !== event.endDay) {
      end = getDateTimeText(event.end, event.isAllDay);
    } else if (!event.isAllDay && event.end > event.start) {
      end = formatTime.value.format(event.end);
    }
    const RECURRING = event.isRecurring ? `, ${ getTranslatedText({ placeholder: "_A_CALENDAR_RECURRING_" }) }` : "";
    const STATUS = event.status ? `, ${ getTranslatedText({ placeholder: `_A_CALENDAR_STATUS_${ event.status.toUpperCase() }_` }) }` : "";
    return `${ event.label }, ${ getDateTimeText(event.start, event.isAllDay) }${ end ? ` – ${ end }` : "" }${ RECURRING }${ STATUS }`;
  };

  const getMoreText = count => {
    return getTranslatedText({ placeholder: "_A_CALENDAR_MORE_{{count}}_", extra: { count } });
  };

  const getEventTimeRangeText = event => {
    return `${ formatTime.value.format(event.start) } – ${ formatTime.value.format(event.end) }`;
  };

  const getHourText = hour => {
    return formatTime.value.format(new Date(2000, 0, 1, hour));
  };

  const getText = (placeholder, extra) => getTranslatedText({ placeholder, extra });

  // Popover: "Dienstag, 10. März 2026, 09:00 – 10:30" or the days of an event over several days
  const getPopoverTimeText = event => {
    const TIME = date => event.isAllDay ? "" : `, ${ formatTime.value.format(date) }`;
    if (event.startDay !== event.endDay) {
      return `${ formatDay.value.format(event.start) }${ TIME(event.start) } – ${ formatDay.value.format(event.end) }${ TIME(event.end) }`;
    }
    const END = !event.isAllDay && event.end > event.start ? ` – ${ formatTime.value.format(event.end) }` : "";
    return `${ formatDay.value.format(event.start) }${ TIME(event.start) }${ END }`;
  };

  const formatAgendaDay = computed(() => {
    return new Intl.DateTimeFormat(language.value || undefined, { weekday: "short", day: "numeric", month: "short" });
  });

  // Agenda: the day of a group
  const getAgendaDayText = day => formatAgendaDay.value.format(day.date);

  // Agenda: "All day", the days of an event over several days or the time
  const getAgendaTimeText = event => {
    if (event.startDay !== event.endDay) {
      return `${ formatDate.value.format(event.start) } – ${ formatDate.value.format(event.end) }`;
    }
    if (event.isAllDay) {
      return getTranslatedText({ placeholder: "_A_CALENDAR_ALL_DAY_" });
    }
    return event.end > event.start ? getEventTimeRangeText(event) : formatTime.value.format(event.start);
  };

  return {
    getPopoverTimeText,
    getAgendaDayText,
    getAgendaTimeText,
    getDayAriaLabel,
    getEventAriaLabel,
    getEventTimeRangeText,
    getEventTimeText,
    getHourText,
    getMoreText,
    getText,
  };
}
