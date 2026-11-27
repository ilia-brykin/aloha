import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AModalForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageModalFormEnter",
  components: {
    AlohaExample,
    AButton,
    AModalForm,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

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
      codeHtml,
      codeJs,
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
      save,
      saved,
    };
  },
};
