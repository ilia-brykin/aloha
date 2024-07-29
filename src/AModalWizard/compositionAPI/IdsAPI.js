import {
  computed,
  toRef,
} from "vue";

export default function IdsAPI(props) {
  const id = toRef(props, "id");

  const footerId = computed(() => {
    return `${ id.value }_footer`;
  });

  const wizardId = computed(() => {
    return `${ id.value }_wizard`;
  });

  return {
    footerId,
    wizardId,
  };
}
