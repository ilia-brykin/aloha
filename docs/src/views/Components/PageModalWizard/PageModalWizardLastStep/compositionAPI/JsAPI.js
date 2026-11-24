export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AModalWizard,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalWizard,
    ATranslation,
  },
  setup() {
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
      closeModalWizard,
      isModalWizardVisible,
      openModalWizard,
      wizardSteps,
    };
  },
};`;

  return {
    codeJs,
  };
}
