import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props, {
  isBtnShowPasswordVisible = computed(() => false),
  isClearButtonLocal = computed(() => false),
}) {
  const iconAppend = toRef(props, "iconAppend");

  const inputClassBtns = computed(() => {
    const actionsCount = [
      iconAppend.value,
      isBtnShowPasswordVisible.value,
      isClearButtonLocal.value,
    ].filter(Boolean).length;

    if (actionsCount === 3) {
      return "a_form_element_with_three_btns";
    }

    if (actionsCount === 2) {
      return "a_form_element_with_two_btns";
    }

    if (actionsCount === 1) {
      return "a_form_element_with_one_btn";
    }

    return undefined;
  });

  return {
    inputClassBtns,
  };
}
