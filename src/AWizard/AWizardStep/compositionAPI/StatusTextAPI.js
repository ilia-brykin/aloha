import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function StatusTextAPI(props, {
  isStepActive = computed(() => false),
  isStepVisited = computed(() => false),
  titleIconErrorWarning = computed(() => undefined),
}) {
  // "Step visited, Step error": the state and the error or warning of the step
  const statusText = computed(() => {
    let status = "_A_WIZARD_STEP_UPCOMING_";
    if (isStepActive.value) {
      status = "_A_WIZARD_STEP_ACTIVE_";
    } else if (isStepVisited.value) {
      status = "_A_WIZARD_STEP_VISITED_";
    }
    return [status, titleIconErrorWarning.value]
      .filter(Boolean)
      .map(placeholder => getTranslatedText({ placeholder }))
      .join(", ");
  });

  return {
    statusText,
  };
}
