import {
  computed,
  toRef,
} from "vue";

export default function LabelAPI(props, {
  isModelFalse = computed(() => false),
  isModelTrue = computed(() => false),
}) {
  const trueLabel = toRef(props, "trueLabel");
  const falseLabel = toRef(props, "falseLabel");
  const defaultLabel = toRef(props, "defaultLabel");
  const readonly = toRef(props, "readonly");
  const readonlyDefault = toRef(props, "readonlyDefault");

  const labelValueLocal = computed(() => {
    if (isModelTrue.value) {
      return trueLabel.value;
    }
    if (isModelFalse.value) {
      return falseLabel.value;
    }
    if (readonly.value) {
      return readonlyDefault.value;
    }
    return defaultLabel.value;
  });

  return {
    labelValueLocal,
  };
}
