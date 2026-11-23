export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AModal,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const isModal2Visible = ref(undefined);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const openModal2 = () => {
      isModal2Visible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const closeModal2 = () => {
      isModal2Visible.value = false;
    };

    return {
      closeModal,
      closeModal2,
      isModal2Visible,
      isModalVisible,
      openModal,
      openModal2,
    };
  },
};`;

  return {
    codeJs,
  };
}
