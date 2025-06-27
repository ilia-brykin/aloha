import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import {
  includes,
  isNil,
  times,
} from "lodash-es";

export default function InputEventsAPI(props, {
  adjustFloatPartAndDivider = () => {},
  decrease = () => {},
  getCleanIntValue = () => {},
  increase = () => {},
  modelNumber = computed(() => undefined),
  modelUndefinedLocal = computed(() => undefined),
  onBlur = () => {},
  setCurrentValue = () => {},
}) {
  const decimalDivider = toRef(props, "decimalDivider");
  const inputRef = ref(undefined);
  const integerPartMaxLength = toRef(props, "integerPartMaxLength");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const modelValue = toRef(props, "modelValue");
  const readonly = toRef(props, "readonly");
  const required = toRef(props, "required");
  const decimalPartLength = toRef(props, "decimalPartLength");
  const thousandDivider = toRef(props, "thousandDivider");
  const validationOnChange = toRef(props, "validationOnChange");

  const isTimeoutActive = ref(0);
  const timeoutDelay = navigator.userAgent.indexOf("Firefox") !== -1 ? 1 : 0;

  const allowedButtons = [
    AKeysCode.tab,
    AKeysCode.del,
    AKeysCode.escape,
    AKeysCode.backspace,
    AKeysCode.arrowLeft,
    AKeysCode.arrowRight,
    AKeysCode.home,
    AKeysCode.end,
  ];

  const isInteger = computed(() => {
    return !decimalPartLength.value;
  });

  const getNumValue = val => {
    return Number(`${ val }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."));
  };

  const setValueLocal = (val, updateOutside) => {
    setCurrentValue(val, updateOutside);
  };

  const setCursorPosition = position => {
    requestAnimationFrame(() => {
      inputRef.value.setSelectionRange(position, position);
    });
  };

  const setMaximumValue = () => {
    const newVal = adjustFloatPartAndDivider(max.value);
    setValueLocal(newVal);
  };

  const setMinimumValue = () => {
    const newVal = adjustFloatPartAndDivider(min.value);
    setValueLocal(newVal);
  };

  const validateMinMax = val => {
    const numValue = getNumValue(val);
    if (numValue > max.value) {
      setMaximumValue();

      return true;
    }
    if (numValue < min.value) {
      setMinimumValue();

      return true;
    }
  };

  const handleInput = ($event, _value, updateOutside = false) => {
    if (!required.value && isNil(_value) && !$event?.target?.value) {
      setValueLocal(_value, updateOutside);

      return;
    }
    let value;
    if (updateOutside) {
      value = typeof _value === "number" ? `${ _value }`.replace(".", decimalDivider.value) : _value;
    } else {
      value = isNil(_value) ? $event.target.value : `${ _value }`;
    }
    const decimalDividerIndex = value.indexOf(decimalDivider.value);
    const hasDecimalDivider = decimalDividerIndex !== -1;
    const cursorPosition = inputRef.value?.selectionStart;
    const splitVal = value.split(decimalDivider.value);
    const setMinusSymbol = splitVal[0].length && splitVal[0][0] === "-" ? "-" : "";
    const intVal = Number(splitVal[0].replace(/[^0-9]/g, "")).toString();
    const floatVal = splitVal[1] ? splitVal[1].substring(0, decimalPartLength.value) : "";
    if (isNil(intVal) || intVal === "") {
      return;
    }
    const valWithDivider = thousandDivider.value
      ? getCleanIntValue({ value: intVal, thousandDivider: thousandDivider.value })
      : intVal;
    let newVal;
    if (!isInteger.value) {
      if (updateOutside) {
        const floatValLocal = floatVal || "";
        const zerosToAdd = times(decimalPartLength.value - floatValLocal.length, () => "0").join("");
        newVal = `${ setMinusSymbol }${ valWithDivider }${ decimalDivider.value }${ floatValLocal }${ zerosToAdd }`;
      } else if (floatVal) {
        newVal = `${ setMinusSymbol }${ valWithDivider }${ decimalDivider.value }${ floatVal }`;
      } else if (hasDecimalDivider) {
        newVal = `${ setMinusSymbol }${ valWithDivider }${ decimalDivider.value }`;
      } else {
        newVal = `${ setMinusSymbol }${ valWithDivider }`;
      }
    } else {
      newVal = `${ setMinusSymbol }${ valWithDivider }`;
    }

    if (validationOnChange.value) {
      const validationTriggered = validateMinMax(newVal);
      if (validationTriggered) {
        return;
      }
    }
    setValueLocal(newVal, updateOutside);
    setCursorPosition(cursorPosition);
  };

  const handleMinus = ({ value }) => {
    if (min.value >= 0) {
      return;
    }
    if (value[0] !== "-") {
      isTimeoutActive.value++;
      requestAnimationFrame(() => {
        const newVal = `-${ value }`;

        if (validationOnChange.value) {
          const validationTriggered = validateMinMax(newVal);
          if (validationTriggered) {
            return;
          }
        }

        setValueLocal(newVal);
        isTimeoutActive.value--;
      }, timeoutDelay);
    }
  };

  const handlePlus = ({ value }) => {
    if (value[0] === "-") {
      isTimeoutActive.value++;
      requestAnimationFrame(() => {
        const newVal = value.replace("-", "");

        if (validationOnChange.value) {
          const validationTriggered = validateMinMax(newVal);
          if (validationTriggered) {
            return;
          }
        }

        setValueLocal(newVal);
        isTimeoutActive.value--;
      }, timeoutDelay);
    }
  };

  const handleArrowLeft = ({ value }, $event) => {
    if ($event.shiftKey) {
      return;
    }
    isTimeoutActive.value++;
    requestAnimationFrame(() => {
      const cursorPositionAfterPress = inputRef.value.selectionStart;
      if (thousandDivider.value && value[cursorPositionAfterPress - 1] === thousandDivider.value) {
        const positionToSet = cursorPositionAfterPress - 1;
        setCursorPosition(positionToSet);
      }
      isTimeoutActive.value--;
    }, timeoutDelay);
  };

  const handleArrowRight = ({ value }, $event) => {
    if ($event.shiftKey) {
      return;
    }
    requestAnimationFrame(() => {
      isTimeoutActive.value++;
      const cursorPositionAfterPress = inputRef.value.selectionStart;
      if (thousandDivider.value && value[cursorPositionAfterPress - 1] === thousandDivider.value) {
        const positionToSet = cursorPositionAfterPress + 1;
        setCursorPosition(positionToSet);
      }
      isTimeoutActive.value--;
    }, timeoutDelay);
  };

  const setDecimalDivider = ({ value, cursorPosition }, isLastPosition) => {
    requestAnimationFrame(() => {
      isTimeoutActive.value++;
      let valueAfterKeyPress = inputRef.value.value;
      if (isLastPosition) {
        const positionToSet = value.length + 1;
        if (valueAfterKeyPress[valueAfterKeyPress.length - 1] === decimalDivider.value) {
          valueAfterKeyPress += times(decimalPartLength.value, () => "0").join("");
          setValueLocal(valueAfterKeyPress);
          setCursorPosition(positionToSet);
        }
      } else {
        const intVal = value.substring(0, cursorPosition)
          .split("").reverse().join("")
          .replaceAll(thousandDivider.value, "")
          .match(/.{1,3}/g).join(thousandDivider.value)
          .split("").reverse().join("");
        let floatVal = value
          .substring(cursorPosition, value.length)
          .replace(/[^0-9]/g, "")
          .substring(0, decimalPartLength.value);
        floatVal = `${ floatVal }${ times(decimalPartLength.value - floatVal.length, () => "0").join("") }`;
        const result = [
          intVal,
          floatVal,
        ].join(decimalDivider.value);
        setValueLocal(result);
        setCursorPosition(intVal.length + 1);
      }
      isTimeoutActive.value--;
    });
  };

  const setCursorPositionForBackspace = ({ cursorPosition, numberOfSymbols }) => {
    let positionToSet = cursorPosition ? cursorPosition - 1 : cursorPosition;
    const numberOfSymbolsAfterEvent = inputRef.value.value.length;
    if (numberOfSymbolsAfterEvent < numberOfSymbols - 1 && positionToSet > 0) {
      positionToSet--;
    }
    setCursorPosition(positionToSet);
  };

  const handleBackspace = ({ hasDecimalDivider, value, cursorPosition }) => {
    const numberOfSymbols = value.length;
    if (!isInteger.value) {
      const decimalDividerIndex = value.indexOf(decimalDivider.value);
      if (hasDecimalDivider && decimalDividerIndex === cursorPosition - 1) {
        const splitVal = value.split(decimalDivider.value);
        const intVal = splitVal[0];
        isTimeoutActive.value++;
        requestAnimationFrame(() => {
          setCursorPositionForBackspace({ cursorPosition, numberOfSymbols });
          setValueLocal(intVal);
          isTimeoutActive.value--;
        }, timeoutDelay);

        return;
      }
      isTimeoutActive.value++;
      requestAnimationFrame(() => {
        setCursorPositionForBackspace({ cursorPosition, numberOfSymbols });
        isTimeoutActive.value--;
      }, timeoutDelay);
    }
  };

  const handleDelete = ({ value, $event, hasDecimalDivider, cursorPosition }) => {
    if (!isInteger.value && hasDecimalDivider && value[cursorPosition] === decimalDivider.value) {
      const splitVal = value.split(decimalDivider.value);
      const intVal = splitVal[0];
      setValueLocal(intVal);
      setCursorPosition(cursorPosition);

      return;
    }
    if (thousandDivider.value) {
      if (value[cursorPosition] === thousandDivider.value) {
        $event.preventDefault();
        const positionToSet = cursorPosition;
        const splitVal = value.split(decimalDivider.value);
        const intVal = splitVal[0];
        const floatVal = splitVal[1];
        let valWithDivider = intVal.split("");
        valWithDivider.splice(cursorPosition + 1, 1);
        valWithDivider = valWithDivider
          .reverse().join("")
          .replaceAll(thousandDivider.value, "")
          .match(/.{1,3}/g).join(thousandDivider.value)
          .split("").reverse().join("");

        let newVal;
        if (!isInteger.value) {
          if (floatVal) {
            newVal = `${ valWithDivider }${ decimalDivider.value }${ floatVal }`;
          } else if (hasDecimalDivider) {
            newVal = `${ valWithDivider }${ decimalDivider.value }`;
          } else {
            newVal = valWithDivider;
          }
        } else {
          newVal = valWithDivider;
        }
        setValueLocal(newVal);
        setCursorPosition(positionToSet + 1);
      } else {
        requestAnimationFrame(() => {
          isTimeoutActive.value++;
          const valueAfterKeyPress = inputRef.value.value;
          if (valueAfterKeyPress.length < value.length - 1) {
            setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
          }
          isTimeoutActive.value--;
        }, timeoutDelay);
      }
    }
  };

  const handleKeydown = $event => {
    if (isTimeoutActive.value) {
      $event.preventDefault();

      return;
    }
    const start = inputRef.value.selectionStart;
    const end = inputRef.value.selectionEnd;
    const hasSelection = (end - start) > 0;
    const value = $event.target.value;
    const keyCode = $event.keyCode;
    const keyValue = $event.key;
    const keyIsNumber = keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105;
    const keyIsDecimalDivider = keyValue === decimalDivider.value && !!decimalPartLength.value;
    const decimalDividerIndex = $event.target.value.indexOf(decimalDivider.value);
    const hasDecimalDivider = decimalDividerIndex !== -1;
    const cursorPosition = inputRef.value.selectionStart;
    const isLastPosition = cursorPosition === value.length;
    const valueProps = {
      value,
      keyCode,
      keyValue,
      keyIsNumber,
      keyIsDecimalDivider,
      hasDecimalDivider,
      cursorPosition,
      $event,
    };

    if (keyCode === AKeysCode.arrowUp) {
      increase();
      $event.preventDefault();

      return;
    }
    if (keyCode === AKeysCode.arrowDown) {
      decrease();
      $event.preventDefault();

      return;
    }
    if (keyCode === AKeysCode.minus || keyCode === AKeysCode.numMinus) {
      handleMinus(valueProps);
      $event.preventDefault();

      return;
    }
    if (keyCode === AKeysCode.plus && $event.shiftKey || keyCode === AKeysCode.numPlus) {
      handlePlus(valueProps);
      $event.preventDefault();

      return;
    }
    if (keyCode === AKeysCode.arrowLeft) {
      handleArrowLeft(valueProps, $event);

      return;
    }
    if (keyCode === AKeysCode.arrowRight) {
      handleArrowRight(valueProps, $event);

      return;
    }
    if (keyIsDecimalDivider) {
      if (hasDecimalDivider) {
        setCursorPosition(decimalDividerIndex + 1);
        $event.preventDefault();

        return;
      }
      if (!isLastPosition) {
        $event.preventDefault();
      }
      setDecimalDivider(valueProps, isLastPosition);

      return;
    }
    if ($event.keyCode === AKeysCode.backspace) {
      if (inputRef.value.selectionStart !== inputRef.value.selectionEnd) {
        return;
      }
      handleBackspace(valueProps);

      return;
    }

    if ($event.keyCode === AKeysCode.del) {
      handleDelete(valueProps);

      return;
    }

    if (keyIsNumber && !$event.ctrlKey) {
      if (hasDecimalDivider) {
        const decimalDividerPosition = value.indexOf(decimalDivider.value);
        const splitVal = value.split(decimalDivider.value);
        const intVal = splitVal[0];
        const floatVal = splitVal[1];
        if (cursorPosition > decimalDividerPosition) {
          if (floatVal.length === decimalPartLength.value) {
            if (isLastPosition) {
              $event.preventDefault();

              return;
            }

            $event.preventDefault();
            const splitVal = value.split("");
            splitVal[cursorPosition] = keyValue;
            const newVal = splitVal.join("");
            setValueLocal(newVal);
            isTimeoutActive.value++;
            requestAnimationFrame(() => {
              setCursorPosition(cursorPosition + 1);
              isTimeoutActive.value--;
            }, timeoutDelay);

            return;
          }
        } else {
          const intValWithoutDivider = intVal.replaceAll(thousandDivider.value, "");
          if (intValWithoutDivider.length >= integerPartMaxLength.value && !hasSelection) {
            $event.preventDefault();

            return;
          }
        }
      } else {
        const intValWithoutDivider = value.replaceAll(thousandDivider.value, "");
        if (intValWithoutDivider.length >= integerPartMaxLength.value && !hasSelection) {
          $event.preventDefault();

          return;
        }
      }
    }

    if (!keyIsNumber && !$event.ctrlKey && !includes(allowedButtons, $event.keyCode)) {
      $event.preventDefault();
    }

    if ($event.keyCode !== AKeysCode.home && $event.keyCode !== AKeysCode.end && !$event.ctrlKey && $event.keyCode) {
      if (cursorPosition === 0 && value.length && value[0] === "0") {
        $event.preventDefault();
        const newVal = `${ keyValue }${ value.slice(1) }`;
        setValueLocal(newVal);
        setCursorPosition(1);
      } else {
        const numberOfSymbols = value.length;
        isTimeoutActive.value++;
        requestAnimationFrame(() => {
          let positionToSet = cursorPosition + 1;
          const numberOfSymbolsAfterEvent = inputRef.value.value.length;
          if (numberOfSymbolsAfterEvent - 1 > numberOfSymbols) {
            positionToSet++;
          } else if (numberOfSymbolsAfterEvent === numberOfSymbols) {
            positionToSet--;
          }
          setCursorPosition(positionToSet);
          isTimeoutActive.value--;
        }, timeoutDelay);
      }
    }
  };

  const handlePaste = $event => {
    $event.preventDefault();
    const pasteData = ($event.clipboardData || window.clipboardData).getData("text");
    const pastedDataArray = pasteData.split(decimalDivider.value);
    const pastedIntPart = pastedDataArray[0].replace(/[^0-9]/g, "");
    const pastedFloatPart = pastedDataArray[1]?.replace(/[^0-9]/g, "") || "";
    let modifiedData;
    const start = inputRef.value.selectionStart;
    const end = inputRef.value.selectionEnd;
    const currentValue = inputRef.value.value;
    const currentSplitVal = currentValue.split(decimalDivider.value);
    const currentIntVal = currentSplitVal[0];
    const currentIntValWithoutDivider = currentIntVal.replaceAll(thousandDivider.value, "");
    if (currentIntValWithoutDivider.length >= integerPartMaxLength.value && (end - start) === 0) {
      return;
    }
    const hasDecimalDivider = currentValue.indexOf(decimalDivider.value) !== -1;
    const selectedPart = currentValue.substring(start, end);
    const selectedPartHasDecimalDivider = selectedPart.indexOf(decimalDivider.value) !== -1;

    if (hasDecimalDivider && !selectedPartHasDecimalDivider) {
      modifiedData = pastedFloatPart ?
        [pastedIntPart, pastedFloatPart].join("") :
        pastedIntPart;
    } else {
      modifiedData = pastedFloatPart ?
        [pastedIntPart, pastedFloatPart].join(decimalDivider.value) :
        pastedIntPart;
    }

    const newVal = currentValue.slice(0, start) + modifiedData + currentValue.slice(end);
    const splitVal = newVal.split(decimalDivider.value);
    const intVal = splitVal[0];
    const floatVal = splitVal[1];
    const intValWithoutDivider = intVal.replaceAll(thousandDivider.value, "");
    const intValToPaste = intValWithoutDivider.substring(0, integerPartMaxLength.value)
      .split("")
      .reverse().join("")
      .match(/.{1,3}/g).join(thousandDivider.value)
      .split("").reverse().join("");
    const valueToPaste = [intValToPaste, floatVal].join(decimalDivider.value);
    handleInput(null, valueToPaste);
  };

  const onBlurNumber = $event => {
    let valueToCheck = $event.target.value;
    if (!isInteger.value) {
      const splitVal = valueToCheck.split(decimalDivider.value);
      valueToCheck = splitVal[0];
    }
    if (isNil(valueToCheck) || valueToCheck === "") {
      if (required.value) {
        if (min.value > 0) {
          const value = decimalDivider.value
            ? `0${ decimalDivider.value }${ times(decimalPartLength.value, () => "0").join("") }`
            : "0";
          setValueLocal(value);
        } else {
          setMinimumValue();
        }
        onBlur($event);

        return;
      }
      const value = modelUndefinedLocal.value;
      setValueLocal(value);
      onBlur($event);

      return;
    } else if (modelNumber.value < min.value) {
      setMinimumValue();

      return;
    } else if (modelNumber.value > max.value) {
      setMaximumValue();

      return;
    }
    if (decimalPartLength.value) {
      let value = `${ $event.target.value }`;
      const splitVal = value.split(decimalDivider.value);
      const floatVal = splitVal[1];
      if (value.indexOf(decimalDivider.value) === -1) {
        value += `${ decimalDivider.value }${ times(decimalPartLength.value, () => "0").join("") }`;
      } else if (floatVal.length < decimalPartLength.value) {
        value += `${ times(decimalPartLength.value - floatVal.length, () => "0").join("") }`;
      }
      setValueLocal(value);
    }
    onBlur($event);
  };

  const onClickNumber = $event => {
    isTimeoutActive.value++;
    requestAnimationFrame(() => {
      const cursorPosition = $event.target.selectionStart;
      const value = $event.target.value;
      if (thousandDivider.value && thousandDivider.value === value[cursorPosition - 1]) {
        setCursorPosition(cursorPosition - 1);
      }
      isTimeoutActive.value--;
    });
  };

  const initFirstCheck = () => {
    if (readonly.value) {
      return;
    }

    requestAnimationFrame(() => {
      let valueToSet;
      if (modelValue.value || modelValue.value === 0) {
        valueToSet = modelValue.value.toString().replace(".", decimalDivider.value);
        if (decimalDivider.value) {
          const splitVal = valueToSet.toString().split(decimalDivider.value);
          const intPart = splitVal[0];
          const setMinusSymbol = intPart[0] === "-" ? "-" : "";
          const floatPart = splitVal.length > 1 ? splitVal[1] : "";
          const floatPartLength = floatPart.length;
          const zerosToAdd = times(decimalPartLength.value - floatPartLength, () => "0").join("");

          valueToSet = `${ setMinusSymbol }${ intPart }${ decimalDivider.value }${ floatPart }${ zerosToAdd }`;
        }
      } else {
        valueToSet = required.value ?
          [
            "0",
            decimalDivider.value,
            times(decimalPartLength.value, () => "0").join(""),
          ].join("") :
          modelUndefinedLocal.value;
      }
      handleInput(null, valueToSet, true);
    });
  };

  return {
    handleInput,
    handleKeydown,
    handlePaste,
    initFirstCheck,
    inputRef,
    onBlurNumber,
    onClickNumber,
  };
}
