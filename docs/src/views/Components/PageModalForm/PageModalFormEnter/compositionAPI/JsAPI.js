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
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_MODAL_FORM_ENTER_FIELD_",
      },
    ];
    const isModalVisible = ref(false);
    const model = ref({});
    const saved = ref("");

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    // the save button and Enter in the field
    const save = () => {
      saved.value = model.value.title || "";
      closeModal();
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
      save,
      saved,
    };
  },
};`;

  return {
    codeJs,
  };
}
