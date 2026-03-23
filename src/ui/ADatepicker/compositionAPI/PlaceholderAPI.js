import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  isString,
} from "lodash-es";

export default function PlaceholderAPI(props) {
  const extra = toRef(props, "extra");
  const placeholder = toRef(props, "placeholder");
  const placeholdersDefault = toRef(props, "placeholdersDefault");
  const range = toRef(props, "range");
  const timePrecision = toRef(props, "timePrecision");
  const type = toRef(props, "type");

  const placeholderScenario = computed(() => {
    const TYPE = String(type.value).toLowerCase();

    if (range.value) {
      return "dateRange";
    }

    if (TYPE === "time") {
      if (timePrecision.value === "hour") {
        return "timeHour";
      }

      if (timePrecision.value === "minute") {
        return "timeMinute";
      }

      return "timeSecond";
    }

    if (TYPE === "datetime") {
      if (timePrecision.value === "hour") {
        return "datetimeHour";
      }

      if (timePrecision.value === "minute") {
        return "datetimeMinute";
      }

      return "datetimeSecond";
    }

    return "date";
  });

  const innerPlaceholder = computed(() => {
    if (isString(placeholder.value)) {
      return getTranslatedText({ placeholder: placeholder.value, extra: extra.value }) || "";
    }

    const PLACEHOLDER = placeholdersDefault.value[placeholderScenario.value];


    return getTranslatedText({ placeholder: PLACEHOLDER, extra: extra.value }) || "";
  });

  return {
    innerPlaceholder,
  };
}
