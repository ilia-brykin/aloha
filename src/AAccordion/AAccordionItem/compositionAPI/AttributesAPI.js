import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  get,
  isUndefined,
} from "lodash-es";

export default function AttributesAPI(props, {
  classButtonLocal = computed(() => undefined),
  isOpen = computed(() => false),
  toggleLocal = () => {
  },
  currentId = computed(() => ""),
}) {
  const item = toRef(props, "item");

  const classButton = inject("classButton");
  const disabled = inject("disabled");
  const id = inject("id");
  const isCaret = inject("isCaret");
  const keyContent = inject("keyContent");
  const keyLabel = inject("keyLabel");
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

  const idForCollapse = computed(() => {
    return `${ id.value }_${ currentId.value }`;
  });

  const buttonTag = computed(() => {
    return readonlyLocal.value ? "div" : "a";
  });

  const buttonAttributes = computed(() => {
    const ATTRIBUTES = {
      class: ["a_accordion__button", classButton.value, classButtonLocal.value, {
        a_accordion__button_collapsed: !isOpen.value,
        a_accordion__button_has_not_caret: !isCaretLocal.value,
        a_accordion__button_with_gap: withGap.value,
        readonly: readonlyLocal.value,
      }],
      id: item.value.id,
    };

    if (!readonlyLocal.value) {
      ATTRIBUTES.ariaExpanded = isOpen.value;
      ATTRIBUTES["aria-controls"] = idForCollapse.value;
      ATTRIBUTES.rolw = "button";
      ATTRIBUTES.tabindex = 0;
      ATTRIBUTES.disabled = disabledLocal.value;
      ATTRIBUTES.onClick = toggleLocal;
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
    contentLocal,
    idForCollapse,
    labelLocal,
  };
}
