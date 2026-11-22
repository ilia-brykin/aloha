export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
  },
  setup() {
    const model = ref({ name: "Aloha", email: "aloha@example.com", notes: "" });
    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
    };
  },
};`;

  return {
    codeJs,
  };
}
