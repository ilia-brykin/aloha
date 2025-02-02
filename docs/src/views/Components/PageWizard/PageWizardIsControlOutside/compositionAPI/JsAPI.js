export default function JsAPI() {
  const codeJs = `import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsControlOutside",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const stepActive = ref(0);
    const stepsVisited = ref({
      0: true,
    });
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    const goStepBack = ({ targetStepIndex, currentStepIndex, step }) => {
      console.log("currentStepIndex", currentStepIndex);
      console.log("step", step);
      stepActive.value = targetStepIndex;
      stepsVisited.value[targetStepIndex] = true;
    };

    const goStepForward = ({ targetStepIndex, currentStepIndex, step }) => {
      console.log("currentStepIndex", currentStepIndex);
      console.log("step", step);
      stepActive.value = targetStepIndex;
      stepsVisited.value[targetStepIndex] = true;
    };

    return {
      goStepBack,
      goStepForward,
      stepActive,
      stepsVisited,
      text,
      wizardSteps,
    };
  },
};`;

  return {
    codeJs,
  };
}
