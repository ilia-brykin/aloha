import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const id = toRef(props, "id");

  const ariaDescribedby = computed(() => {
    return `${ id.value }_title`;
  });

  return {
    ariaDescribedby,
  };
}
