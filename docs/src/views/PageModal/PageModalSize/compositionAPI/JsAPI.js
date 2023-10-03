export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
export default {
  name: "PageModalSize",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const sizeModal = ref(undefined);

    const openModal = size => {
      sizeModal.value = size;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
      sizeModal,
    };
  },
};`;

  return {
    codeJs,
  };
}
