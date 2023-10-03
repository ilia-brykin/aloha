import {
  ref,
} from "vue";

import AButton from "../../../../../src/AButton/AButton";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import AModal from "../../../../../src/AModal/AModal";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageModalSaveButton",
  components: {
    AButton,
    AlohaExample,
    AModal,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const isModalVisible = ref(undefined);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const saveModal = () => {
      console.log("saveModal");
      closeModal();
    };

    return {
      closeModal,
      codeHtml,
      codeJs,
      isModalVisible,
      openModal,
      saveModal,
    };
  },
};
