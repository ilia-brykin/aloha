import {
  computed,
  toRef,
} from "vue";

import {
  toDayKey,
} from "../utils/utils";

import {
  isArray,
  isFunction,
} from "lodash-es";

/**
 * Days that cannot be chosen: before minDate, after maxDate or in disabledDates (an array of dates or a function).
 * A disabled day can get the focus, but it emits no day-click, time-click or day-select and gets no event by drag and drop.
 */
export default function DisabledAPI(props) {
  const disabledDates = toRef(props, "disabledDates");
  const maxDate = toRef(props, "maxDate");
  const minDate = toRef(props, "minDate");

  const minKey = computed(() => toDayKey(minDate.value));
  const maxKey = computed(() => toDayKey(maxDate.value));
  const disabledKeys = computed(() => {
    return new Set(isArray(disabledDates.value) ? disabledDates.value.map(toDayKey).filter(Boolean) : []);
  });

  const isDayDisabled = key => {
    if (!key) {
      return false;
    }
    if ((minKey.value && key < minKey.value) || (maxKey.value && key > maxKey.value)) {
      return true;
    }
    if (isFunction(disabledDates.value)) {
      return !!disabledDates.value(key);
    }
    return disabledKeys.value.has(key);
  };

  return {
    isDayDisabled,
  };
}
