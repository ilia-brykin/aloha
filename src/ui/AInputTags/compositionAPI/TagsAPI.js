import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  escapeRegExp,
  isArray,
} from "lodash-es";

export default function TagsAPI(props, {
  changeModel = () => {},
}) {
  const allowDuplicates = toRef(props, "allowDuplicates");
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const disabled = toRef(props, "disabled");
  const maxTags = toRef(props, "maxTags");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");
  const separators = toRef(props, "separators");

  const inputRef = ref(undefined);
  const inputValue = ref("");
  // text of the live region: added, removed, duplicate, limit
  const announcement = ref("");

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

  const translate = (placeholder, extra) => {
    return getTranslatedText({
      placeholder,
      extra,
      alwaysTranslate: alwaysTranslate.value,
    });
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
   * Adds the values that are not empty, not duplicate and within max-tags.
   * Returns true if the input can be cleared (something was added or was a duplicate).
   */
  const addTags = values => {
    if (disabled.value) {
      return false;
    }
    const MODEL = [...tags.value];
    const ADDED = [];
    let duplicate;
    let isLimit = false;
    values.forEach(item => {
      const VALUE = String(item).trim();
      if (!VALUE) {
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
      announce(translate("_A_INPUT_TAGS_MAX_", { max: maxTags.value }));
    } else if (ADDED.length) {
      announce(translate("_A_INPUT_TAGS_ADDED_", { tag: ADDED.join(", ") }));
    } else if (duplicate) {
      announce(translate("_A_INPUT_TAGS_DUPLICATE_", { tag: duplicate }));
    }

    return !isLimit && (ADDED.length > 0 || !!duplicate);
  };

  const addInputValue = () => {
    if (addTags([inputValue.value])) {
      inputValue.value = "";
    }
  };

  const removeTag = index => {
    if (disabled.value) {
      return;
    }
    const TAG = tags.value[index];
    setModel(tags.value.filter((_, itemIndex) => itemIndex !== index));
    announce(translate("_A_INPUT_TAGS_REMOVED_", { tag: TAG }));
    // the remove button is gone: the focus goes back to the input
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
    onBlur,
    onInput,
    onKeydown,
    onPaste,
    removeTag,
    tags,
  };
}
