export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
export default {
  name: "PageWizardIsButtonsLoading",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isButtonsLoading = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isButtonsLoading,
      text,
      wizardSteps,
    };
  },
};`;

  return {
    codeJs,
  };
}
