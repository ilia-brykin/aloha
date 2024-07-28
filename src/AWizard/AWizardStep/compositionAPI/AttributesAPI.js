import {
  computed, toRef,
} from "vue";

export default function AttributesAPI(props, {
  isStepDisabled = computed(() => false),
  isStepActive = computed(() => false),
}) {
  const id = toRef(props, "id");
  const stepIndex = toRef(props, "stepIndex");

  const tabindex = computed(() => {
    return isStepDisabled.value || isStepActive.value ? -1 : 0;
  });

  const ariaCurrentAttributes = computed(() => {
    if (isStepActive.value) {
      return {
        "aria-current": "step",
      };
    }
    return {};
  });

  const stepTextId = computed(() => {
    return `${ id.value }_step_text_${ stepIndex.value }`;
  });

  const stepStatusTextId = computed(() => {
    return `${ id.value }_step_status_text_${ stepIndex.value }`;
  });

  return {
    ariaCurrentAttributes,
    tabindex,
    stepStatusTextId,
    stepTextId,
  };
}
