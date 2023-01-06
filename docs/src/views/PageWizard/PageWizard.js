import {
  ref,
} from "vue";


import AForm from "../../../../src/ui/AForm/AForm";
import AWizard from "../../../../src/AWizard/AWizard";

export default {
  name: "PageWizard",
  components: {
    AForm,
    AWizard,
  },
  setup() {
    const model = ref({
      type: "arrows",
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
        label: "Type",
        keyId: "value",
        keyLabel: "label",
        data: [
          {
            label: "basic",
            value: "basic",
          },
          {
            label: "arrows",
            value: "arrows",
          },
          {
            label: "square",
            value: "square",
          },
          {
            label: "round",
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
      formData,
      model,
      text,
      wizardSteps,
    };
  },
};
