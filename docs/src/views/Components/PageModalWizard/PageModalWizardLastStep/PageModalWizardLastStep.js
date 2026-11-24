import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AModalWizard,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageModalWizardLastStep",
  components: {
    AButton,
    AModalWizard,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const isModalWizardVisible = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
      },
    ];

    const openModalWizard = () => {
      isModalWizardVisible.value = true;
    };

    const closeModalWizard = () => {
      isModalWizardVisible.value = false;
    };

    return {
      codeHtml,
      codeJs,
      closeModalWizard,
      isModalWizardVisible,
      openModalWizard,
      wizardSteps,
    };
  },
};
