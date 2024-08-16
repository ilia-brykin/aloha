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
  inputRef = ref({}),
  modelNumber = computed(() => undefined),
  modelUndefinedLocal = computed(() => undefined),
  onBlur = () => {},
  setCurrentValue = () => {},
  displayValue = ref(undefined),
}) {
  const decimalDivider = toRef(props, "decimalDivider");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const modelValue = toRef(props, "modelValue");
  const required = toRef(props, "required");
  const symbolsAfterDecimalDivider = toRef(props, "symbolsAfterDecimalDivider");
  const thousandDivider = toRef(props, "thousandDivider");
  const validationOnChange = toRef(props, "validationOnChange");

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
    return !symbolsAfterDecimalDivider.value;
  });

  const getNumValue = val => {
    return Number(`${ val }`.replaceAll(thousandDivider.value, "").replace(decimalDivider.value, "."));
  };

  const setValueLocal = val => {
    setCurrentValue(val);
    inputRef.value.value = val;
  };

  const setCursorPosition = position => {
    inputRef.value.setSelectionRange(position, position);
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
    } else if (numValue < min.value) {
      setMinimumValue();

      return true;
    }
  };

  const handleInput = ($event, _value) => {
    if (!required.value && isNil(_value) && !$event?.target?.value) {
      setValueLocal(_value);

      return;
    }
    const value = isNil(_value) ? $event.target.value : _value;
    const decimalDividerIndex = value.indexOf(decimalDivider.value);
    const hasDecimalDivider = decimalDividerIndex !== -1;
    const cursorPosition = inputRef.value.selectionStart;
    const splitVal = value.split(decimalDivider.value);
    const setMinusSymbol = splitVal[0] === "-" ? "-" : "";
    const intVal = Number(splitVal[0].replace(/[^0-9]/g, "")).toString();
    const floatVal = splitVal[1] ? splitVal[1].substring(0, symbolsAfterDecimalDivider.value) : "";
    if (isNil(intVal) || intVal === "") {
      return;
    }
    const valWithDivider = thousandDivider.value
      ? getCleanIntValue({ value: intVal, thousandDivider: thousandDivider.value })
      : intVal;
    let newVal;
    if (!isInteger.value) {
      if (floatVal) {
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
    setValueLocal(newVal);
    setCursorPosition(cursorPosition);
  };

  const handleMinus = ({ value }) => {
    if (value[0] !== "-") {
      setTimeout(() => {
        const newVal = `-${ value }`;

        if (validationOnChange.value) {
          const validationTriggered = validateMinMax(newVal);
          if (validationTriggered) {
            return;
          }
        }

        setValueLocal(newVal);
      });
    }
  };

  const handlePlus = ({ value }) => {
    if (value[0] === "-") {
      setTimeout(() => {
        const newVal = value.replace("-", "");

        if (validationOnChange.value) {
          const validationTriggered = validateMinMax(newVal);
          if (validationTriggered) {
            return;
          }
        }

        setValueLocal(newVal);
      });
    }
  };

  const handleArrowLeft = ({ value }) => {
    setTimeout(() => {
      const cursorPositionAfterPress = inputRef.value.selectionStart;
      if (thousandDivider.value && value[cursorPositionAfterPress - 1] === thousandDivider.value) {
        const positionToSet = cursorPositionAfterPress - 1;
        setCursorPosition(positionToSet);
      }
    });
  };

  const handleArrowRight = ({ value }) => {
    setTimeout(() => {
      const cursorPositionAfterPress = inputRef.value.selectionStart;
      if (thousandDivider.value && value[cursorPositionAfterPress - 1] === thousandDivider.value) {
        const positionToSet = cursorPositionAfterPress + 1;
        setCursorPosition(positionToSet);
      }
    });
  };

  const setDecimalDivider = ({ value }) => {
    setTimeout(() => {
      const positionToSet = value.length + 1;
      let valueAfterKeyPress = inputRef.value.value;
      if (valueAfterKeyPress[valueAfterKeyPress.length - 1] === decimalDivider.value) {
        valueAfterKeyPress += times(symbolsAfterDecimalDivider.value, () => "0").join("");
        setValueLocal(valueAfterKeyPress);
        setCursorPosition(positionToSet);
      }
    });
  };

  const handleBackspace = ({ hasDecimalDivider, value, cursorPosition }) => {
    if (!isInteger.value && hasDecimalDivider) {
      const decimalDividerIndex = value.indexOf(decimalDivider.value);
      if (decimalDividerIndex === cursorPosition - 1) {
        const splitVal = value.split(decimalDivider.value);
        const intVal = splitVal[0];
        setTimeout(() => {
          setValueLocal(intVal);
        });
      }

      return;
    }
    const numberOfSymbols = value.length;
    setTimeout(() => {
      let positionToSet = cursorPosition ? cursorPosition - 1 : cursorPosition;
      const numberOfSymbolsAfterEvent = inputRef.value.value.length;
      if (numberOfSymbolsAfterEvent < numberOfSymbols - 1 && positionToSet > 0) {
        positionToSet--;
      }
      setCursorPosition(positionToSet);
    });
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
        setTimeout(() => {
          const valueAfterKeyPress = inputRef.value.value;
          if (valueAfterKeyPress.length < value.length - 1) {
            setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
          }
        });
      }
    }
  };

  const handleKeydown = $event => {
    const value = $event.target.value;
    const keyCode = $event.keyCode;
    const keyValue = $event.key;
    const keyIsNumber = keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105;
    const keyIsDecimalDivider = keyValue === decimalDivider.value && !!symbolsAfterDecimalDivider.value;
    const hasDecimalDivider = $event.target.value.indexOf(decimalDivider.value) !== -1;
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
    if (keyCode === AKeysCode.plus && $event.shiftKey || keyCode.numPlus) {
      handlePlus(valueProps);
      $event.preventDefault();

      return;
    }
    if (keyCode === AKeysCode.arrowLeft) {
      handleArrowLeft(valueProps);

      return;
    }
    if (keyCode === AKeysCode.arrowRight) {
      handleArrowRight(valueProps);

      return;
    }
    if (keyIsDecimalDivider) {
      if (hasDecimalDivider || !isLastPosition) {
        $event.preventDefault();

        return;
      }
      setDecimalDivider(valueProps);

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
        if (cursorPosition > decimalDividerPosition) {
          const splitVal = value.split(decimalDivider.value);
          const floatVal = splitVal[1];

          if (floatVal.length === symbolsAfterDecimalDivider.value) {
            if (isLastPosition) {
              $event.preventDefault();

              return;
            }

            $event.preventDefault();
            const splitVal = value.split("");
            splitVal[cursorPosition] = keyValue;
            const newVal = splitVal.join("");
            setValueLocal(newVal);
            setTimeout(() => {
              setCursorPosition(cursorPosition + 1);
            });

            return;
          }
        }
      }
    }

    if (!keyIsNumber && !$event.ctrlKey && !includes(allowedButtons, $event.keyCode)) {
      $event.preventDefault();
    }

    if ($event.keyCode !== AKeysCode.home && $event.keyCode !== AKeysCode.end && !$event.ctrlKey) {
      const numberOfSymbols = value.length;
      setTimeout(() => {
        let positionToSet = cursorPosition + 1;
        const numberOfSymbolsAfterEvent = inputRef.value.value.length;
        if (numberOfSymbolsAfterEvent - 1 > numberOfSymbols) {
          positionToSet++;
        } else if (numberOfSymbolsAfterEvent === numberOfSymbols) {
          positionToSet--;
        }
        setCursorPosition(positionToSet);
      });
    }
  };

  const handlePaste = $event => {
    $event.preventDefault();
    const pasteData = ($event.clipboardData || window.clipboardData).getData("text");
    const pastedDataArray = pasteData.split(decimalDivider.value);
    const pastedIntPart = pastedDataArray[0].replace(/[^0-9]/g, "");
    const pastedFloatPart = pastedDataArray[1].replace(/[^0-9]/g, "");
    let modifiedData;
    const hasDecimalDivider = inputRef.value.value.indexOf(decimalDivider.value) !== -1;

    if (hasDecimalDivider) {
      modifiedData = pastedFloatPart ?
        [pastedIntPart, pastedFloatPart].join("") :
        pastedIntPart;
    } else {
      modifiedData = pastedFloatPart ?
        [pastedIntPart, pastedFloatPart].join(decimalDivider.value) :
        pastedIntPart;
    }

    const start = inputRef.value.selectionStart;
    const end = inputRef.value.selectionEnd;
    const text = inputRef.value.value;
    const newVal = text.slice(0, start) + modifiedData + text.slice(end);
    handleInput(null, newVal);
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
            ? `0${ decimalDivider.value }${ times(symbolsAfterDecimalDivider.value, () => "0").join("") }`
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
    if (symbolsAfterDecimalDivider.value) {
      let value = $event.target.value;
      const splitVal = value.split(decimalDivider.value);
      const floatVal = splitVal[1];
      if (value.indexOf(decimalDivider.value) === -1) {
        value += `${ decimalDivider.value }${ times(symbolsAfterDecimalDivider.value, () => "0").join("") }`;
      } else if (floatVal.length < symbolsAfterDecimalDivider.value) {
        value += `${ times(symbolsAfterDecimalDivider.value - floatVal.length, () => "0").join("") }`;
      }
      setValueLocal(value);
    } else {
      inputRef.value.value = displayValue.value;
    }
    onBlur($event);
  };

  const onClickNumber = $event => {
    setTimeout(() => {
      const cursorPosition = $event.target.selectionStart;
      const value = $event.target.value;
      if (thousandDivider.value && thousandDivider.value === value[cursorPosition - 1]) {
        setCursorPosition(cursorPosition - 1);
      }
    });
  };

  const initFirstCheck = () => {
    setTimeout(() => {
      let valueToSet = required.value ? "0" : modelUndefinedLocal.value;
      if (modelValue.value) {
        valueToSet = modelValue.value.toString().replace(".", decimalDivider.value);
      }
      handleInput(null, valueToSet);
    });
  };

  return {
    handleInput,
    handleKeydown,
    handlePaste,
    initFirstCheck,
    onClickNumber,
    onBlurNumber,
  };
}
