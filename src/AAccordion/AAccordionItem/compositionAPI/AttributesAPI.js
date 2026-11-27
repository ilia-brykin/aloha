import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  get,
  isUndefined,
} from "lodash-es";

// more panels than this get no role="region", so the page does not get too many landmarks (WAI-ARIA)
const MAX_REGIONS = 6;

export default function AttributesAPI(props, {
  classButtonLocal = computed(() => undefined),
  isOpen = computed(() => false),
  toggleLocal = () => {},
  currentId = computed(() => ""),
}) {
  const item = toRef(props, "item");
  const itemsCount = toRef(props, "itemsCount");
  const parentsIds = toRef(props, "parentsIds");

  const alwaysOpen = inject("alwaysOpen");
  const classButton = inject("classButton");
  const disabled = inject("disabled");
  const headerTag = inject("headerTag");
  const id = inject("id");
  const isCaret = inject("isCaret");
  const keyContent = inject("keyContent");
  const keyLabel = inject("keyLabel");
  const oneItemAlwaysOpen = inject("oneItemAlwaysOpen");
  const readonly = inject("readonly");
  const withGap = inject("withGap");

  const disabledLocal = computed(() => {
    return !!(disabled.value || item.value.disabled);
  });

  const isCaretLocal = computed(() => {
    if (!isUndefined(item.value.isCaret)) {
      return item.value.isCaret;
    }
    return isCaret.value;
  });

  const readonlyLocal = computed(() => {
    return readonly.value || item.value.readonly;
  });

  // the open item can not be closed: it stays a focusable button with aria-disabled
  const isDisabledByOneItemAlwaysOpen = computed(() => {
    return !alwaysOpen.value && oneItemAlwaysOpen.value && isOpen.value;
  });

  const idForCollapse = computed(() => {
    return `${ id.value }_${ currentId.value }`;
  });

  const idForButton = computed(() => {
    return item.value.id || `${ idForCollapse.value }_button`;
  });

  // h3 for the first level, h4 for the nested items … (at most h6); other tags stay as they are
  const headerTagLocal = computed(() => {
    const MATCH = /^h([1-6])$/i.exec(headerTag.value || "");
    if (!MATCH) {
      return headerTag.value || "div";
    }
    const LEVEL = Math.min(6, +MATCH[1] + parentsIds.value.length);
    return `h${ LEVEL }`;
  });

  const buttonTag = computed(() => {
    return readonlyLocal.value ? "div" : "button";
  });

  const buttonAttributes = computed(() => {
    const ATTRIBUTES = {
      class: ["a_accordion__button", classButton.value, classButtonLocal.value, {
        a_accordion__button_open: isOpen.value,
        a_accordion__button_close: !isOpen.value,
        a_accordion__button_has_not_caret: !isCaretLocal.value,
        a_accordion__button_with_gap: withGap.value,
        readonly: readonlyLocal.value,
      }],
      id: idForButton.value,
    };

    if (!readonlyLocal.value) {
      ATTRIBUTES.type = "button";
      ATTRIBUTES["aria-expanded"] = isOpen.value ? "true" : "false";
      ATTRIBUTES["aria-controls"] = idForCollapse.value;
      ATTRIBUTES.disabled = disabledLocal.value;

      if (isDisabledByOneItemAlwaysOpen.value) {
        ATTRIBUTES["aria-disabled"] = "true";
      } else {
        ATTRIBUTES.onClick = toggleLocal;
      }
    }

    return ATTRIBUTES;
  });

  const collapseAttributes = computed(() => {
    const ATTRIBUTES = {
      id: idForCollapse.value,
    };
    if (!readonlyLocal.value) {
      ATTRIBUTES["aria-labelledby"] = idForButton.value;
      if (itemsCount.value <= MAX_REGIONS) {
        ATTRIBUTES.role = "region";
      }
    }
    return ATTRIBUTES;
  });

  const labelLocal = computed(() => {
    if (keyLabel.value) {
      return get(item.value, keyLabel.value);
    }
    return "";
  });

  const contentLocal = computed(() => {
    if (keyContent.value) {
      return get(item.value, keyContent.value);
    }
    return "";
  });

  return {
    buttonAttributes,
    buttonTag,
    collapseAttributes,
    contentLocal,
    headerTagLocal,
    idForCollapse,
    isCaretLocal,
    labelLocal,
  };
}
