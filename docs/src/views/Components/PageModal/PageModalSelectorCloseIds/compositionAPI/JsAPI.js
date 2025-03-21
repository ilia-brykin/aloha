export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSelectorCloseIds",
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

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`;

  return {
    codeJs,
  };
}
