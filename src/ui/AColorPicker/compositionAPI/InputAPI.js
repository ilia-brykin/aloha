import {
  computed,
  ref,
  watch,
} from "vue";

import {
  parseColor,
} from "../utils/colorUtils";

/**
 * Text field in the panel: any supported format can be typed in.
 * The value is applied with Enter or when the field loses focus.
 */
export default function InputAPI({
  setColor = () => {},
  valueLocal = computed(() => ""),
}) {
  const inputErrors = ref(undefined);
  const inputText = ref("");

  watch(valueLocal, value => {
    inputText.value = value;
    inputErrors.value = undefined;
  }, {
    immediate: true,
  });

  const onInputChange = ({ model }) => {
    inputText.value = model;
  };

  const applyInput = () => {
    if (inputText.value === valueLocal.value) {
      inputErrors.value = undefined;
      return true;
    }
    const COLOR = parseColor(inputText.value);
    if (!COLOR) {
      inputErrors.value = "_A_COLOR_PICKER_INVALID_";
      return false;
    }
    setColor(COLOR);
    inputText.value = valueLocal.value;
    inputErrors.value = undefined;
    return true;
  };

  const onInputKeydown = $event => {
    if ($event.key === "Enter") {
      $event.preventDefault();
      applyInput();
    }
  };

  return {
    applyInput,
    inputErrors,
    inputText,
    onInputChange,
    onInputKeydown,
  };
}
