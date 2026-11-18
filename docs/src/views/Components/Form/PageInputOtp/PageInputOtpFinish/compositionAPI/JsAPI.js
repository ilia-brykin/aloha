export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AAlert,
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpFinish",
  components: {
    AAlert,
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const errors = ref(undefined);
    const isSuccess = ref(false);
    const otpRef = ref(undefined);

    const onUpdateModel = () => {
      errors.value = undefined;
      isSuccess.value = false;
    };

    const onFinish = ({ model: code }) => {
      if (code === "246810") {
        errors.value = undefined;
        isSuccess.value = true;
        return;
      }
      errors.value = "_A_INPUT_OTP_EXAMPLE_ERROR_";
      model.value = "";
      otpRef.value.focus({ index: 0 });
    };

    return {
      errors,
      isSuccess,
      model,
      onFinish,
      onUpdateModel,
      otpRef,
    };
  },
};`;

  return {
    codeJs,
  };
}
