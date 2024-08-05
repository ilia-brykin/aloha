import {
  computed,
  ref,
} from "vue";


export default function ToggleAPI({
  isTypePassword = computed(() => false),
  typeLocal = ref(""),
}) {
  const toggleType = () => {
    typeLocal.value = isTypePassword.value ? "text" : "password";
  };

  const btnToggleTypeTitle = computed(() => {
    return isTypePassword.value ?
      "_A_INPUT_SHOW_PASSWORD_" :
      "_A_INPUT_HIDE_PASSWORD_";
  });

  return {
    btnToggleTypeTitle,
    toggleType,
  };
}
