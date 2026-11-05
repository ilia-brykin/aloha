import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import {
  AButton,
  AModalForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageModalFormColumns",
  components: {
    AButton,
    AlohaExample,
    AlohaTableProps,
    AModalForm,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();
    const {
      dataProps,
    } = PropsAPI();

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
      codeHtml,
      codeJs,
      dataProps,
    };
  },
};
