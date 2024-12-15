import {
  computed,
  toRef,
} from "vue";

import EyeClose from "../../../AIcon/Icons/EyeClose";
import EyeOpen from "../../../AIcon/Icons/EyeOpen";

export default function PasswordAPI(props, {
  setTypeLocal = () => {},
  typeForInput = computed(() => ""),
}) {
  const showPassword = toRef(props, "showPassword");
  const type = toRef(props, "type");

  const isBtnShowPasswordVisible = computed(() => {
    return !!(type.value === "password" && showPassword.value);
  });

  const isTypeForInputPassword = computed(() => {
    return typeForInput.value === "password";
  });

  const iconBtnShowPassword = computed(() => {
    return isTypeForInputPassword.value ? EyeClose : EyeOpen;
  });

  const toggleTypePassword = () => {
    setTypeLocal({
      type: isTypeForInputPassword.value ? "text" : "password",
    });
  };

  const titleBtnShowPassword = computed(() => {
    return isTypeForInputPassword.value ?
      "_A_INPUT_SHOW_PASSWORD_" :
      "_A_INPUT_HIDE_PASSWORD_";
  });

  return {
    iconBtnShowPassword,
    isBtnShowPasswordVisible,
    titleBtnShowPassword,
    toggleTypePassword,
  };
}
