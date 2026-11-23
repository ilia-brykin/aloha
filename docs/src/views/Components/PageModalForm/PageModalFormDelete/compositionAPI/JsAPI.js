export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
    ATranslation,
  },
  setup() {
    const model = ref({
      title: "Release 3.0",
      priority: "high",
      period: undefined,
      hours: 8,
      progress: 40,
      done: false,
    });
    const status = ref(undefined);
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
        required: true,
      },
      {
        type: "select",
        id: "priority",
        label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_",
        data: [
          { label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_LOW_", value: "low" },
          { label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_MEDIUM_", value: "medium" },
          { label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_HIGH_", value: "high" },
        ],
      },
      {
        type: "dateRange",
        id: "period",
        label: "_A_FORM_EXAMPLE_PERIOD_",
        classColumn: "a_column a_column_12",
      },
      {
        type: "integerNonNegative",
        id: "hours",
        label: "_A_MODAL_FORM_EXAMPLE_HOURS_",
      },
      {
        type: "slider",
        id: "progress",
        label: "_A_MODAL_FORM_EXAMPLE_PROGRESS_",
        step: 10,
      },
      {
        type: "oneCheckbox",
        id: "done",
        label: "_A_MODAL_FORM_EXAMPLE_DONE_",
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

    const save = () => {
      status.value = "_A_MODAL_FORM_EXAMPLE_STATUS_SAVED_";
      closeModal();
    };

    const remove = () => {
      status.value = "_A_MODAL_FORM_EXAMPLE_STATUS_DELETED_";
      closeModal();
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
      remove,
      save,
      status,
    };
  },
};`;

  return {
    codeJs,
  };
}
