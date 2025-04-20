import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AModal,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageModalInModal",
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
      codeHtml,
      codeJs,
      isModal2Visible,
      isModalVisible,
      openModal,
      openModal2,
    };
  },
};
