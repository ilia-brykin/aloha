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

  const labelValueLocal = computed(() => {
    if (isModelTrue.value) {
      return trueLabel.value;
    }
    if (isModelFalse.value) {
      return falseLabel.value;
    }
    return defaultLabel.value;
  });

  return {
    labelValueLocal,
  };
}
