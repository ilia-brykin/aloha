import {
  computed,
  nextTick,
  ref,
  toRef,
  watch,
} from "vue";

import {
  isFunction,
  isNil,
} from "lodash-es";

const PATTERNS = {
  numeric: /^\d$/,
  alphanumeric: /^[\p{L}\p{N}]$/u,
};

export default function CharsAPI(props, { emit }, {
  changeModel = () => {},
}) {
  const charType = toRef(props, "charType");
  const isUppercase = toRef(props, "isUppercase");
  const length = toRef(props, "length");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");
  const validator = toRef(props, "validator");

  const charsLocal = ref([]);

  const modelValueString = computed(() => {
    if (isNil(modelValue.value)) {
      return "";
    }
    return `${ modelValue.value }`;
  });

  const modelLocal = computed(() => charsLocal.value.join(""));

  const indexes = computed(() => [...Array(length.value).keys()]);

  const isComplete = computed(() => {
    return charsLocal.value.length === length.value &&
      charsLocal.value.every(char => !!char);
  });

  const indexFirstEmpty = computed(() => {
    const INDEX = charsLocal.value.findIndex(char => !char);
    if (INDEX === -1) {
      return charsLocal.value.length < length.value ? charsLocal.value.length : length.value - 1;
    }
    return INDEX;
  });

  const normalizeChar = char => {
    return isUppercase.value ? char.toLocaleUpperCase() : char;
  };

  const isCharAllowed = ({ char, index }) => {
    if (isFunction(validator.value)) {
      return !!validator.value({ char, index });
    }
    const PATTERN = PATTERNS[charType.value];
    if (PATTERN) {
      return PATTERN.test(char);
    }
    return !/\s/.test(char);
  };

  const setCharsFromModel = () => {
    if (modelValueString.value === modelLocal.value) {
      return;
    }
    const CHARS = [...modelValueString.value].slice(0, length.value);
    charsLocal.value = indexes.value.map(index => CHARS[index] || "");
  };

  const emitModel = ({ triggerDetails }) => {
    const MODEL = modelLocal.value;
    changeModel({
      model: MODEL === "" ? modelUndefined.value : MODEL,
      triggerDetails,
    });
    if (isComplete.value) {
      // After the focus was moved, so that the handler of finish can move the focus too.
      nextTick(() => {
        emit("finish", {
          model: MODEL,
        });
      });
    }
  };

  /**
   * Puts the allowed characters of the text into the cells, starting at the index.
   * Returns the count of the characters that were placed.
   */
  const setText = ({ text, index, triggerDetails = "input" }) => {
    const CHARS = [...charsLocal.value];
    let indexCurrent = index;
    let count = 0;
    [...text].forEach(char => {
      if (indexCurrent >= length.value) {
        return;
      }
      if (!isCharAllowed({ char, index: indexCurrent })) {
        return;
      }
      CHARS[indexCurrent] = normalizeChar(char);
      indexCurrent++;
      count++;
    });
    if (count) {
      charsLocal.value = CHARS;
      emitModel({ triggerDetails });
    }
    return count;
  };

  const clearChar = ({ index, triggerDetails = "delete" }) => {
    if (!charsLocal.value[index]) {
      return false;
    }
    const CHARS = [...charsLocal.value];
    CHARS[index] = "";
    charsLocal.value = CHARS;
    emitModel({ triggerDetails });
    return true;
  };

  watch([modelValue, length], setCharsFromModel, {
    immediate: true,
  });

  return {
    charsLocal,
    clearChar,
    indexes,
    indexFirstEmpty,
    isCharAllowed,
    isComplete,
    modelLocal,
    setText,
  };
}
