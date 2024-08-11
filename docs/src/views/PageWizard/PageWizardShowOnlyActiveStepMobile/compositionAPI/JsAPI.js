export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
export default {
  name: "PageWizardShowOnlyActiveStepMobile",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const showOnlyActiveStepMobile = ref(true);
    const modelType = ref("line");
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
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = [
      {
        id: "1",
        slot: "step",
        label: "Lorem",
      },
      {
        id: "2",
        slot: "step",
        label: "ipsum",
      },
      {
        id: "3",
        slot: "step",
        label: "dolor",
      },
      {
        id: "4",
        slot: "step",
        label: "sit",
      },
      {
        id: "5",
        slot: "step",
        label: "amet",
      },
      {
        id: "6",
        slot: "step",
        label: "consectetur",
      },
      {
        id: "7",
        slot: "step",
        label: "adipiscing",
      },
      {
        id: "8",
        slot: "step",
        label: "elit",
      },
      {
        id: "9",
        slot: "step",
        label: "Quisque",
      },
      {
        id: "10",
        slot: "step",
        label: "nisl",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      modelType,
      showOnlyActiveStepMobile,
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
