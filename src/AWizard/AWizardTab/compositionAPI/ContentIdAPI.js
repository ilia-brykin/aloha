import {
  computed,
  toRef,
} from "vue";

export default function ContentIdAPI(props) {
  const id = toRef(props, "id");
  const stepIndex = toRef(props, "stepIndex");

  const contentId = computed(() => {
    return `${ id.value }_${ stepIndex.value }_content`;
  });

  return {
    contentId,
  };
}
