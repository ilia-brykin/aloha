import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  isNumber,
  isPlainObject,
  isString,
} from "lodash-es";

export default function AttributesAPI(props, {
  currentLanguage = computed(() => ({})),
  popupVisible = ref(false),
}) {
  const extra = toRef(props, "extra");
  const id = toRef(props, "id");
  const minuteStep = toRef(props, "minuteStep");
  const placeholder = toRef(props, "placeholder");
  const placeholdersDefault = toRef(props, "placeholdersDefault");
  const range = toRef(props, "range");
  const timePrecision = toRef(props, "timePrecision");
  const type = toRef(props, "type");
  const width = toRef(props, "width");

  const timePrecisionLocal = computed(() => {
    if (timePrecision.value) {
      return timePrecision.value;
    }

    return minuteStep.value === 0 ? "second" : "minute";
  });

  const placeholderScenario = computed(() => {
    const TYPE = String(type.value).toLowerCase();

    if (range.value) {
      return "dateRange";
    }

    if (TYPE === "time") {
      if (timePrecisionLocal.value === "hour") {
        return "timeHour";
      }

      if (timePrecisionLocal.value === "minute") {
        return "timeMinute";
      }

      return "timeSecond";
    }

    if (TYPE === "datetime") {
      if (timePrecisionLocal.value === "hour") {
        return "datetimeHour";
      }

      if (timePrecisionLocal.value === "minute") {
        return "datetimeMinute";
      }

      return "datetimeSecond";
    }

    return "date";
  });

  const getTranslatedPlaceholder = value => {
    return isString(value) ?
      getTranslatedText({ placeholder: value, extra: extra.value }) :
      value;
  };

  const innerPlaceholder = computed(() => {
    if (isString(placeholder.value)) {
      return getTranslatedText({ placeholder: placeholder.value, extra: extra.value });
    }

    if (isPlainObject(placeholdersDefault.value) && placeholdersDefault.value[placeholderScenario.value]) {
      return getTranslatedPlaceholder(placeholdersDefault.value[placeholderScenario.value]);
    }

    return currentLanguage.value.placeholder[placeholderScenario.value];
  });

  const idForPanel = computed(() => {
    return `${ id.value }_panel`;
  });

  const idsForPanelRange = computed(() => {
    return [
      `${ idForPanel.value }_0`,
      `${ idForPanel.value }_1`,
    ];
  });

  const ariaHiddenForCalendar = computed(() => {
    return `${ !popupVisible.value }`;
  });

  const ariaExpandedForCalendar = computed(() => {
    return `${ popupVisible.value }`;
  });

  const idForCalendar = computed(() => {
    return `${ id.value }_calendar`;
  });

  const widthLocal = computed(() => {
    if (isNumber(width.value) || (isString(width.value) && /^\d+$/.test(width.value))) {
      return width.value + "px";
    }
    return width.value;
  });

  const innerType = computed(() => {
    return String(type.value).toLowerCase();
  });

  return {
    ariaExpandedForCalendar,
    ariaHiddenForCalendar,
    idForCalendar,
    idForPanel,
    idsForPanelRange,
    innerPlaceholder,
    innerType,
    widthLocal,
  };
}
