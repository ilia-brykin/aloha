export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
export default {
  name: "PageModalSaveButton",
  components: {
    AButton,
    AModal,
  },
  setup() {
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
      isModalVisible,
      openModal,
      saveModal,
    };
  },
};`;

  return {
    codeJs,
  };
}
