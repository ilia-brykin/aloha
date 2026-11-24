import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import filterStripHtml from "../../../filters/filterStripHtml";

export default function HeadingAPI(props) {
  const extra = toRef(props, "extra");
  const id = toRef(props, "id");
  const step = toRef(props, "step");
  const stepIconErrorText = toRef(props, "stepIconErrorText");
  const stepIconWarningText = toRef(props, "stepIconWarningText");
  const stepIndex = toRef(props, "stepIndex");
  const stepsCount = toRef(props, "stepsCount");

  const headingId = computed(() => {
    return `${ id.value }_${ stepIndex.value }_heading`;
  });

  // "Step 2 of 4: Address – Step error"
  const headingText = computed(() => {
    const LABEL = filterStripHtml(getTranslatedText({
      placeholder: step.value.label,
      extra: extra.value,
    }));
    const TEXT = getTranslatedText({
      placeholder: "_A_WIZARD_STEP_HEADING_{{stepNumber}}_{{stepsCount}}_{{label}}_",
      extra: {
        label: LABEL,
        stepNumber: stepIndex.value + 1,
        stepsCount: stepsCount.value,
      },
    });
    let status;
    if (step.value.error) {
      status = stepIconErrorText.value;
    } else if (step.value.warning) {
      status = stepIconWarningText.value;
    }
    return status ? `${ TEXT } – ${ getTranslatedText({ placeholder: status }) }` : TEXT;
  });

  return {
    headingId,
    headingText,
  };
}
