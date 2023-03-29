import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import {
  isNumber,
} from "lodash-es";

export default function InputEventsAPI(props, {
  decrease = () => {},
  increase = () => {},
  inputRef = ref({}),
  onBlur = () => {},
  setCurrentValue = () => {},
  userInput = ref(null),
  currentValue = ref(undefined),
  displayValue = computed(() => ""),
}) {
  const eAllowed = toRef(props, "eAllowed");
  const min = toRef(props, "min");
  const modelValue = toRef(props, "modelValue");

  // const isInteger = computed(() => {
  //   return type.value === "integer";
  // });

  // const reWithPointSymbol = computed(() => {
  //   if (isInteger.value) {
  //     if (min.value >= 0) {
  //       return /^\d+$/; // integer positiv
  //     }
  //     return /^-$|^-?\d+$/; // minus or integer negativ or integer positiv
  //   }
  //   if (min.value >= 0) {
  //     return /^\d+[.,]?$|^-?\d+([.,]\d+)?$/; // float or integer positiv
  //   }
  //   return /^-$|^-?\d+[.,]?$|^-?\d+([.,]\d+)?$/; // float or integer negativ
  // });

  // const reWithoutPointSymbol = computed(() => {
  //   if (isInteger.value) {
  //     if (min.value >= 0) {
  //       return /^\d+$/; // integer positiv
  //     }
  //     return /^-$|^-?\d+$/; // minus or integer negativ or integer positiv
  //   }
  //   if (min.value >= 0) {
  //     return /^\d+[.,]?$|^\d+([.,]\d+)?$/; // float or integer positiv
  //   }
  //   return /^-$|^-?\d+[.,]?$|^-?\d+([.,]\d+)?$/; // float or integer negativ
  // });

  // const isTextValid = ({ text, re }) => {
  //   return re.test(text);
  // };

  const handleInput = $event => {
    const value = $event.target.value;
    userInput.value = value;
    const newVal = value === "" ? null : Number(value);
    setCurrentValue(newVal, false);

    // if (isTextValid({ text: value, re: reWithPointSymbol.value })) {
    //   userInput.value = value;
    //   const newVal = value === "" ? null : Number(value);
    //   setCurrentValue(newVal, false);
    // } else {
    //   setCurrentValue(modelValue.value, false);
    //
    //   $event.stopPropagation();
    // }
  };
  const handleInputChange = $event => {
    const value = $event.target.value;
    const newVal = value !== "" ? Number(value) : "";
    if ((isNumber(newVal) && !Number.isNaN(newVal)) || value === "") {
      setCurrentValue(newVal);
    }
    userInput.value = null;
  };

  const handleKeydown = $event => {
    if ($event.keyCode === AKeysCode.arrowUp) {
      increase();
      $event.preventDefault();
    } else if ($event.keyCode === AKeysCode.arrowDown) {
      decrease();
      $event.preventDefault();
    } else if (!eAllowed.value && $event.keyCode === AKeysCode.e) {
      $event.preventDefault();
      $event.stopPropagation();
    } else if (min.value >= 0 && $event.keyCode === AKeysCode.minus) {
      $event.preventDefault();
      $event.stopPropagation();
    } else if ($event.keyCode === AKeysCode.plus) {
      $event.preventDefault();
      $event.stopPropagation();
    }
  };

  const onBlurNumber = $event => {
    if (userInput.value !== null ||
      (!modelValue.value && modelValue.value !== 0)) {
      userInput.value = null;
      currentValue.value = modelValue.value;
      inputRef.value.value = displayValue.value;
    }
    onBlur($event);
  };

  // function getRawText(input) {
  //   const sel = saveSelection();
  //   input.select();
  //   const text = getSelection().toString();
  //   restoreSelection(sel);
  //   return text;
  // }
  //
  // function restoreSelection(range) {
  //   const selection = getSelection();
  //   selection.removeAllRanges();
  //   selection.addRange(range);
  // }
  //
  // function saveSelection() {
  //   const selection = getSelection();
  //   return selection.rangeCount === 0 ? null : selection.getRangeAt(0);
  // }

  return {
    handleInput,
    handleInputChange,
    handleKeydown,
    onBlurNumber
  };
}
