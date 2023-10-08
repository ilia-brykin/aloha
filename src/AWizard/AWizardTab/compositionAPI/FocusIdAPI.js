import {
  computed,
  toRef,
} from "vue";

export default function FocusIdAPI(props) {
  const id = toRef(props, "id");
  const stepIndex = toRef(props, "stepIndex");

  const focusId = computed(() => {
    return `${ id.value }_${ stepIndex.value }_focus`;
  });

  return {
    focusId,
  };
}
