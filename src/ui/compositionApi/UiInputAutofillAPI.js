import {
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

export default function UiInputAutofillAPI({
  inputRef = ref(undefined),
}) {
  const isAutofill = ref(undefined);
  const onAutoFillStart = () => {
    isAutofill.value = true;
  };

  const onAutoFillCancel = () => {
    isAutofill.value = false;
  };

  const onAnimationstart = $event => {
    switch ($event.animationName) {
    case "onAutoFillStart":
      return onAutoFillStart();
    case "onAutoFillCancel":
      return onAutoFillCancel();
    }
  };

  onMounted(() => {
    inputRef.value && inputRef.value.addEventListener("animationstart", onAnimationstart);
  });

  onBeforeUnmount(() => {
    inputRef.value &&
    inputRef.value.removeEventListener &&
    inputRef.value.removeEventListener("animationstart", onAnimationstart);
  });

  return {
    isAutofill,
  };
}
