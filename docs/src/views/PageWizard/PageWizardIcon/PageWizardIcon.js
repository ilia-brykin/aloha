import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import AWizard from "../../../../../src/AWizard/AWizard";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageWizardIcon",
  components: {
    AlohaExample,
    ATranslation,
    AWizard,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        icon: "Dnd",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        icon: "Boxes",
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
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      codeHtml,
      codeJs,
      text,
      wizardSteps,
    };
  },
};
