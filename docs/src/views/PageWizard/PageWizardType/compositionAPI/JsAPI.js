export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
export default {
  name: "PageWizardType",
  components: {
    ASelect,
    ATranslation,
    AWizard,
  },
  setup() {
    const modelType = ref("basic");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_SQUARE_",
        value: "square",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    
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
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};`;

  return {
    codeJs,
  };
}
