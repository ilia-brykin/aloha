import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputOtpForm",
  components: {
    AlohaExample,
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

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      data,
      model,
    };
  },
};
