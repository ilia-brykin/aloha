import {
  computed,
} from "vue";

export default function ClassAPI({
  isBtnShowPasswordVisible = computed(() => false),
  isClearButtonLocal = computed(() => false),
}) {
  const inputClassBtns = computed(() => {
    if (isBtnShowPasswordVisible.value) {
      if (isClearButtonLocal.value) {
        return "a_form_element_with_two_btns";
      }

      return "a_form_element_with_one_btn";
    }

    if (isClearButtonLocal.value) {
      return "a_form_element_with_one_btn";
    }

    return undefined;
  });

  return {
    inputClassBtns,
  };
}

