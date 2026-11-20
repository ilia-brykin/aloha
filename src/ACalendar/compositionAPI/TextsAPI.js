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

  const getDayAriaLabel = day => {
    const TEXT = formatDay.value.format(day.date);
    if (!day.eventsCount) {
      return TEXT;
    }
    return `${ TEXT }, ${ getTranslatedText({ placeholder: "_A_CALENDAR_EVENTS_{{count}}_", extra: { count: day.eventsCount } }) }`;
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
    return `${ event.label }, ${ getDateTimeText(event.start, event.isAllDay) }${ end ? ` – ${ end }` : "" }`;
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

  const getText = placeholder => getTranslatedText({ placeholder });

  return {
    getDayAriaLabel,
    getEventAriaLabel,
    getEventTimeRangeText,
    getEventTimeText,
    getHourText,
    getMoreText,
    getText,
  };
}
