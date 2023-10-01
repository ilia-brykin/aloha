import {
  ref,
} from "vue";

import AForm from "../../../../src/ui/AForm/AForm";
import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import AWizard from "../../../../src/AWizard/AWizard";
import PageWizardBasic from "./PageWizardBasic/PageWizardBasic.vue";
import PageWizardType from "./PageWizardType/PageWizardType.vue";
import PageWizardButtons from "./PageWizardButtons/PageWizardButtons.vue";
import PageWizardButtonsDisabled from "./PageWizardButtonsDisabled/PageWizardButtonsDisabled.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageWizard",
  components: {
    AForm,
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    AWizard,
    PageWizardBasic,
    PageWizardType,
    PageWizardButtons,
    PageWizardButtonsDisabled,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    const {
      dataExposes,
    } = ExposesAPI();

    const model = ref({
      type: "square",
      isForwardStepButtonDisabled: true,
      isBackStepButtonDisabled: false,
      isStepNumberVisible: true,
      isForwardButtonDisabled: false,
      isBackButtonDisabled: false,
      isForwardButtonHide: false,
      isBackButtonHide: false,
      isForwardLastButtonHide: false,
      isBackFirstButtonHide: false,
      isButtonsLoading: false,
    });

    const formData = [
      {
        id: "type",
        type: "select",
        label: "_TYPE_",
        keyId: "value",
        keyLabel: "label",
        data: [
          {
            label: "_BASIC_",
            value: "basic",
          },
          {
            label: "_ARROWS_",
            value: "arrows",
          },
          {
            label: "_SQUARE_",
            value: "square",
          },
          {
            label: "_ROUND_",
            value: "round",
          },
        ],
      },
      {
        id: "isForwardStepButtonDisabled",
        type: "switch",
        label: "isForwardStepButtonDisabled",
      },
      {
        id: "isBackStepButtonDisabled",
        type: "switch",
        label: "isBackStepButtonDisabled",
      },
      {
        id: "isForwardButtonDisabled",
        type: "switch",
        label: "isForwardButtonDisabled",
      },
      {
        id: "isBackButtonDisabled",
        type: "switch",
        label: "isBackButtonDisabled",
      },
      {
        id: "isForwardButtonHide",
        type: "switch",
        label: "isForwardButtonHide",
      },
      {
        id: "isBackButtonHide",
        type: "switch",
        label: "isBackButtonHide",
      },
      {
        id: "isForwardLastButtonHide",
        type: "switch",
        label: "isForwardLastButtonHide",
      },
      {
        id: "isBackFirstButtonHide",
        type: "switch",
        label: "isBackFirstButtonHide",
      },
      {
        id: "isStepNumberVisible",
        type: "switch",
        label: "isStepNumberVisible",
      },
      {
        id: "isButtonsLoading",
        type: "switch",
        label: "isButtonsLoading",
      },
    ];

    const wizardSteps = [
      {
        slot: "step1",
        label: "Schritt 1",
        title: "Schritt 1",
      },
      {
        slot: "step2",
        label: "Schritt 2",
        title: "Schritt 2",
      },
      {
        slot: "step3",
        label: "Schritt 3",
        title: "Schritt 3",
        error: true,
      },
      {
        slot: "step4",
        label: "Schritt 4",
        title: "Schritt 4",
        warning: true,
      },
      {
        slot: "step5",
        label: "Schritt 5",
        title: "Schritt 5",
      },
      {
        slot: "step6",
        label: "Schritt langeeeeeeeeeeeeeeeeeeeeeeee text 6",
        title: "Schritt 6",
      },
      {
        slot: "step7",
        label: "Schritt 7",
        title: "Schritt 7",
      },
    ];

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
      formData,
      model,
      text,
      wizardSteps,
    };
  },
};
