import {
  toRef,
} from "vue";

export default function InputAPI(props, {
  charsLocal,
  clearChar = () => {},
  focusInput = () => {},
  setText = () => 0,
}) {
  const disabled = toRef(props, "disabled");
  const length = toRef(props, "length");

  const getTextWithoutOldChar = ({ value, oldChar }) => {
    if (!oldChar || value.length < 2) {
      return value;
    }
    if (value.startsWith(oldChar)) {
      return value.slice(oldChar.length);
    }
    if (value.endsWith(oldChar)) {
      return value.slice(0, -oldChar.length);
    }
    return value;
  };

  const onInput = ({ $event, index }) => {
    const INPUT = $event.target;
    const VALUE = INPUT.value;
    const OLD_CHAR = charsLocal.value[index] || "";
    if (VALUE === "") {
      clearChar({ index });
      return;
    }
    const COUNT = setText({
      text: getTextWithoutOldChar({ value: VALUE, oldChar: OLD_CHAR }),
      index,
    });
    // The input shows only the char of the model, also if the text was not allowed.
    INPUT.value = charsLocal.value[index] || "";
    if (COUNT) {
      focusInput({
        index: Math.min(index + COUNT, length.value - 1),
      });
    }
  };

  const onPaste = ({ $event, index }) => {
    $event.preventDefault();
    if (disabled.value) {
      return;
    }
    const TEXT = ($event.clipboardData?.getData("text") || "").trim();
    if (!TEXT) {
      return;
    }
    // A whole code is always pasted from the first cell.
    const INDEX_START = TEXT.length >= length.value ? 0 : index;
    const COUNT = setText({
      text: TEXT,
      index: INDEX_START,
      triggerDetails: "paste",
    });
    if (COUNT) {
      focusInput({
        index: Math.min(INDEX_START + COUNT, length.value - 1),
      });
    }
  };

  return {
    onInput,
    onPaste,
  };
}
