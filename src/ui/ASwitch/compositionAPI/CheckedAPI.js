import {
  computed,
} from "vue";

export default function CheckedAPI({
  isModelFalse = computed(() => false),
  isModelTrue = computed(() => false),
}) {
  const isChecked = computed(() => {
    if (isModelTrue.value) {
      return true;
    }
    if (isModelFalse.value) {
      return false;
    }
    return undefined;
  });

  return {
    isChecked,
  };
}
