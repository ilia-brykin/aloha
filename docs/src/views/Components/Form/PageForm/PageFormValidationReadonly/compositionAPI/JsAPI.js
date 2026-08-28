export default function JsAPI() {
  const codeJs = `import { ref } from "vue";
import { AButton, AForm } from "aloha-vue";

export default {
  components: { AButton, AForm },
  setup() {
    const data = [
      { type: "text", id: "name", label: "Name", required: true },
      { type: "email", id: "email", label: "Email", required: true },
      { type: "textarea", id: "notes", label: "Notes" },
    ];
    const model = ref({ name: "", email: "", notes: "" });
    const errors = ref({});
    const readonly = ref(false);

    const validate = () => {
      const errorsLocal = {};
      if (!model.value.name) errorsLocal.name = "This field is required.";
      if (!model.value.email) errorsLocal.email = "This field is required.";
      errors.value = errorsLocal;
    };
    const clearErrors = () => {
      errors.value = {};
    };
    const toggleReadonly = () => {
      readonly.value = !readonly.value;
    };

    return {
      clearErrors,
      data,
      errors,
      model,
      readonly,
      toggleReadonly,
      validate,
    };
  },
};`;

  return {
    codeJs,
  };
}
