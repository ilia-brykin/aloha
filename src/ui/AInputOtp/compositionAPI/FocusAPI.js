import {
  ref,
} from "vue";

export default function FocusAPI(props, { emit }, {
  indexFirstEmpty = ref(0),
}) {
  const inputRefs = ref([]);
  const rootRef = ref(undefined);
  const isFocusInside = ref(false);

  const setInputRef = ({ element, index }) => {
    if (element) {
      inputRefs.value[index] = element;
    }
  };

  const focusInput = ({ index }) => {
    const INPUT = inputRefs.value[index];
    if (INPUT) {
      INPUT.focus();
      INPUT.select?.();
    }
  };

  const focus = ({ index } = {}) => {
    focusInput({
      index: index ?? indexFirstEmpty.value,
    });
  };

  const blur = () => {
    inputRefs.value.forEach(input => input?.blur());
  };

  const onFocusInput = $event => {
    $event.target.select?.();
    if (!isFocusInside.value) {
      isFocusInside.value = true;
      emit("focus", {
        event: $event,
        props,
      });
    }
  };

  const onBlurInput = $event => {
    if (rootRef.value && rootRef.value.contains($event.relatedTarget)) {
      return;
    }
    isFocusInside.value = false;
    emit("blur", {
      event: $event,
      props,
    });
  };

  const clickLabel = () => {
    focus();
  };

  return {
    blur,
    clickLabel,
    focus,
    focusInput,
    inputRefs,
    onBlurInput,
    onFocusInput,
    rootRef,
    setInputRef,
  };
}
