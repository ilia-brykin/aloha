import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  get,
} from "lodash-es";

export default function StepsAPI(props, {
  stepActiveComputed = computed(() => 0),
}) {
  const steps = toRef(props, "steps");
  const stepsProgressbarText = toRef(props, "stepsProgressbarText");
  const extra = toRef(props, "extra");

  const {
    getTranslatedText,
  } = UtilsAPI();

  const stepsCount = computed(() => {
    return steps.value.length;
  });

  const stepActiveLabel = computed(() => {
    return get(steps.value, `${ stepActiveComputed.value }.label`, "");
  });

  const stepActiveLabelTranslated = computed(() => {
    return getTranslatedText({
      placeholder: stepActiveLabel.value,
      extra: extra.value,
    });
  });

  const stepActiveNumber = computed(() => {
    return stepActiveComputed.value + 1;
  });

  const stepsAriaValueTextExtra = computed(() => {
    return {
      stepActiveLabel: stepActiveLabelTranslated.value,
      stepsCount: stepsCount.value,
      stepActive: stepActiveNumber.value,
      ...extra.value,
    };
  });

  const stepsProgressbarTextTranslated = computed(() => {
    return getTranslatedText({
      placeholder: stepsProgressbarText.value,
      extra: stepsAriaValueTextExtra.value,
    });
  });


  return {
    stepActiveNumber,
    stepsCount,
    stepsProgressbarTextTranslated,
  };
}
