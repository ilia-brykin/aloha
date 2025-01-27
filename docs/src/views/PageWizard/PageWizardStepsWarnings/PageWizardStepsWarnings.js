import {
  ref,
} from "vue";

import {
  ASelect,
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageWizardStepsWarnings",
  components: {
    AlohaExample,
    ASelect,
    ASwitch,
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
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        warning: false,
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        warning: false,
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
        warning: true,
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
        warning: false,
      },
    ]);
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      codeHtml,
      codeJs,
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};
