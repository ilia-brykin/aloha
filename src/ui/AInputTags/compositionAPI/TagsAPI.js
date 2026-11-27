import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import UtilsAPI, {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  escapeRegExp,
  isArray,
  isFunction,
  isString,
} from "lodash-es";

const FLASH_TIME = 700;

export default function TagsAPI(props, {
  changeModel = () => {},
  // model-key "id": the label of a value and the value of a text
  getLabel = value => String(value),
  // is-only-from-list: the value is a suggestion (local data or the last answer of the server)
  isInData = () => true,
  textsLocal = computed(() => ({})),
  toValue = text => text,
}) {
  const addOnBlur = toRef(props, "addOnBlur");
  const allowDuplicates = toRef(props, "allowDuplicates");
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const disabled = toRef(props, "disabled");
  const isOnlyFromList = toRef(props, "isOnlyFromList");
  const isSortable = toRef(props, "isSortable");
  const maxlength = toRef(props, "maxlength");
  const maxTags = toRef(props, "maxTags");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");
  const separators = toRef(props, "separators");
  const transform = toRef(props, "transform");
  const validator = toRef(props, "validator");

  const inputRef = ref(undefined);
  const listRef = ref(undefined);
  const inputValue = ref("");
  // text of the live region: added, removed, duplicate, limit
  const announcement = ref("");
  // the reason of the last refused value, visible under the field (the live region reads it)
  const feedback = ref("");
  // the tag that is already there blinks
  const flashIndex = ref(-1);
  // the tag in the input for editing: its place and its old value
  const editIndex = ref(-1);
  let editOriginal;
  let flashTimer;
  let dragIndex = -1;

  const {
    replaceText,
  } = UtilsAPI();

  const tags = computed(() => {
    return isArray(modelValue.value) ? modelValue.value : [];
  });

  const isMaxReached = computed(() => {
    return !!maxTags.value && tags.value.length >= maxTags.value;
  });

  // pasted text is split at the one-character separators and at line breaks
  const splitRegExp = computed(() => {
    const CHARS = separators.value.filter(item => item.length === 1).map(escapeRegExp);
    return new RegExp(`[${ CHARS.join("") }\\r\\n]`);
  });

  // an own text or a translation key, {{ … }} also in an own text
  const translatePlaceholder = (placeholder, extra) => {
    const TEXT = getTranslatedText({
      placeholder,
      extra,
      alwaysTranslate: alwaysTranslate.value,
    });
    return extra ? replaceText({ text: TEXT, object: extra }) : TEXT;
  };

  // a key of texts
  const translate = (key, extra) => translatePlaceholder(textsLocal.value[key], extra);

  const announce = async text => {
    // emptied first, so the same text is announced again
    announcement.value = "";
    await nextTick();
    announcement.value = text;
  };

  const refuse = text => {
    feedback.value = text;
    announce(text);
  };

  const setModel = model => {
    changeModel({
      model: model.length ? model : modelUndefined.value,
    });
  };

  const findIndex = (value, list) => {
    const VALUE = String(value).toLowerCase();
    return list.findIndex(item => String(item).toLowerCase() === VALUE);
  };

  const flash = index => {
    clearTimeout(flashTimer);
    flashIndex.value = index;
    flashTimer = setTimeout(() => {
      flashIndex.value = -1;
    }, FLASH_TIME);
  };

  // validator: false is invalid (the default text), a text is the message, everything else is valid
  const getValidatorMessage = text => {
    if (!isFunction(validator.value)) {
      return undefined;
    }
    const RESULT = validator.value({ tag: text, tags: tags.value.map(getLabel) });
    if (RESULT === false) {
      return translate("invalid", { tag: text });
    }
    // the message can be a translation key too, {{ tag }} is the value
    return isString(RESULT) && RESULT ? translatePlaceholder(RESULT, { tag: text }) : undefined;
  };

  /**
   * Adds the values that pass transform, maxlength, is-only-from-list, validator, duplicates and max-tags.
   * atIndex: the place of an edited tag. Returns true if the input can be cleared (added or duplicate).
   */
  const addTags = (values, { atIndex = -1 } = {}) => {
    if (disabled.value) {
      return false;
    }
    const MODEL = [...tags.value];
    const ADDED = [];
    let refused;
    let duplicate;
    let isLimit = false;
    values.forEach(item => {
      let text = String(item).trim();
      if (isFunction(transform.value)) {
        text = String(transform.value(text) ?? "").trim();
      }
      if (!text) {
        return;
      }
      if (maxlength.value && text.length > maxlength.value) {
        refused = translate("maxlength", { tag: text, max: maxlength.value });
        return;
      }
      if (isOnlyFromList.value && !isInData(text)) {
        refused = translate("onlyFromList", { tag: text });
        return;
      }
      const MESSAGE = getValidatorMessage(text);
      if (MESSAGE) {
        refused = MESSAGE;
        return;
      }
      const VALUE = toValue(text);
      const INDEX_DUPLICATE = findIndex(VALUE, MODEL);
      if (!allowDuplicates.value && INDEX_DUPLICATE !== -1) {
        duplicate = text;
        flash(INDEX_DUPLICATE);
        return;
      }
      if (maxTags.value && MODEL.length >= maxTags.value) {
        isLimit = true;
        return;
      }
      if (atIndex !== -1) {
        MODEL.splice(atIndex + ADDED.length, 0, VALUE);
      } else {
        MODEL.push(VALUE);
      }
      ADDED.push(text);
    });

    if (ADDED.length) {
      feedback.value = "";
      setModel(MODEL);
    }
    if (isLimit) {
      refuse(translate("max", { max: maxTags.value }));
    } else if (refused && !ADDED.length) {
      refuse(refused);
    } else if (ADDED.length) {
      announce(translate("added", { tag: ADDED.join(", ") }));
    } else if (duplicate) {
      refuse(translate("duplicate", { tag: duplicate }));
    }

    return !isLimit && (ADDED.length > 0 || !!duplicate);
  };

  const finishEdit = () => {
    editIndex.value = -1;
    editOriginal = undefined;
  };

  const addInputValue = () => {
    if (addTags([inputValue.value], { atIndex: editIndex.value })) {
      inputValue.value = "";
      finishEdit();
    }
  };

  // Escape while editing: the old value is back at its place
  const cancelEdit = () => {
    if (editIndex.value === -1) {
      return false;
    }
    const MODEL = [...tags.value];
    MODEL.splice(editIndex.value, 0, editOriginal);
    setModel(MODEL);
    inputValue.value = "";
    finishEdit();
    return true;
  };

  const getRemoveButtons = () => {
    return listRef.value ? Array.from(listRef.value.querySelectorAll(".a_input_tags__remove")) : [];
  };

  const focusRemoveButton = index => {
    getRemoveButtons()[index]?.focus();
  };

  // focusIndex: the remove button that gets the focus after the remove (keyboard on the tags), else the input
  const removeTag = (index, { focusIndex } = {}) => {
    if (disabled.value) {
      return;
    }
    const TAG = tags.value[index];
    setModel(tags.value.filter((_, itemIndex) => itemIndex !== index));
    announce(translate("removed", { tag: getLabel(TAG) }));
    nextTick(() => {
      if (focusIndex !== undefined && getRemoveButtons()[focusIndex]) {
        focusRemoveButton(focusIndex);
      } else {
        // the remove button is gone: the focus goes back to the input
        inputRef.value?.focus();
      }
    });
  };

  const removeAll = () => {
    if (disabled.value || !tags.value.length) {
      return;
    }
    const COUNT = tags.value.length;
    setModel([]);
    announce(translate("removedAll", { count: COUNT }));
    inputRef.value?.focus();
  };

  // F2 or a double click: the tag goes into the input, Enter puts it back at its place
  const startEdit = index => {
    if (disabled.value || index < 0 || index >= tags.value.length) {
      return;
    }
    const TAG = tags.value[index];
    editIndex.value = index;
    editOriginal = TAG;
    setModel(tags.value.filter((_, itemIndex) => itemIndex !== index));
    inputValue.value = getLabel(TAG);
    announce(translate("editing", { tag: getLabel(TAG) }));
    nextTick(() => {
      inputRef.value?.focus();
      inputRef.value?.select?.();
    });
  };

  // is-sortable: Alt+arrows or drag and drop
  const moveTag = (from, to, { focus = true } = {}) => {
    const COUNT = tags.value.length;
    const TARGET = Math.min(Math.max(to, 0), COUNT - 1);
    if (disabled.value || from === TARGET || from < 0 || from >= COUNT) {
      return;
    }
    const MODEL = [...tags.value];
    const [TAG] = MODEL.splice(from, 1);
    MODEL.splice(TARGET, 0, TAG);
    setModel(MODEL);
    announce(translate("moved", { tag: getLabel(TAG), position: TARGET + 1, count: COUNT }));
    if (focus) {
      nextTick(() => focusRemoveButton(TARGET));
    }
  };

  const onInput = $event => {
    inputValue.value = $event.target.value;
    feedback.value = "";
  };

  const onKeydown = $event => {
    if ($event.key === "Escape" && cancelEdit()) {
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }
    if (separators.value.includes($event.key)) {
      if (inputValue.value.trim()) {
        $event.preventDefault();
        addInputValue();
      } else if (editIndex.value !== -1 && $event.key === "Enter") {
        // Enter on an emptied edit: the tag is removed
        $event.preventDefault();
        finishEdit();
      } else if ($event.key !== "Enter") {
        // no empty tags; Enter in an empty field still submits the form
        $event.preventDefault();
      }
      return;
    }
    if ($event.key === "Backspace" && !inputValue.value && tags.value.length) {
      removeTag(tags.value.length - 1);
      return;
    }
    // ArrowLeft at the start of the input goes to the tags
    if ($event.key === "ArrowLeft" &&
      $event.target.selectionEnd === 0 &&
      getRemoveButtons().length) {
      $event.preventDefault();
      focusRemoveButton(getRemoveButtons().length - 1);
    }
  };

  /**
   * The keyboard on the remove buttons of the tags: arrows between them (ArrowRight after the last one: the input),
   * Home / End, Backspace / Delete remove the tag and keep the focus on the tags,
   * F2 edits, Alt+arrows move the tag (is-sortable).
   */
  const onTagKeydown = ($event, index) => {
    const COUNT = getRemoveButtons().length;
    if (isSortable.value && $event.altKey && ($event.key === "ArrowLeft" || $event.key === "ArrowRight")) {
      $event.preventDefault();
      moveTag(index, index + ($event.key === "ArrowLeft" ? -1 : 1));
    } else if ($event.key === "F2") {
      $event.preventDefault();
      startEdit(index);
    } else if ($event.key === "ArrowLeft") {
      $event.preventDefault();
      focusRemoveButton(Math.max(index - 1, 0));
    } else if ($event.key === "ArrowRight") {
      $event.preventDefault();
      if (index + 1 < COUNT) {
        focusRemoveButton(index + 1);
      } else {
        inputRef.value?.focus();
      }
    } else if ($event.key === "Home" || $event.key === "End") {
      $event.preventDefault();
      focusRemoveButton($event.key === "Home" ? 0 : COUNT - 1);
    } else if ($event.key === "Backspace" || $event.key === "Delete") {
      $event.preventDefault();
      removeTag(index, { focusIndex: index > 0 ? index - 1 : 0 });
    }
  };

  const onDragstart = ($event, index) => {
    dragIndex = index;
    $event.dataTransfer?.setData("text/plain", String(index));
  };

  const onDragover = $event => {
    if (dragIndex !== -1) {
      $event.preventDefault();
    }
  };

  const onDrop = ($event, index) => {
    $event.preventDefault();
    moveTag(dragIndex, index, { focus: false });
    dragIndex = -1;
  };

  const onPaste = $event => {
    const TEXT = $event.clipboardData?.getData("text") || "";
    if (!splitRegExp.value.test(TEXT)) {
      return;
    }
    $event.preventDefault();
    const PARTS = `${ inputValue.value }${ TEXT }`.split(splitRegExp.value);
    addTags(PARTS);
    inputValue.value = "";
  };

  // add-on-blur false: the typed text stays in the input, an edit is canceled
  const onBlur = () => {
    if (!addOnBlur.value) {
      cancelEdit();
      return;
    }
    if (inputValue.value.trim()) {
      addInputValue();
    }
  };

  const focus = () => {
    inputRef.value?.focus();
  };

  onBeforeUnmount(() => clearTimeout(flashTimer));

  return {
    addInputValue,
    addTags,
    announcement,
    cancelEdit,
    editIndex,
    feedback,
    flashIndex,
    focus,
    inputRef,
    inputValue,
    isMaxReached,
    listRef,
    moveTag,
    onBlur,
    onDragover,
    onDragstart,
    onDrop,
    onInput,
    onKeydown,
    onPaste,
    onTagKeydown,
    removeAll,
    removeTag,
    startEdit,
    tags,
    translate,
  };
}
