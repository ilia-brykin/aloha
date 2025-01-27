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
  isString,
} from "lodash-es";

export default function AttributesAPI(props, {
  currentLanguage = computed(() => ({})),
  popupVisible = ref(false),
}) {
  const extra = toRef(props, "extra");
  const id = toRef(props, "id");
  const placeholder = toRef(props, "placeholder");
  const range = toRef(props, "range");
  const type = toRef(props, "type");
  const width = toRef(props, "width");

  const innerPlaceholder = computed(() => {
    if (isString(placeholder.value)) {
      return getTranslatedText({ placeholder: placeholder.value, extra: extra.value });
    }
    if (range.value) {
      return currentLanguage.value.placeholder.dateRange;
    }
    if (type.value === "time") {
      return currentLanguage.value.placeholder.time;
    }
    return currentLanguage.value.placeholder.date;
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
