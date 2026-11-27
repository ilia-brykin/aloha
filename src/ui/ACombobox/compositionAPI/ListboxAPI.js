import {
  computed,
  nextTick,
  ref,
  toRef,
  watch,
} from "vue";

import {
  AKeyId,
  AKeyLabel,
} from "../../../const/AKeys";
import {
  isPlainObject,
  omit,
  toString,
} from "lodash-es";

/**
 * WAI-ARIA combobox with list autocomplete: the focus stays in the input,
 * aria-activedescendant shows the active option, Enter takes it, Escape closes the list (or clears the text).
 */
export default function ListboxAPI(props, { emit }, {
  changeModel = () => {},
  htmlIdLocal = computed(() => ""),
  loading = ref(false),
  search = () => {},
  stopSearch = () => {},
  suggestions = computed(() => []),
}) {
  const disabled = toRef(props, "disabled");
  const minLength = toRef(props, "minLength");
  const modelValue = toRef(props, "modelValue");
  const openOnFocus = toRef(props, "openOnFocus");

  const isOpen = ref(false);
  const activeIndex = ref(-1);

  const text = computed(() => toString(modelValue.value));
  const getOptionId = index => `${ htmlIdLocal.value }_option_${ index }`;
  const activeId = computed(() => {
    return isOpen.value && activeIndex.value !== -1 ? getOptionId(activeIndex.value) : undefined;
  });

  const open = () => {
    if (disabled.value || text.value.length < minLength.value) {
      return;
    }
    if (!isOpen.value) {
      search(text.value);
    }
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    activeIndex.value = -1;
    stopSearch();
  };

  const setText = value => {
    changeModel({ model: value });
  };

  const onInput = $event => {
    const VALUE = $event.target.value;
    setText(VALUE);
    activeIndex.value = -1;
    if (VALUE.length < minLength.value) {
      close();
      return;
    }
    search(VALUE);
    isOpen.value = true;
  };

  const selectOption = index => {
    const ITEM = suggestions.value[index];
    if (!ITEM) {
      return;
    }
    const LABEL = toString(ITEM[AKeyLabel]);
    setText(LABEL);
    emit("select", {
      id: ITEM[AKeyId],
      label: LABEL,
      // the item of the data, without the keys of the component
      item: isPlainObject(ITEM) && !props.isDataSimpleArray ? omit(ITEM, [AKeyId, AKeyLabel]) : ITEM[AKeyId],
    });
    close();
  };

  const moveActive = step => {
    const COUNT = suggestions.value.length;
    if (!COUNT) {
      return;
    }
    if (activeIndex.value === -1) {
      activeIndex.value = step > 0 ? 0 : COUNT - 1;
    } else {
      activeIndex.value = (activeIndex.value + step + COUNT) % COUNT;
    }
  };

  const onKeydown = $event => {
    if ($event.key === "ArrowDown" || $event.key === "ArrowUp") {
      $event.preventDefault();
      const WAS_OPEN = isOpen.value;
      open();
      // Alt+ArrowDown only opens the list
      if (!$event.altKey && (WAS_OPEN || isOpen.value)) {
        moveActive($event.key === "ArrowDown" ? 1 : -1);
      }
    } else if ($event.key === "Enter") {
      // only with an active option: else Enter sends the form
      if (isOpen.value && activeIndex.value !== -1) {
        $event.preventDefault();
        selectOption(activeIndex.value);
      }
    } else if ($event.key === "Escape") {
      if (isOpen.value) {
        // the list, not the modal around the field
        $event.preventDefault();
        $event.stopPropagation();
        close();
      } else if (text.value) {
        $event.preventDefault();
        $event.stopPropagation();
        setText("");
      }
    } else if ($event.key === "Tab") {
      close();
    }
  };

  const onFocus = () => {
    if (openOnFocus.value) {
      open();
    }
  };

  // a click in the list keeps the focus in the input (mousedown), the blur of the input closes the list
  const onOptionMousedown = $event => $event.preventDefault();

  const onBlur = () => close();

  // the active option stays visible in a long list
  watch(activeId, async id => {
    await nextTick();
    if (id) {
      document.getElementById(id)?.scrollIntoView?.({ block: "nearest" });
    }
  });

  // the new answer of the server: no old active option
  watch(suggestions, () => {
    if (activeIndex.value >= suggestions.value.length) {
      activeIndex.value = -1;
    }
  });

  const isListVisible = computed(() => {
    return isOpen.value && (suggestions.value.length > 0 || loading.value);
  });

  return {
    activeId,
    activeIndex,
    close,
    getOptionId,
    isListVisible,
    isOpen,
    onBlur,
    onFocus,
    onInput,
    onKeydown,
    onOptionMousedown,
    open,
    selectOption,
  };
}
