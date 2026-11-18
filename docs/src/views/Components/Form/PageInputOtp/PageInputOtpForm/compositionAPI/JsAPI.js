export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageInputOtpForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      code: "",
      voucher: "",
    });
    const data = [
      {
        id: "code",
        type: "otp",
        label: "_A_INPUT_OTP_EXAMPLE_LABEL_",
        required: true,
      },
      {
        id: "voucher",
        type: "otp",
        label: "_A_INPUT_OTP_EXAMPLE_LABEL_VOUCHER_",
        charType: "alphanumeric",
        isUppercase: true,
        length: 8,
        separator: ({ index }) => (index === 3 ? "-" : ""),
      },
    ];

    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
