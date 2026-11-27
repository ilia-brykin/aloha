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
  foldText,
} from "../utils/text";
import {
  get,
  toString,
} from "lodash-es";

const PAGE_SIZE = 10;

/**
 * WAI-ARIA combobox with list autocomplete (or inline + list): the focus stays in the input,
 * aria-activedescendant shows the active option, Enter takes it, Escape closes the list (or clears the text).
 */
export default function ListboxAPI(props, { emit }, {
  changeModel = () => {},
  getInputElement = () => undefined,
  getOriginalItem = item => item,
  htmlIdLocal = computed(() => ""),
  loading = ref(false),
  search = () => {},
  stopSearch = () => {},
  suggestions = computed(() => []),
}) {
  const disabled = toRef(props, "disabled");
  const ignoreDiacritics = toRef(props, "ignoreDiacritics");
  const inlineAutocomplete = toRef(props, "inlineAutocomplete");
  const keyDisabled = toRef(props, "keyDisabled");
  const minLength = toRef(props, "minLength");
  const modelValue = toRef(props, "modelValue");
  const openOnFocus = toRef(props, "openOnFocus");

  const isOpen = ref(false);
  const activeIndex = ref(-1);
  // inline autocomplete: the whole label of the first suggestion, the added part is selected in the input
  const completion = ref(null);
  let isInsert = false;

  const text = computed(() => toString(modelValue.value));
  const inputValue = computed(() => completion.value ?? modelValue.value ?? "");
  const getOptionId = index => `${ htmlIdLocal.value }_option_${ index }`;
  const activeId = computed(() => {
    return isOpen.value && activeIndex.value !== -1 ? getOptionId(activeIndex.value) : undefined;
  });

  const isItemDisabled = item => !!(keyDisabled.value && get(item, keyDisabled.value));

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
    completion.value = null;
    stopSearch();
  };

  const setText = value => {
    changeModel({ model: value });
  };

  const onInput = $event => {
    const VALUE = $event.target.value;
    // Backspace and Delete remove the completion, they do not add a new one
    isInsert = !toString($event.inputType).startsWith("delete");
    completion.value = null;
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
    if (!ITEM || isItemDisabled(ITEM)) {
      return;
    }
    const LABEL = toString(ITEM[AKeyLabel]);
    completion.value = null;
    setText(LABEL);
    emit("select", {
      id: ITEM[AKeyId],
      label: LABEL,
      item: getOriginalItem(ITEM),
    });
    close();
  };

  // the next enabled option in the direction; disabled options are skipped
  const findEnabled = (from, step, { isRound = true } = {}) => {
    const COUNT = suggestions.value.length;
    for (let i = 0; i < COUNT; i++) {
      let index = from + step * i;
      if (isRound) {
        index = ((index % COUNT) + COUNT) % COUNT;
      } else if (index < 0 || index >= COUNT) {
        return -1;
      }
      if (!isItemDisabled(suggestions.value[index])) {
        return index;
      }
    }
    return -1;
  };

  const moveActive = step => {
    if (!suggestions.value.length) {
      return;
    }
    const FROM = activeIndex.value === -1 ?
      (step > 0 ? 0 : suggestions.value.length - 1) :
      activeIndex.value + step;
    activeIndex.value = findEnabled(FROM, step > 0 ? 1 : -1);
  };

  // PageUp / PageDown: some options further, not round
  const movePage = step => {
    const COUNT = suggestions.value.length;
    if (!COUNT) {
      return;
    }
    const START = activeIndex.value === -1 ? (step > 0 ? -1 : COUNT) : activeIndex.value;
    const TARGET = Math.min(Math.max(START + step, 0), COUNT - 1);
    const INDEX = findEnabled(TARGET, step > 0 ? -1 : 1, { isRound: false });
    activeIndex.value = INDEX === -1 ? findEnabled(TARGET, step > 0 ? 1 : -1, { isRound: false }) : INDEX;
  };

  const onKeydown = $event => {
    const KEY = $event.key;
    if (KEY === "ArrowDown" || KEY === "ArrowUp") {
      $event.preventDefault();
      const WAS_OPEN = isOpen.value;
      open();
      // Alt+ArrowDown only opens the list
      if (!$event.altKey && (WAS_OPEN || isOpen.value)) {
        completion.value = null;
        moveActive(KEY === "ArrowDown" ? 1 : -1);
      }
    } else if ((KEY === "PageDown" || KEY === "PageUp") && isOpen.value) {
      $event.preventDefault();
      completion.value = null;
      movePage(KEY === "PageDown" ? PAGE_SIZE : -PAGE_SIZE);
    } else if ((KEY === "Home" || KEY === "End") && isOpen.value && activeIndex.value !== -1 && !completion.value) {
      // only in the list; without an active option Home / End move the caret in the input
      $event.preventDefault();
      activeIndex.value = KEY === "Home" ?
        findEnabled(0, 1, { isRound: false }) :
        findEnabled(suggestions.value.length - 1, -1, { isRound: false });
    } else if (KEY === "Enter") {
      // only with an active option: else Enter sends the form
      if (isOpen.value && activeIndex.value !== -1) {
        $event.preventDefault();
        selectOption(activeIndex.value);
      }
    } else if (KEY === "Escape") {
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
    } else if (KEY === "Tab") {
      // Tab takes the inline completion, the focus goes on
      if (completion.value && activeIndex.value !== -1) {
        selectOption(activeIndex.value);
      }
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

  // inline autocomplete: the first suggestion that starts with the text completes it
  const setCompletion = () => {
    if (!inlineAutocomplete.value || !isInsert || !isOpen.value || !text.value) {
      return;
    }
    const TEXT = foldText(text.value, { ignoreDiacritics: ignoreDiacritics.value }).folded;
    const INDEX = suggestions.value.findIndex(item => {
      return !isItemDisabled(item) &&
        foldText(item[AKeyLabel], { ignoreDiacritics: ignoreDiacritics.value }).folded.startsWith(TEXT);
    });
    if (INDEX === -1) {
      return;
    }
    const LABEL = toString(suggestions.value[INDEX][AKeyLabel]);
    // the typed chars stay as typed, the rest comes from the label
    completion.value = `${ text.value }${ LABEL.slice(text.value.length) }`;
    activeIndex.value = INDEX;
    nextTick(() => {
      getInputElement()?.setSelectionRange?.(text.value.length, completion.value?.length ?? 0);
    });
  };

  // the new answer of the server or a new filter: no old active option
  watch(suggestions, () => {
    if (activeIndex.value >= suggestions.value.length) {
      activeIndex.value = -1;
    }
    setCompletion();
  });

  const isListVisible = computed(() => {
    return isOpen.value && (suggestions.value.length > 0 || loading.value);
  });

  return {
    activeId,
    activeIndex,
    close,
    completion,
    getOptionId,
    inputValue,
    isItemDisabled,
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
