import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const id = toRef(props, "id");
  const stepIndex = toRef(props, "stepIndex");

  const stepTextId = computed(() => {
    return `${ id.value }_step_text_${ stepIndex.value }`;
  });

  const stepStatusTextId = computed(() => {
    return `${ id.value }_step_status_text_${ stepIndex.value }`;
  });

  return {
    stepStatusTextId,
    stepTextId,
  };
}
