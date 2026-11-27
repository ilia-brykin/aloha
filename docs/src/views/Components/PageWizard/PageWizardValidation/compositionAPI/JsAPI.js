export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInput,
  ATranslation,
  AWizard,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_EXAMPLE_STEP_PERSON_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_EXAMPLE_STEP_CHECK_",
      },
    ];
    const name = ref("");
    const errors = ref([]);
    const isFinished = ref(false);

    // false keeps the step, the focus goes to the invalid field; going back is always allowed
    const beforeStepChange = ({ direction, from }) => {
      if (direction === "back" || from !== 0) {
        return true;
      }
      errors.value = name.value.trim() ? [] : ["_A_WIZARD_EXAMPLE_NAME_REQUIRED_"];
      return errors.value.length === 0;
    };

    const onFinish = () => {
      isFinished.value = true;
    };

    return {
      beforeStepChange,
      errors,
      isFinished,
      name,
      onFinish,
      wizardSteps,
    };
  },
};`;

  return {
    codeJs,
  };
}
