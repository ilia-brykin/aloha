import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import UtilsAPI, {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  escapeRegExp,
  isArray,
} from "lodash-es";

export default function TagsAPI(props, {
  changeModel = () => {},
  // is-only-from-list: the value is a suggestion (local data or the last answer of the server)
  isInData = () => true,
  textsLocal = computed(() => ({})),
}) {
  const allowDuplicates = toRef(props, "allowDuplicates");
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const disabled = toRef(props, "disabled");
  const isOnlyFromList = toRef(props, "isOnlyFromList");
  const maxTags = toRef(props, "maxTags");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");
  const separators = toRef(props, "separators");

  const inputRef = ref(undefined);
  const listRef = ref(undefined);
  const inputValue = ref("");
  // text of the live region: added, removed, duplicate, limit
  const announcement = ref("");

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

  // a key of texts (own text or translation key), {{ … }} also in an own text
  const translate = (key, extra) => {
    const TEXT = getTranslatedText({
      placeholder: textsLocal.value[key],
      extra,
      alwaysTranslate: alwaysTranslate.value,
    });
    return extra ? replaceText({ text: TEXT, object: extra }) : TEXT;
  };

  const announce = async text => {
    // emptied first, so the same text is announced again
    announcement.value = "";
    await nextTick();
    announcement.value = text;
  };

  const setModel = model => {
    changeModel({
      model: model.length ? model : modelUndefined.value,
    });
  };

  const isDuplicate = (value, list) => {
    const VALUE = value.toLowerCase();
    return list.some(item => String(item).toLowerCase() === VALUE);
  };

  /**
   * Adds the values that are not empty, not duplicate, within max-tags (and from the list with is-only-from-list).
   * Returns true if the input can be cleared (something was added or was a duplicate).
   */
  const addTags = values => {
    if (disabled.value) {
      return false;
    }
    const MODEL = [...tags.value];
    const ADDED = [];
    let duplicate;
    let notInList;
    let isLimit = false;
    values.forEach(item => {
      const VALUE = String(item).trim();
      if (!VALUE) {
        return;
      }
      if (isOnlyFromList.value && !isInData(VALUE)) {
        notInList = VALUE;
        return;
      }
      if (!allowDuplicates.value && isDuplicate(VALUE, MODEL)) {
        duplicate = VALUE;
        return;
      }
      if (maxTags.value && MODEL.length >= maxTags.value) {
        isLimit = true;
        return;
      }
      MODEL.push(VALUE);
      ADDED.push(VALUE);
    });

    if (ADDED.length) {
      setModel(MODEL);
    }
    if (isLimit) {
      announce(translate("max", { max: maxTags.value }));
    } else if (ADDED.length) {
      announce(translate("added", { tag: ADDED.join(", ") }));
    } else if (duplicate) {
      announce(translate("duplicate", { tag: duplicate }));
    } else if (notInList) {
      announce(translate("onlyFromList", { tag: notInList }));
    }

    return !isLimit && (ADDED.length > 0 || !!duplicate);
  };

  const addInputValue = () => {
    if (addTags([inputValue.value])) {
      inputValue.value = "";
    }
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
    announce(translate("removed", { tag: TAG }));
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

  const onInput = $event => {
    inputValue.value = $event.target.value;
  };

  const onKeydown = $event => {
    if (separators.value.includes($event.key)) {
      if (inputValue.value.trim()) {
        $event.preventDefault();
        addInputValue();
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
    const INPUT = $event.target;
    if ($event.key === "ArrowLeft" &&
      INPUT.selectionEnd === 0 &&
      getRemoveButtons().length) {
      $event.preventDefault();
      focusRemoveButton(getRemoveButtons().length - 1);
    }
  };

  /**
   * The keyboard on the remove buttons of the tags: arrows between them (ArrowRight after the last one: the input),
   * Home / End, Backspace / Delete remove the tag and keep the focus on the tags.
   */
  const onTagKeydown = ($event, index) => {
    const COUNT = getRemoveButtons().length;
    if ($event.key === "ArrowLeft") {
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

  const onBlur = () => {
    if (inputValue.value.trim()) {
      addInputValue();
    }
  };

  const focus = () => {
    inputRef.value?.focus();
  };

  return {
    addTags,
    announcement,
    focus,
    inputRef,
    inputValue,
    isMaxReached,
    listRef,
    onBlur,
    onInput,
    onKeydown,
    onPaste,
    onTagKeydown,
    removeAll,
    removeTag,
    tags,
    translate,
  };
}
