import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const hideHeader = toRef(props, "hideHeader");
  const id = toRef(props, "id");

  const headerId = computed(() => {
    if (hideHeader.value) {
      return undefined;
    }

    return `${ id.value }_header`;
  });

  return {
    headerId,
  };
}
