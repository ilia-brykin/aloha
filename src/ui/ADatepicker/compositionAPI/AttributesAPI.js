import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isNumber,
  isString,
} from "lodash-es";

export default function AttributesAPI(props, {
  popupVisible = ref(false),
}) {
  const id = toRef(props, "id");
  const type = toRef(props, "type");
  const width = toRef(props, "width");

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
    innerType,
    widthLocal,
  };
}
