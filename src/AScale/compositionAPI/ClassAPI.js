import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const value = toRef(props, "value");
  const classNegative = toRef(props, "classNegative");
  const classPositive = toRef(props, "classPositive");
  const classNeutral = toRef(props, "classNeutral");

  const cssClass = computed(() => {
    if (value.value === 0) {
      if (classNeutral.value) {
        return classNeutral.value;
      }
    } else if (value.value < 0) {
      if (classNegative.value) {
        return classNegative.value;
      }
    } else {
      if (classPositive.value) {
        return classPositive.value;
      }
    }
    return undefined;
  });

  return {
    cssClass,
  };
}
