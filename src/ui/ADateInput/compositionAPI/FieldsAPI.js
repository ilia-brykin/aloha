import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import ModelFormatAPI from "./ModelFormatAPI";
import {
  formatTimeParts,
  getOrderOfUnit,
} from "./LocaleAPI";
import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  compareByUnit,
  daysBetween,
  fromIsoAny,
  fromIsoTime,
  parseDateText,
  parseMonthText,
  parseTimeText,
  parseWeekText,
  parseYearText,
  todayParts,
  toIsoTime,
  toIsoUnit,
} from "../utils/dateUtils";
import {
  isArray,
  isEqual,
  isFunction,
  isString,
} from "lodash-es";

const ERRORS_INVALID = {
  day: "_A_DATE_INPUT_ERROR_DATE_",
  month: "_A_DATE_INPUT_ERROR_MONTH_",
  week: "_A_DATE_INPUT_ERROR_WEEK_",
  year: "_A_DATE_INPUT_ERROR_YEAR_",
};

const SUB_LABELS = {
  range: ["_A_DATE_INPUT_FROM_", "_A_DATE_INPUT_TO_"],
  rangeDate: ["_A_DATE_INPUT_START_DATE_", "_A_DATE_INPUT_END_DATE_"],
  rangeTime: ["_A_DATE_INPUT_START_TIME_", "_A_DATE_INPUT_END_TIME_"],
};

export default function FieldsAPI(props, {
  changeModel = () => {},
  dateOrder = computed(() => ({})),
  formatDate = () => "",
  htmlIdLocal = computed(() => ""),
  isErrors = computed(() => false),
  unit = computed(() => "day"),
}) {
  const defaultTime = toRef(props, "defaultTime");
  const errors = toRef(props, "errors");
  const isDateDisabled = toRef(props, "isDateDisabled");
  const max = toRef(props, "max");
  const maxDays = toRef(props, "maxDays");
  const maxTime = toRef(props, "maxTime");
  const min = toRef(props, "min");
  const minDays = toRef(props, "minDays");
  const minTime = toRef(props, "minTime");
  const minuteStep = toRef(props, "minuteStep");
  const mode = toRef(props, "mode");
  const withSeconds = toRef(props, "withSeconds");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");
  const range = toRef(props, "range");

  const texts = ref({});
  const fieldErrors = ref({});
  let lastEmitted;

  const hasDate = computed(() => mode.value !== "time");
  const hasTime = computed(() => ["datetime", "time"].includes(mode.value));
  const minDate = computed(() => fromIsoAny(min.value));
  const maxDate = computed(() => fromIsoAny(max.value));
  // "HH:mm:ss" can be compared as text
  const minTimeIso = computed(() => toIsoTime(fromIsoTime(minTime.value), true));
  const maxTimeIso = computed(() => toIsoTime(fromIsoTime(maxTime.value), true));

  const {
    fromModelValue,
    toModelValue,
  } = ModelFormatAPI(props, {
    hasDate,
    hasTime,
    unit,
  });

  const formatTime = time => formatTimeParts(time, withSeconds.value);

  // date and time fields of the start (and the end); the first field has the id of the component (label, error summary)
  const fields = computed(() => {
    const FIELDS = [];
    (range.value ? [0, 1] : [0]).forEach(index => {
      if (hasDate.value) {
        FIELDS.push({ key: `date${ index }`, kind: "date", index });
      }
      if (hasTime.value) {
        FIELDS.push({ key: `time${ index }`, kind: "time", index });
      }
    });
    return FIELDS.map((field, position) => {
      let subLabel;
      if (range.value) {
        if (mode.value === "datetime") {
          subLabel = SUB_LABELS[field.kind === "date" ? "rangeDate" : "rangeTime"][field.index];
        } else {
          subLabel = SUB_LABELS.range[field.index];
        }
      } else if (mode.value === "datetime") {
        subLabel = field.kind === "date" ? "_A_DATE_INPUT_DATE_" : "_A_DATE_INPUT_TIME_";
      }
      return {
        ...field,
        id: position === 0 ? htmlIdLocal.value : `${ htmlIdLocal.value }_${ field.key }`,
        subLabel,
      };
    });
  });

  // the local ISO string of the start or the end
  const valueAt = (model, index) => fromModelValue(range.value ? (isArray(model) ? model[index] : undefined) : model);

  const setTextsFromModel = (model = modelValue.value) => {
    const TEXTS = {};
    fields.value.forEach(field => {
      const VALUE = valueAt(model, field.index);
      TEXTS[field.key] = field.kind === "date" ?
        formatDate(fromIsoAny(VALUE)) :
        formatTime(fromIsoTime(VALUE));
    });
    texts.value = TEXTS;
    fieldErrors.value = {};
  };

  watch(modelValue, value => {
    if (!isEqual(value, lastEmitted)) {
      setTextsFromModel();
    }
  }, { immediate: true, deep: true });

  watch([dateOrder, mode, range], () => {
    if (!Object.keys(fieldErrors.value).length) {
      setTextsFromModel();
    }
  });

  const checkTime = time => {
    if (!time) {
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_TIME_" } };
    }
    const STEP = minuteStep.value || 1;
    if (STEP > 1 && (time.minutes % STEP !== 0 || time.seconds)) {
      // the next allowed time as example
      const MINUTES = Math.min(Math.round((time.hours * 60 + time.minutes) / STEP) * STEP, 24 * 60 - STEP);
      const EXAMPLE = { hours: Math.floor(MINUTES / 60), minutes: MINUTES % 60, seconds: 0 };
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_STEP_", extra: { step: STEP, example: formatTime(EXAMPLE) } } };
    }
    const ISO = toIsoTime(time, true);
    if (minTimeIso.value && ISO < minTimeIso.value) {
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_MIN_TIME_", extra: { time: formatTime(fromIsoTime(minTimeIso.value)) } } };
    }
    if (maxTimeIso.value && ISO > maxTimeIso.value) {
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_MAX_TIME_", extra: { time: formatTime(fromIsoTime(maxTimeIso.value)) } } };
    }
    return { value: time };
  };

  const parseField = field => {
    const TEXT = `${ texts.value[field.key] || "" }`.trim();
    if (!TEXT) {
      return { value: null };
    }
    if (field.kind === "time") {
      return checkTime(parseTimeText(TEXT));
    }
    const PARSERS = {
      day: () => parseDateText(TEXT, dateOrder.value.order),
      month: () => parseMonthText(TEXT, getOrderOfUnit(dateOrder.value.order, "month")),
      week: () => parseWeekText(TEXT),
      year: () => parseYearText(TEXT),
    };
    const DATE = PARSERS[unit.value]();
    if (!DATE) {
      return { error: { placeholder: ERRORS_INVALID[unit.value], extra: { example: formatDate(todayParts()) } } };
    }
    if (minDate.value && compareByUnit(DATE, minDate.value, unit.value) < 0) {
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_MIN_", extra: { date: formatDate(minDate.value) } } };
    }
    if (maxDate.value && compareByUnit(DATE, maxDate.value, unit.value) > 0) {
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_MAX_", extra: { date: formatDate(maxDate.value) } } };
    }
    if (isFunction(isDateDisabled.value) && isDateDisabled.value(toIsoUnit(DATE, unit.value))) {
      return { error: { placeholder: "_A_DATE_INPUT_ERROR_DISABLED_" } };
    }
    return { value: DATE };
  };

  // the length of a range in days (end - start), only for days
  const checkDays = (ERRORS, PARSED, VALUES) => {
    if (!range.value || unit.value !== "day" || !VALUES[0] || !VALUES[1]) {
      return;
    }
    const DAYS = daysBetween(PARSED.date0, PARSED.date1);
    let error;
    if (minDays.value && DAYS < minDays.value) {
      error = { placeholder: "_A_DATE_INPUT_ERROR_MIN_DAYS_", extra: { days: minDays.value } };
    } else if (maxDays.value && DAYS > maxDays.value) {
      error = { placeholder: "_A_DATE_INPUT_ERROR_MAX_DAYS_", extra: { days: maxDays.value } };
    }
    if (error) {
      ERRORS.date1 = error;
      VALUES[1] = null;
    }
  };

  // parsed date of a field without error, for the calendar
  const getDateOfIndex = index => {
    const FIELD = fields.value.find(item => item.kind === "date" && item.index === index);
    return FIELD ? parseField(FIELD).value || undefined : undefined;
  };

  const fillDefaultTime = () => {
    if (!hasDate.value || !hasTime.value || !defaultTime.value) {
      return;
    }
    fields.value.filter(field => field.kind === "time").forEach(field => {
      const DEFAULT = isArray(defaultTime.value) ? defaultTime.value[field.index] : defaultTime.value;
      if (DEFAULT && !`${ texts.value[field.key] || "" }`.trim() && `${ texts.value[`date${ field.index }`] || "" }`.trim()) {
        texts.value[field.key] = DEFAULT;
      }
    });
  };

  const commit = () => {
    fillDefaultTime();
    const ERRORS = {};
    const PARSED = {};
    fields.value.forEach(field => {
      const RESULT = parseField(field);
      if (RESULT.error) {
        ERRORS[field.key] = RESULT.error;
      } else {
        PARSED[field.key] = RESULT.value;
        // "5.3.25" is shown as "05.03.2025"
        if (RESULT.value) {
          texts.value[field.key] = field.kind === "date" ? formatDate(RESULT.value) : formatTime(RESULT.value);
        }
      }
    });

    const VALUES = (range.value ? [0, 1] : [0]).map(index => {
      const DATE = PARSED[`date${ index }`];
      const TIME = PARSED[`time${ index }`];
      if ((hasDate.value && !DATE) || (hasTime.value && !TIME)) {
        return null;
      }
      if (!hasTime.value) {
        return toIsoUnit(DATE, unit.value);
      }
      return hasDate.value ? `${ toIsoUnit(DATE) }T${ toIsoTime(TIME, withSeconds.value) }` : toIsoTime(TIME, withSeconds.value);
    });

    // ISO strings can be compared as text
    if (range.value && VALUES[0] && VALUES[1] && VALUES[1] < VALUES[0]) {
      // the error is on the end date, or on the end time when the day is the same
      const END_FIELDS = fields.value.filter(field => field.index === 1);
      const IS_DAY_EARLIER = hasDate.value && VALUES[1].slice(0, 10) < VALUES[0].slice(0, 10);
      const END_FIELD = IS_DAY_EARLIER ? END_FIELDS[0] : END_FIELDS[END_FIELDS.length - 1];
      ERRORS[END_FIELD.key] = { placeholder: "_A_DATE_INPUT_ERROR_RANGE_" };
      VALUES[1] = null;
    }

    checkDays(ERRORS, PARSED, VALUES);

    fieldErrors.value = ERRORS;

    let model;
    if (range.value) {
      model = VALUES[0] || VALUES[1] ? VALUES.map(toModelValue) : modelUndefined.value;
    } else {
      model = VALUES[0] ? toModelValue(VALUES[0]) : modelUndefined.value;
    }
    if (!isEqual(model, modelValue.value)) {
      lastEmitted = model;
      changeModel({ model });
    }
  };

  // a shortcut: the value goes through the same checks as a typed one
  const applyModel = model => {
    setTextsFromModel(model);
    commit();
  };

  const clearField = field => {
    texts.value[field.key] = "";
    commit();
  };

  const onInput = (field, $event) => {
    texts.value[field.key] = $event.target.value;
  };

  const onKeydown = $event => {
    if ($event.key === "Enter") {
      commit();
    }
  };

  const errorsLocal = computed(() => {
    const SHOW_FIELD = fields.value.length > 1;
    return fields.value.filter(field => fieldErrors.value[field.key]).map(field => {
      const TEXT = getTranslatedText(fieldErrors.value[field.key]);
      return SHOW_FIELD ? `${ getTranslatedText({ placeholder: field.subLabel }) }: ${ TEXT }` : TEXT;
    });
  });

  const errorsAll = computed(() => {
    let errorsProps = [];
    if (isErrors.value) {
      errorsProps = isString(errors.value) ? [errors.value] : errors.value;
    }
    return [...errorsProps, ...errorsLocal.value];
  });

  const isErrorsAll = computed(() => errorsAll.value.length > 0);

  const getAriaInvalid = field => (isErrors.value || fieldErrors.value[field.key] ? "true" : undefined);

  return {
    applyModel,
    clearField,
    commit,
    errorsAll,
    fields,
    getAriaInvalid,
    getDateOfIndex,
    hasDate,
    hasTime,
    isErrorsAll,
    maxDate,
    minDate,
    onInput,
    onKeydown,
    texts,
  };
}
