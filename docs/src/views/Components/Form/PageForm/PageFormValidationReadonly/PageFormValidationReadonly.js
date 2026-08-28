import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFormValidationReadonly",
  components: {
    AButton,
    AForm,
    AlohaExample,
  },
  setup() {
    const data = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
        required: true,
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
        required: true,
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
      },
    ];
    const errors = ref({});
    const model = ref({
      name: "",
      email: "",
      notes: "",
    });
    const readonly = ref(false);

    const clearErrors = () => {
      errors.value = {};
    };
    const toggleReadonly = () => {
      readonly.value = !readonly.value;
    };
    const validate = () => {
      const errorsLocal = {};
      if (!model.value.name) {
        errorsLocal.name = "_A_FORM_EXAMPLE_REQUIRED_ERROR_";
      }
      if (!model.value.email) {
        errorsLocal.email = "_A_FORM_EXAMPLE_REQUIRED_ERROR_";
      }
      errors.value = errorsLocal;
    };

    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      clearErrors,
      codeHtml,
      codeJs,
      data,
      errors,
      model,
      readonly,
      toggleReadonly,
      validate,
    };
  },
};
