import {
  computed,
  nextTick,
  ref,
} from "vue";

import {
  formatVariable,
  getVariableQuery,
} from "../../utils/variables";

/**
 * The suggestions of variables in a text field (WAI-ARIA combobox with listbox):
 * "{{" opens the list, the arrows choose, Enter / Tab insert, Escape closes. Ctrl+Space opens it too.
 */
export default function VariablePickerAPI({
  API,
  inputRef = ref(undefined),
  text = ref(""),
}) {
  const isOpen = ref(false);
  const activeIndex = ref(0);
  // { query, start, end } of the typed variable
  const queryInfo = ref(null);

  const options = computed(() => {
    if (!isOpen.value) {
      return [];
    }
    return API.findVariables(queryInfo.value?.query || "").slice(0, 50);
  });

  const close = () => {
    isOpen.value = false;
    queryInfo.value = null;
  };

  const update = () => {
    if (!API.hasVariables.value || !inputRef.value) {
      return;
    }
    const INFO = getVariableQuery(text.value, inputRef.value.selectionStart ?? text.value.length, API.variablePattern.value);
    if (INFO) {
      queryInfo.value = INFO;
      isOpen.value = true;
      activeIndex.value = 0;
    } else {
      close();
    }
  };

  // Ctrl+Space and the action "insert variable": the list at the caret
  const openAtCaret = () => {
    if (!API.hasVariables.value) {
      return;
    }
    const CARET = inputRef.value?.selectionStart ?? text.value.length;
    queryInfo.value = { query: "", start: CARET, end: CARET };
    isOpen.value = true;
    activeIndex.value = 0;
  };

  const insert = variable => {
    const INFO = queryInfo.value || { start: text.value.length, end: text.value.length };
    const INSERTED = formatVariable(variable.name, API.variablePattern.value);
    text.value = `${ text.value.slice(0, INFO.start) }${ INSERTED }${ text.value.slice(INFO.end) }`;
    const CARET = INFO.start + INSERTED.length;
    close();
    API.announce(API.translate("_A_JSON_EDITOR_ANNOUNCE_VARIABLE_INSERTED_", { name: variable.name }));
    nextTick(() => {
      inputRef.value?.focus();
      inputRef.value?.setSelectionRange?.(CARET, CARET);
    });
  };

  // true: the key was used by the list
  const onKeydown = $event => {
    if (($event.ctrlKey || $event.metaKey) && $event.key === " ") {
      $event.preventDefault();
      openAtCaret();
      return true;
    }
    if (!isOpen.value || !options.value.length) {
      if (isOpen.value && $event.key === "Escape") {
        close();
        return true;
      }
      return false;
    }
    const COUNT = options.value.length;
    const ACTIONS = {
      ArrowDown: () => {
        activeIndex.value = (activeIndex.value + 1) % COUNT;
      },
      ArrowUp: () => {
        activeIndex.value = (activeIndex.value - 1 + COUNT) % COUNT;
      },
      Home: () => {
        activeIndex.value = 0;
      },
      End: () => {
        activeIndex.value = COUNT - 1;
      },
      Enter: () => insert(options.value[activeIndex.value]),
      Tab: () => insert(options.value[activeIndex.value]),
      Escape: () => close(),
    };
    if (ACTIONS[$event.key]) {
      $event.preventDefault();
      ACTIONS[$event.key]();
      return true;
    }
    return false;
  };

  return {
    activeIndex,
    close,
    insert,
    isOpen,
    onKeydown,
    openAtCaret,
    options,
    update,
  };
}
