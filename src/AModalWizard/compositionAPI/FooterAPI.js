import {
  computed,
  toRef,
} from "vue";

export default function FooterAPI(props) {
  const id = toRef(props, "id");

  const footerId = computed(() => {
    return `${ id.value }_footer`;
  });

  return {
    footerId,
  };
}
